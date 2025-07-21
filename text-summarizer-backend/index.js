import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/summarize", async (req, res) => {
  const userText = req.body.text;

  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: userText }),
      }
    );

    const data = await response.json();

    console.log("Response from HuggingFace API:", data); // 🧪 Debug

    if (data.error) {
      return res.status(400).json({ error: data.error });
    }

    res.json({ summary: data[0].summary_text });

  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
