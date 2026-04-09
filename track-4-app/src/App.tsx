import { useState } from "react";

export default function App() {
  // =============================
  // STATE (you can add more)
  // =============================

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  // =============================
  // AI FUNCTION (ADD LATER)
  // =============================

  const handleAskAI = async () => {
    // TODO:
    // 1. Call Gemini API
    // 2. Send "input"
    // 3. Set response to "output"

    console.log("Call AI here with:", input);
  };

  // =============================
  // VOICE (OPTIONAL)
  // =============================

  const handleVoice = () => {
    // TODO:
    // Use browser speech recognition
    // Set transcript → input
  };

  // =============================
  // OCR (OPTIONAL)
  // =============================

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    // TODO:
    // 1. Convert image to base64
    // 2. Send to AI
    // 3. Extract text → output
  };

  // =============================
  // UI
  // =============================

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-4">
          Advanced API App
        </h1>

        {/* =============================
          INPUT
        ============================= */}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type something..."
          className="w-full border p-2 rounded mb-3"
        />

        {/* =============================
          BUTTONS
        ============================= */}
        <div>
          {/* REQUIRED */}
          <button onClick={handleAskAI}>Ask AI</button>

          {/* OPTIONAL */}
          <button onClick={handleVoice}>Use Voice</button>

          {/* OPTIONAL */}
          <label>
            Upload Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>

        {/* =============================
          OUTPUT
        ============================= */}
        <div className="border p-3 rounded bg-gray-50 min-h-[100px]">
          {output || "Your result will appear here"}
        </div>

        {/* =============================
          INSTRUCTIONS
        ============================= */}
        <div className="mt-4 text-sm text-gray-500">
          <p> Step 1: Get input working</p>
          <p> Step 2: Connect AI API</p>
          <p> Step 3: Add voice or OCR</p>
        </div>
      </div>
    </div>
  );
}
