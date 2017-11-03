// create instances of the sensors
int sensor1 = A0;
int sensor2 = A1;
//int sensor3 = A2;

char val;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  //read and figure out my range
  int pressureRaw1 = analogRead(sensor1);//getting values between 0-990
  //to fit my sensor into a single byte
  //if we have a full range (0-1023), then can divide by 4
  // if we don’t have a full range, then map()
  int pressure1 = map(pressureRaw1, 0, 990, 0, 255); //the range of actual sensor
  int pressureRaw2=analogRead(sensor2);
  int pressure2 = map(pressureRaw2, 0, 990, 0, 255); //the range of actual sensor
 // int pressureRaw3=analogRead(sensor3);
  //int pressure3 = map(pressureRaw3, 0, 990, 0, 255); //the range of actual sensor

  //send values serially 
  Serial.print(pressureRaw1); //sends ASCII
  Serial.print(','); //
  Serial.println(pressureRaw2); //
 // Serial.print(','); //
 // Serial.println(pressureRaw3); //

}
    
