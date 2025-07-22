// ---------- backend/app.py ----------
# Flask-App mit REST-Endpunkt für Bewertung
from flask import Flask, request, jsonify
from flask_cors import CORS
from evaluation import evaluate_response

app = Flask(__name__)
CORS(app)  # Erlaubt Cross-Origin-Anfragen vom Frontend

@app.route("/evaluate", methods=["POST"])
def evaluate():
    metadata = request.json  # Empfange Antwort-Metadaten vom Frontend
    score, feedback = evaluate_response(metadata)  # Bewertung durchführen
    return jsonify({"score": score, "feedbackText": feedback})

if __name__ == "__main__":
    app.run(debug=True)  # Server starten
