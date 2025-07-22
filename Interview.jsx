// ---------- frontend/src/components/Interview.jsx ----------
// Komponente zur Kamerasteuerung, Aufnahme und Weiterleitung
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Interview() {
  const videoRef = useRef(null); // Referenz auf das Video-Element
  const [recording, setRecording] = useState(false); // Aufnahme aktiv?
  const [mediaRecorder, setMediaRecorder] = useState(null); // MediaRecorder-Instanz
  const navigate = useNavigate();

  // Kamera aktivieren
  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    videoRef.current.play();
    const recorder = new MediaRecorder(stream);
    setMediaRecorder(recorder);
  };

  // Aufnahme starten
  const startRecording = () => {
    if (!mediaRecorder) return;
    setRecording(true);
    mediaRecorder.start();
  };

  // Aufnahme stoppen und weiterleiten
  const stopRecording = () => {
    mediaRecorder.stop();
    setRecording(false);
    navigate("/feedback");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Interviewfrage:</h1>
      <p className="mb-4">Erzählen Sie uns etwas über sich.</p>
      <video ref={videoRef} className="w-full max-w-md border mb-4" />
      <div className="flex gap-4">
        <button onClick={startCamera} className="bg-blue-500 text-white p-2 rounded">Kamera starten</button>
        <button onClick={startRecording} disabled={recording} className="bg-green-500 text-white p-2 rounded">Aufnahme starten</button>
        <button onClick={stopRecording} className="bg-red-500 text-white p-2 rounded">Aufnahme stoppen</button>
      </div>
    </div>
  );
}
