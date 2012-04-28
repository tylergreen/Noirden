require 'date'
require 'mongo'
require 'serialport'

# usage: first ARGV is seconds it will wait and build buffer of readings from arduino
# default is 10 seconds if not specified

def arduino_serial_port
  id_match = %x[ls -al /dev/serial/by-id ].match("../../(\\w+)")
  raise "no temperature sensor found" unless id_match
  "/dev/" + id_match[1]
end

# idea: take all available readings from the arduino (which takes readings every 5 seconds) and select the median
# If we run this script every minute that should give us a decent approximation
# If you have a better way of doing it then do it
def read_arduino
  arduino_delay_seconds = 5
  reads_per_minute = 60 / arduino_delay_seconds
  baud = 38400
  arduino = arduino_serial_port
  raise "Arduino not found" unless arduino
  sp = SerialPort.new(arduino, baud)
  wait_time = ARGV[0].to_i || 10
  sleep(wait_time) # have to sleep after created so some readings can get buffered
  sp.read_timeout = -1 # just read whatever data is available
  readings = sp.read
  raise "No available readings: #{ readings }" if readings == ""
  recent_readings = readings.lines.to_a.last(reads_per_minute) 
  parsed = recent_readings.select{ |r| r.match("celsius = ") }.map{ |x| x.split("=")[1].to_f }.sort
  median = parsed[ parsed.length / 2 ]
  time = DateTime.now.strftime("%F %R")   # format: "2012-03-28 21:52" 
  mongo_record(time, median)
end

def mongo_record(time, ctemp)
  db = Mongo::Connection.new("localhost", 3001).db("env")
  db.collection("water").insert({:time => time, :water_temp_celsius => ctemp })
  puts "recorded #{time} #{ctemp}C to env.water" if ARGV[1] == "v"
end

read_arduino
  
  
