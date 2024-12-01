const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// NodeMCU's IP address
const nodeMCU_IP = "192.168.103.136";

app.use(express.static("public"));

// Fetch data from NodeMCU server
const fetchDataFromNodeMCU = async () => {
  try {
    const response = await axios.get(`http://${nodeMCU_IP}/`);
    if (response.status === 200) {
      console.log("Data fetched successfully:", response.data);
      return response.data;
    } else {
      console.error("Error fetching data, status code:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Error connecting to NodeMCU:", error.message);
    return null;
  }
};

// Endpoint to get real-time data
app.get("/data", async (req, res) => {
  const data = await fetchDataFromNodeMCU();
  if (data) {
    res.json(data);
  } else {
    res.status(500).send("Error fetching data from NodeMCU");
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Fetching data from NodeMCU at http://${nodeMCU_IP}/`);
});

