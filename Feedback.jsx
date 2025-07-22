// ---------- frontend/src/components/Feedback.jsx ----------
// Anzeige von Score und Feedback nach der Bewertung
import React from "react";

export default function Feedback() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Feedback</h1>
      <p className="mb-2">Score: 8/10</p>
      <p>Ihre Antwort war klar und strukturiert. Achten Sie auf die Sprechgeschwindigkeit.</p>
      <button className="mt-4 bg-blue-500 text-white p-2 rounded">Neues Interview starten</button>
    </div>
  );
}
