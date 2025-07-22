// ---------- backend/evaluation.py ----------
# Bewertungslogik auf Basis von Dauer & Blickkontakt
def evaluate_response(metadata):
    duration = metadata.get("duration", 0)  # Dauer der Antwort in Sekunden
    eye_contact = metadata.get("eyeContact", False)  # Blickkontakt (bool)

    score = 5
    if duration > 15:
        score += 2
    if eye_contact:
        score += 3
    score = min(score, 10)

    if score >= 8:
        feedback = "Sehr überzeugender Auftritt."
    elif score >= 5:
        feedback = "Solide, aber mit Verbesserungspotenzial."
    else:
        feedback = "Bitte arbeiten Sie an Struktur und Klarheit."

    return score, feedback
