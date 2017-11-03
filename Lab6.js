var serial; //variable to hold an instance of the serial port library
//my port is:
var portName = "COM4";
//the first thing to do is check your ports
var inData;
var sensor1, sensor2;

function setup() { 
  createCanvas(400, 400);
 
 serial = new p5.SerialPort(); // a new instance of serial port library
  //set up events for serial communication
  serial.on ('connected', serverConnected);
  serial.on('open', portOpen);
  serial.on('data', serialEvent);
  serial.on('error', serialError);        
  serial.open(portName);
  //let's figure out what port we're on
 	//serial.on('list,printList); //set a callback function for a serialport list event
  //serial.list(); //list the serial ports
}
function draw() { 
  background(220);
  ballx = map(sensor1, 0, 1023, 0+200, 0-100);
  ellipse(ballx, height/2, 100);
   // change the color of the ellipse
  if (sensor2>150) {
    fill(0);
  } else { 
    fill(255);
  }
   
 
}

//all my callback functions here
function serverConnected(){
  console.log('connected to the server');
}
function serialEvent(){
  //
  inData = serial.readLine();
  if (inData.length > 0){
    var numbers = split(inData, ',');
    sensor1 = Number(numbers[0]);
    sensor2 = Number(numbers[1]);}
}
function portOpen(){

console.log(inData);
}
function serialError(err){
  console.log('something went wrong with the port' + err);
}
  
// get the list of ports:
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 print(i + " " + portList[i]);
 }
}
