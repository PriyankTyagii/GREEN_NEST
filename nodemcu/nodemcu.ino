#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <DHT.h>

#define DHTPIN D4
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);

const char* ssid = "PINKI";
const char* password = "123456789";

ESP8266WebServer server(80);

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting...");
  }
  
  Serial.println("Connected to WiFi");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP()); // Print the IP address
  
  server.on("/", handleRoot);
  server.begin();
  dht.begin();
}

void handleRoot() {
  float moisture1 = analogRead(A0);
  float moisture2 = digitalRead(D1);
  float pH1 = digitalRead(D2);
  float pH2 = digitalRead(D3);
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  String data = String("{\"moisture1\":") + moisture1 +
                ",\"moisture2\":" + moisture2 +
                ",\"ph1\":" + pH1 +
                ",\"ph2\":" + pH2 +
                ",\"temperature\":" + temperature +
                ",\"humidity\":" + humidity + "}";
                
  server.send(200, "application/json", data);
}

void loop() {
  server.handleClient();
}
