require 'date'
require 'mongo'

def read_sensor(second_try=false)
  reading = %x[ /home/tyler/usbtenki-1.7/client/usbtenkiget -ia ]
  time = DateTime.now.strftime("%F %R")   # format: "2012-03-28T21:52" 
  if reading.match(/No device found/)
    raise "could not find temp/humidity sensor!" if second_try
    enable_sensor
    read_sensor(true)
  else
    ctemp, rhumidity = reading.strip.split( ', ')[0,2]
    mongo_record(time,ctemp,rhumidity)
  end
end

def mongo_record(time, ctemp, rhumidity)
  db = Mongo::Connection.new("localhost", 3001).db("env")
  db.collection("air").insert({:time => time, :ctemp => ctemp, :rhumidity => rhumidity })
  puts "recorded #{time} #{ctemp}C #{rhumidity}% humidity" if ARGV[0] == "v"
end

def enable_sensor
  devices = %x[ lsusb ]
  sensor_line = devices.lines.find{ |x| x.match /Multiple Vendors/ }
  raise "temp/humidity sensor not found!" unless sensor_line
  parsed = sensor_line.split
  dir = parsed[1]
  file = parsed[3][0..-2]
  %x[ chgrp sensor /dev/bus/usb/#{dir}/#{file}]
end

read_sensor
