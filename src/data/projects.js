
export const projects = [
  {
    id: 'p1',
    slug: 'day-01-blinking-led',
    title: 'Day-01 Blinking LED',
    category: 'Arduino Basics',
    level: 'Beginner',
    duration: '20 min',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
    summary:
      'Build your first Arduino circuit and make an LED blink at a steady interval.',
    introduction:
      'Start your Arduino journey with a simple LED blinking project. You will learn how to configure a digital output pin, control an LED and use timing functions.',
    objectives: [
      'Understand Arduino digital output pins.',
      'Learn pinMode() and digitalWrite().',
      'Control the timing of an LED using delay().',
    ],
    components: [
      { name: 'Arduino Uno', quantity: 1, purpose: 'Controls the circuit' },
      { name: 'LED', quantity: 1, purpose: 'Visual output' },
      { name: '220Ω resistor', quantity: 1, purpose: 'Limits LED current' },
      { name: 'Breadboard', quantity: 1, purpose: 'Build the circuit' },
      { name: 'Jumper wires', quantity: 2, purpose: 'Make connections' },
    ],
    wiringTable: [
      { arduinoPin: 'D13', componentPin: 'LED anode (+)', description: 'Connect through a suitable current-limiting resistor.' },
      { arduinoPin: 'GND', componentPin: 'LED cathode (-)', description: 'Connect the LED cathode to ground.' },
    ],
    sections: [
      {
        title: 'What is an LED?',
        paragraphs: [
          'An LED is a light-emitting diode. It has two terminals: an anode and a cathode. The polarity matters when connecting it to a DC circuit.',
          'A resistor limits current and helps protect the LED and the circuit. Do not connect an external LED directly to a power pin without suitable current limiting.',
        ],
        bullets: ['Anode: positive side', 'Cathode: negative side'],
      },
      {
        title: 'Understanding the Arduino code',
        paragraphs: [
          'The setup() function runs once after the board starts. It configures pin 13 as an output.',
          'The loop() function repeats continuously. The program turns the LED on, waits one second, turns it off and waits again.',
        ],
        note: 'The delay() value is measured in milliseconds. For example, delay(1000) pauses for approximately one second.',
      },
    ],
    codeNotes: [
      'const int ledPin = 13 stores the output pin number.',
      'pinMode(ledPin, OUTPUT) configures the pin as an output.',
      'digitalWrite() switches the output HIGH or LOW.',
      'delay(1000) pauses the program for one second.',
    ],
    steps: [
      {
        title: 'Prepare the components',
        description: 'Keep the Arduino Uno, LED, resistor, breadboard and jumper wires ready.',
      },
      {
        title: 'Connect the LED',
        description: 'Connect the LED anode to D13 through a suitable resistor and connect the cathode to GND.',
      },
      {
        title: 'Open Arduino IDE',
        description: 'Create a new sketch and paste the blinking LED code.',
      },
      {
        title: 'Upload and test',
        description: 'Select the correct board and port, upload the sketch and observe the LED.',
      },
    ],
    workingPrinciple:
      'The Arduino repeatedly changes its output pin between HIGH and LOW. The LED lights when current flows through it and turns off when the output is switched off.',
    troubleshooting: [
      { problem: 'LED does not turn on', solution: 'Check the LED polarity, resistor, breadboard connections and selected pin.' },
      { problem: 'LED stays on', solution: 'Confirm that the correct sketch was uploaded and that the LED is connected to the intended output.' },
    ],
    faqs: [
      { question: 'Can I change the blinking speed?', answer: 'Yes. Change the delay values to adjust the on and off time.' },
      { question: 'Can I use another digital pin?', answer: 'Yes. Change ledPin in the sketch and move the wire to the same pin.' },
    ],
    videoId: '',
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
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85',
    summary: 'Use a push button as an input to control an LED output.',
    introduction:
      'In this project, a push button acts as a digital input. Arduino reads the button state and changes the LED output accordingly.',
    objectives: [
      'Understand digital input and output.',
      'Learn how INPUT_PULLUP works.',
      'Read a button state using digitalRead().',
    ],
    components: [
      { name: 'Arduino Uno', quantity: 1, purpose: 'Reads the button and controls the LED' },
      { name: 'Push button', quantity: 1, purpose: 'User input' },
      { name: 'LED', quantity: 1, purpose: 'Visual output' },
      { name: '220Ω resistor', quantity: 1, purpose: 'Limits LED current' },
      { name: 'Breadboard and wires', quantity: 1, purpose: 'Circuit connections' },
    ],
    wiringTable: [
      { arduinoPin: 'D2', componentPin: 'Push button', description: 'Connect the button between D2 and GND.' },
      { arduinoPin: 'D13', componentPin: 'LED anode (+)', description: 'Connect through a suitable resistor.' },
      { arduinoPin: 'GND', componentPin: 'LED cathode (-)', description: 'Connect to ground.' },
    ],
    sections: [
      {
        title: 'How INPUT_PULLUP works',
        paragraphs: [
          'Arduino Uno can enable an internal pull-up resistor on a digital input. This helps keep the input at a known HIGH state when the button is not pressed.',
          'With INPUT_PULLUP, pressing the button connects the input to GND. Therefore, LOW means pressed and HIGH means released.',
        ],
        note: 'Do not reverse the button logic: with INPUT_PULLUP, a pressed button reads LOW.',
      },
    ],
    codeNotes: [
      'buttonPin is configured as INPUT_PULLUP.',
      'digitalRead(buttonPin) reads the current button state.',
      'The comparison == LOW becomes true when the button is pressed.',
    ],
    steps: [
      { title: 'Place the button', description: 'Place the push button across the breadboard centre gap if using a standard four-pin button.' },
      { title: 'Connect the input', description: 'Wire the button between D2 and GND. The sketch uses the internal pull-up resistor.' },
      { title: 'Connect the LED', description: 'Connect the LED to D13 through a suitable resistor and return it to GND.' },
      { title: 'Upload and test', description: 'Upload the sketch and press the button to change the LED state.' },
    ],
    workingPrinciple:
      'The Arduino reads the button input continuously. When the input is LOW, the LED output is switched on; when the input is HIGH, the LED output is switched off.',
    troubleshooting: [
      { problem: 'LED logic appears reversed', solution: 'Remember that INPUT_PULLUP reads LOW when the button is pressed.' },
      { problem: 'Button does not respond', solution: 'Check that the button bridges the correct breadboard rows and connects D2 to GND when pressed.' },
    ],
    faqs: [
      { question: 'Do I need an external pull-up resistor?', answer: 'Not for this sketch, because INPUT_PULLUP enables the internal pull-up resistor.' },
      { question: 'Can I use another input pin?', answer: 'Yes. Change buttonPin in the sketch and move the button connection to that pin.' },
    ],
    videoId: '',
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
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=85',
    summary: 'Measure distance with an ultrasonic sensor and read the result in Serial Monitor.',
    introduction:
      'The HC-SR04 sensor sends an ultrasonic pulse and measures the time taken for its echo to return. Arduino uses this time to estimate the distance to an object.',
    objectives: [
      'Understand trigger and echo pins.',
      'Measure pulse duration with pulseIn().',
      'Convert pulse duration into distance.',
    ],
    components: [
      { name: 'Arduino Uno', quantity: 1, purpose: 'Processes sensor readings' },
      { name: 'HC-SR04 sensor', quantity: 1, purpose: 'Measures distance' },
      { name: 'Jumper wires', quantity: 4, purpose: 'Connects the sensor' },
      { name: 'USB cable', quantity: 1, purpose: 'Power and serial communication' },
    ],
    wiringTable: [
      { arduinoPin: '5V', componentPin: 'VCC', description: 'Sensor power supply for a typical HC-SR04 module.' },
      { arduinoPin: 'GND', componentPin: 'GND', description: 'Common ground.' },
      { arduinoPin: 'D9', componentPin: 'TRIG', description: 'Sends the trigger pulse.' },
      { arduinoPin: 'D10', componentPin: 'ECHO', description: 'Reads the echo pulse; this direct connection is for a 5V Arduino Uno.' },
    ],
    sections: [
      {
        title: 'How ultrasonic distance measurement works',
        paragraphs: [
          'The trigger pin sends a short pulse to start a measurement. The sensor then emits an ultrasonic burst and raises the echo signal for a duration related to the round-trip travel time.',
          'The program estimates distance by multiplying the duration by the speed of sound and dividing by two, because the sound travels to the object and back.',
        ],
        note: 'Readings can be affected by soft, angled or very small objects and by the sensor’s usable range.',
      },
    ],
    codeNotes: [
      'TRIG sends a brief pulse to start measurement.',
      'pulseIn() measures how long ECHO remains HIGH.',
      'The expression duration * 0.034 / 2 estimates distance in centimetres.',
      'Serial Monitor should be set to 9600 baud.',
    ],
    steps: [
      { title: 'Connect power', description: 'Connect VCC to 5V and GND to GND on the Arduino Uno.' },
      { title: 'Connect signal pins', description: 'Connect TRIG to D9 and ECHO to D10.' },
      { title: 'Upload the sketch', description: 'Paste the code and upload it to the Arduino Uno.' },
      { title: 'Open Serial Monitor', description: 'Set the baud rate to 9600 and place an object in front of the sensor.' },
    ],
    workingPrinciple:
      'The sensor measures the time between sending an ultrasonic pulse and receiving its echo. The Arduino converts this duration to an approximate distance in centimetres.',
    troubleshooting: [
      { problem: 'Serial Monitor shows zero or inconsistent values', solution: 'Check the TRIG and ECHO wiring, baud rate and sensor power.' },
      { problem: 'Distance is unstable', solution: 'Keep the target in front of the sensor, avoid angled surfaces and test within the sensor range.' },
    ],
    faqs: [
      { question: 'Which baud rate should I use?', answer: 'Use 9600 baud to match Serial.begin(9600).' },
      { question: 'Can this measure every type of object?', answer: 'No. Material, angle, size and distance can affect echo quality.' },
    ],
    videoId: '',
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

  long duration = pulseIn(echoPin, HIGH, 30000);

  if (duration == 0) {
    Serial.println("No echo detected");
  } else {
    float distance = duration * 0.0343 / 2;
    Serial.print("Distance: ");
    Serial.print(distance);
    Serial.println(" cm");
  }

  delay(250);
}`,
  },

  {
    id: 'p4',
    slug: 'traffic-light-controller',
    title: 'Traffic Light Controller',
    category: 'Arduino Basics',
    level: 'Beginner',
    duration: '35 min',
    image:
      'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=85',
    summary: 'Create a three-LED traffic signal sequence and learn timing logic.',
    introduction:
      'Build a miniature traffic-light sequence using red, yellow and green LEDs. This project demonstrates digital outputs and timed sequences.',
    objectives: [
      'Control several output pins.',
      'Build a repeating sequence.',
      'Understand delays and sequence timing.',
    ],
    components: [
      { name: 'Arduino Uno', quantity: 1, purpose: 'Runs the signal sequence' },
      { name: 'Red LED', quantity: 1, purpose: 'Stop signal' },
      { name: 'Yellow LED', quantity: 1, purpose: 'Transition signal' },
      { name: 'Green LED', quantity: 1, purpose: 'Go signal' },
      { name: '220Ω resistors', quantity: 3, purpose: 'Limit LED current' },
      { name: 'Breadboard and wires', quantity: 1, purpose: 'Circuit connections' },
    ],
    wiringTable: [
      { arduinoPin: 'D8', componentPin: 'Red LED anode (+)', description: 'Connect through a suitable resistor.' },
      { arduinoPin: 'D9', componentPin: 'Yellow LED anode (+)', description: 'Connect through a suitable resistor.' },
      { arduinoPin: 'D10', componentPin: 'Green LED anode (+)', description: 'Connect through a suitable resistor.' },
      { arduinoPin: 'GND', componentPin: 'All LED cathodes (-)', description: 'Connect cathodes to the common ground.' },
    ],
    sections: [
      {
        title: 'Traffic signal sequence',
        paragraphs: [
          'A basic demonstration can turn on green, then yellow, then red. Each LED represents a different signal state.',
          'This is a classroom model only. Real traffic control systems require additional safety engineering and must not be replaced by this simple circuit.',
        ],
      },
    ],
    codeNotes: [
      'Each LED uses a separate digital output.',
      'The program turns off each LED before moving to the next state.',
      'The delay values set how long each signal remains on.',
    ],
    steps: [
      { title: 'Arrange the LEDs', description: 'Place red, yellow and green LEDs on the breadboard.' },
      { title: 'Wire each output', description: 'Connect the LED anodes through individual resistors to D8, D9 and D10.' },
      { title: 'Connect ground', description: 'Connect all LED cathodes to GND.' },
      { title: 'Upload the sequence', description: 'Upload the code and observe the repeating signal pattern.' },
    ],
    workingPrinciple:
      'The Arduino turns each output on for a programmed duration and then moves to the next output. The loop repeats the sequence continuously.',
    troubleshooting: [
      { problem: 'One colour does not light', solution: 'Check that LED polarity and pin numbers match the sketch.' },
      { problem: 'More than one LED stays on', solution: 'Check the code sequence and confirm that the wiring matches the intended output pins.' },
    ],
    faqs: [
      { question: 'Can I change the signal duration?', answer: 'Yes. Change the delay values in milliseconds.' },
      { question: 'Is this suitable for real traffic lights?', answer: 'No. This is an educational model and not a safety-rated traffic controller.' },
    ],
    videoId: '',
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
      'https://images.unsplash.com/photo-1563770660941-10a63607739e?auto=format&fit=crop&w=1200&q=85',
    summary: 'Control a small servo motor using the Arduino Servo library.',
    introduction:
      'A hobby servo moves its output shaft toward a requested angle. In this example, the Servo library commands a typical positional servo to move between three angles.',
    objectives: [
      'Understand servo signal, power and ground.',
      'Use the Servo library.',
      'Command different target angles.',
    ],
    components: [
      { name: 'Arduino Uno', quantity: 1, purpose: 'Sends the control signal' },
      { name: 'SG90 servo', quantity: 1, purpose: 'Moves to commanded angles' },
      { name: 'Jumper wires', quantity: 3, purpose: 'Connect power and signal' },
    ],
    wiringTable: [
      { arduinoPin: 'D9', componentPin: 'Signal', description: 'Usually orange or yellow on common SG90 leads.' },
      { arduinoPin: 'GND', componentPin: 'Ground', description: 'Common ground between servo supply and Arduino.' },
      { arduinoPin: 'Suitable 5V supply', componentPin: 'Power', description: 'Check servo current requirements; avoid overloading the Arduino 5V pin.' },
    ],
    sections: [
      {
        title: 'Servo power and signal',
        paragraphs: [
          'A typical SG90 has three leads: signal, power and ground. Wire colours vary by manufacturer, so verify the labels or datasheet for your specific servo.',
          'A servo may draw more current than the Arduino board can safely supply. For reliable operation, use an appropriate regulated supply and connect its ground to Arduino GND.',
        ],
        note: 'Disconnect power before changing wiring. Confirm the servo voltage and current requirements before powering it.',
      },
    ],
    codeNotes: [
      'Servo.h provides the Servo library.',
      'attach(9) assigns the control signal to pin 9.',
      'write(0), write(90) and write(180) request different angles for a typical positional servo.',
    ],
    steps: [
      { title: 'Identify the servo leads', description: 'Identify signal, power and ground from the servo documentation.' },
      { title: 'Connect the signal', description: 'Connect the signal lead to D9.' },
      { title: 'Connect power safely', description: 'Use a suitable supply for the servo and share ground with the Arduino.' },
      { title: 'Upload and observe', description: 'Upload the sketch and observe the servo move between target angles.' },
    ],
    workingPrinciple:
      'The Servo library generates the control pulses used by a typical hobby servo. The servo’s internal controller moves the shaft toward the requested position.',
    troubleshooting: [
      { problem: 'Servo jitters or resets the Arduino', solution: 'Check power supply capacity, wiring and common ground. Use a suitable separate supply if required.' },
      { problem: 'Servo does not move', solution: 'Check the signal pin, power polarity and that the Servo library is available.' },
    ],
    faqs: [
      { question: 'Can I use a different pin?', answer: 'The control signal can usually be attached to another supported digital pin by changing the attach() argument.' },
      { question: 'Can every servo rotate through 180 degrees?', answer: 'No. Travel range varies by model; do not force the mechanism past its limits.' },
    ],
    videoId: '',
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
    category: 'Sensors & Automation',
    level: 'Intermediate',
    duration: '60 min',
    image:
      'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=85',
    summary: 'Read soil moisture and control a low-voltage pump using a relay module.',
    introduction:
      'This classroom automation project reads a soil-moisture sensor and uses a relay module to control a low-voltage pump when the soil reading crosses a chosen threshold.',
    objectives: [
      'Read an analog sensor using analogRead().',
      'Set a threshold for an automated response.',
      'Understand relay modules and external loads.',
    ],
    components: [
      { name: 'Arduino Uno', quantity: 1, purpose: 'Reads the sensor and controls the relay input' },
      { name: 'Soil moisture sensor', quantity: 1, purpose: 'Measures a moisture-related signal' },
      { name: 'Relay module', quantity: 1, purpose: 'Switches a compatible pump circuit' },
      { name: 'Low-voltage pump', quantity: 1, purpose: 'Moves water' },
      { name: 'Suitable external power supply', quantity: 1, purpose: 'Powers the pump according to its rating' },
    ],
    wiringTable: [
      { arduinoPin: 'A0', componentPin: 'Sensor analog output', description: 'Read the sensor output.' },
      { arduinoPin: '5V / GND', componentPin: 'Sensor power / ground', description: 'Follow the sensor module voltage specification.' },
      { arduinoPin: 'D7', componentPin: 'Relay input', description: 'Use only a compatible relay module and confirm its trigger logic.' },
      { arduinoPin: 'External supply', componentPin: 'Pump power circuit', description: 'Wire the pump through relay contacts according to its rating and module instructions.' },
    ],
    sections: [
      {
        title: 'Understanding soil moisture readings',
        paragraphs: [
          'The sensor produces a reading related to the moisture in the soil. The actual values depend on the sensor type, soil composition and calibration.',
          'A threshold is only a starting point. Test the sensor in your own soil to determine appropriate readings before relying on automatic watering.',
        ],
      },
      {
        title: 'Relay and pump safety',
        paragraphs: [
          'The relay module is an interface between the Arduino control signal and a separate load circuit. The pump must use a power supply appropriate for its voltage and current rating.',
          'Keep water away from exposed electronics. For this demonstration, use a low-voltage pump and follow the relay module documentation. Do not connect mains voltage to a breadboard or exposed classroom circuit.',
        ],
        note: 'Relay modules can be active LOW or active HIGH. Confirm the module trigger logic before using the example code.',
      },
    ],
    codeNotes: [
      'analogRead(A0) reads the sensor value.',
      'threshold is a starting value that must be calibrated for the specific sensor.',
      'Relay trigger logic differs by module. The example assumes an active-LOW relay input.',
    ],
    steps: [
      { title: 'Connect the sensor', description: 'Connect sensor power, ground and analog output according to its documentation.' },
      { title: 'Connect the relay input', description: 'Connect the compatible relay module input to D7 and share ground if required by the module.' },
      { title: 'Connect the pump supply', description: 'Use a separate correctly rated low-voltage supply and wire the pump through the relay contacts as specified by the manufacturer.' },
      { title: 'Calibrate and test', description: 'Read sensor values in Serial Monitor and adjust the threshold before testing the pump.' },
    ],
    workingPrinciple:
      'The Arduino reads the moisture sensor repeatedly. When the reading crosses the configured threshold, the sketch changes the relay input to request pump operation. The direction of this comparison depends on the sensor type and calibration.',
    troubleshooting: [
      { problem: 'Pump remains on or off', solution: 'Verify active-LOW versus active-HIGH relay logic, threshold direction, sensor calibration and pump supply.' },
      { problem: 'Sensor readings jump around', solution: 'Check the sensor connections, keep wiring secure and test readings in the actual soil.' },
    ],
    faqs: [
      { question: 'Is 550 a universal moisture threshold?', answer: 'No. It is only an example value. Calibrate the threshold for your sensor and soil.' },
      { question: 'Can I power the pump from an Arduino pin?', answer: 'No. Use a suitable driver or relay interface and a power supply rated for the pump.' },
    ],
    videoId: '',
    code: `const int soilPin = A0;
const int relayPin = 7;
const int threshold = 550;

// Example assumes an active-LOW relay module.
const int RELAY_ON = LOW;
const int RELAY_OFF = HIGH;

void setup() {
  Serial.begin(9600);
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, RELAY_OFF);
}

void loop() {
  int moisture = analogRead(soilPin);

  // Example logic: larger reading means drier soil.
  // Calibrate this direction for your specific sensor.
  if (moisture > threshold) {
    digitalWrite(relayPin, RELAY_ON);
  } else {
    digitalWrite(relayPin, RELAY_OFF);
  }

  Serial.println(moisture);
  delay(1000);
}`,
  },
];
