
# 🌱 Green Nest - Smart Home for Plant Care

![Screenshot 2024-11-29 200531](https://github.com/user-attachments/assets/4767a5e2-677f-4db5-9cc9-2218625c7485)

**Green Nest** is a smart IoT-based plant care and monitoring system that helps users track essential plant health metrics such as soil moisture, temperature, humidity, and pH in real time. It automatically evaluates plant health and provides actionable insights via a beautiful, responsive Node.js dashboard.

---

## 🛠️ Features

- 🌡️ Real-time monitoring of soil moisture, temperature, humidity, and pH level
- 🧠 AI-based plant health analysis and automatic health classification
- 🚿 Smart irrigation control through on/off pump switch integration
- 📊 Node.js powered dashboard for multi-plant visualization
- 🔔 Status updates like **HEALTHY / UNHEALTHY** based on live sensor inputs
- ➕ Dynamic plant addition/removal for scalable monitoring

---

## 📷 Screenshots

### 🌿 Dashboard View
![Screenshot 2024-11-29 221805](https://github.com/user-attachments/assets/58e8ec16-40ae-44d2-bf74-67a17288e9d8)

### 🌿 Multi-Plant Monitoring
![Screenshot 2024-11-29 221841](https://github.com/user-attachments/assets/5e18ec30-5f6d-44ce-b549-8240f83594ff)

---

## 🧰 Tech Stack

- **Microcontrollers:** ESP32, Raspberry Pi
- **Sensors:** Soil Moisture Sensor, DHT11 (Temperature & Humidity), pH Sensor
- **Backend:** Node.js, Express.js, MongoDB
- **Frontend:** HTML5, CSS3, JavaScript (Responsive UI)
- **AI Model:** ResNet50 (TensorFlow) for plant disease detection *(optional extension)*
- **Dashboard Hosting:** Localhost / Raspberry Pi Server

---

## 🔄 System Architecture

1. Sensors gather real-time data from plant environments.
2. ESP32/Raspberry Pi transmits data to the backend using serial/Wi-Fi.
3. Node.js processes and stores the data in MongoDB.
4. Dashboard displays live plant metrics and controls pump switches.
5. Optional TensorFlow model processes leaf images to detect diseases.

---

## 🚀 Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/PriyankTyagii/GREEN_NEST.git
   cd GREEN_NEST
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Connect sensors to ESP32/Raspberry Pi and update serial port path in `app.js`.

4. Run the server:
   ```bash
   node app.js
   ```

5. Open the dashboard in your browser:
   ```bash
   http://localhost:3000
   ```

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the project and submit a pull request.

---

## 🙋‍♂️ Author

**Priyank Tyagi**  
📧 priyanktyagi404@gmail.com  
🔗 [LinkedIn]([https://www.linkedin.com/in/priyanktyagi404](https://www.linkedin.com/in/priyank-tyagi-3a3a10259/)) | 🔗 [GitHub](https://github.com/PriyankTyagii)

---

> Empowering plants with data — one leaf at a time 🌿










