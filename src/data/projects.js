
export const projects = [
  {
    id: 'p1',
    slug: 'day-01-blinking-led',
    title: 'Day-01 Blinking LED',
    category: 'Basics',
    level: 'Beginner',
    duration: '20 min',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85',
    summary:
      'Build your first Arduino circuit and make an LED blink at a steady interval.',
    components: [
      'Arduino Uno',
      'LED',
      '220Ω resistor',
      'Breadboard',
      'Jumper wires',
    ],
    videoId: '5v5Q6w0gV4I',
    code: `const int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);
  delay(1000);
  digitalWrite(ledPin, LOW);
  delay(1000);
}`,
  },

  {
    id: 'p2',
    slug: 'button-controlled-led',
    title: 'Button Controlled LED',
    category: 'Inputs & Outputs',
    level: 'Beginner',
    duration: '30 min',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=85',
    summary:
      'Use a push button as an input to control an LED output.',
    components: [
      'Arduino Uno',
      'Push button',
      'LED',
      'Resistor',
      'Breadboard',
    ],
    videoId: 'fJWR7dBuc18',
    code: `const int buttonPin = 2;
const int ledPin = 13;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, digitalRead(buttonPin) == LOW);
}`,
  },

  {
    id: 'p3',
    slug: 'ultrasonic-distance-meter',
    title: 'Ultrasonic Distance Meter',
    category: 'Sensors',
    level: 'Intermediate',
    duration: '45 min',
    image:
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=85',
    summary:
      'Measure distance with an ultrasonic sensor and read the result in Serial Monitor.',
    components: [
      'Arduino Uno',
      'HC-SR04 sensor',
      'Jumper wires',
    ],
    videoId: '6F1B_N6LuKw',
    code: `const int trigPin = 9;
const int echoPin = 10;

void setup() {
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);

  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  long duration = pulseIn(echoPin, HIGH);
  Serial.println(duration * 0.034 / 2);

  delay(250);
}`,
  },

  {
    id: 'p4',
    slug: 'traffic-light-controller',
    title: 'Traffic Light Controller',
    category: 'Basics',
    level: 'Beginner',
    duration: '35 min',
    image:
      'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1000&q=85',
    summary:
      'Create a three-LED traffic signal sequence and learn timing logic.',
    components: [
      'Arduino Uno',
      'Red, yellow and green LEDs',
      '220Ω resistors',
      'Breadboard',
    ],
    videoId: 'nL34zDTPkcs',
    code: `const int red = 8;
const int yellow = 9;
const int green = 10;

void setup() {
  pinMode(red, OUTPUT);
  pinMode(yellow, OUTPUT);
  pinMode(green, OUTPUT);
}

void loop() {
  digitalWrite(green, HIGH);
  delay(3000);
  digitalWrite(green, LOW);

  digitalWrite(yellow, HIGH);
  delay(1000);
  digitalWrite(yellow, LOW);

  digitalWrite(red, HIGH);
  delay(3000);
  digitalWrite(red, LOW);
}`,
  },

  {
    id: 'p5',
    slug: 'servo-motor-control',
    title: 'Servo Motor Control',
    category: 'Motors',
    level: 'Intermediate',
    duration: '40 min',
    image:
      'https://images.unsplash.com/photo-1563770660941-10a63607739e?auto=format&fit=crop&w=1000&q=85',
    summary:
      'Control a small servo motor using the Arduino Servo library.',
    components: [
      'Arduino Uno',
      'SG90 servo',
      'Jumper wires',
    ],
    videoId: 'kUHmYKWwuWs',
    code: `#include <Servo.h>

Servo myServo;

void setup() {
  myServo.attach(9);
}

void loop() {
  myServo.write(0);
  delay(1000);

  myServo.write(90);
  delay(1000);

  myServo.write(180);
  delay(1000);
}`,
  },

  {
    id: 'p6',
    slug: 'smart-plant-watering',
    title: 'Smart Plant Watering',
    category: 'IoT & Smart',
    level: 'Intermediate',
    duration: '60 min',
    image:
      'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85',
    summary:
      'Read soil moisture and switch a small pump based on a threshold.',
    components: [
      'Arduino Uno',
      'Soil moisture sensor',
      'Relay module',
      'Low-voltage pump',
    ],
    videoId: 'pZ2i6Z1F5sQ',
    code: `const int soilPin = A0;
const int relayPin = 7;
const int threshold = 550;

void setup() {
  Serial.begin(9600);
  pinMode(relayPin, OUTPUT);
}

void loop() {
  int moisture = analogRead(soilPin);

  digitalWrite(
    relayPin,
    moisture > threshold ? LOW : HIGH
  );

  Serial.println(moisture);
  delay(1000);
}`,
  },
];
