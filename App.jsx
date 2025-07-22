// Projektstruktur (Vite + React + Flask):
// frontend/
// ├── public/
// ├── src/
// │   ├── App.jsx
// │   ├── components/
// │   │   ├── Interview.jsx
// │   │   └── Feedback.jsx
// │   └── main.jsx
// ├── index.html
// └── vite.config.js
//
// backend/
// ├── app.py
// └── evaluation.py

// ---------- frontend/src/App.jsx ----------
// Hauptkomponente mit Routing zwischen Interview und Feedback
import React from "react";
import Interview from "./components/Interview";
import Feedback from "./components/Feedback";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Interview />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}
