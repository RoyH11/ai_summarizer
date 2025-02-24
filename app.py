from flask import Flask, request, jsonify
import openai
import os

app = Flask(__name__)

# Load OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route('/summarize', methods=['POST'])
def summarize_text():
    data = request.get_json()
    if not data or "text" not in data:
        return jsonify({"error": "No text provided"}), 400

    try:
        response = openai.chat.completions.create(  # Correct API call
            model="gpt-4o-mini",  # Using the cheaper model
            messages=[
                {"role": "system", "content": "You are an AI that summarizes text."},
                {"role": "user", "content": f"Summarize this: {data['text']}"}
            ]
        )

        summary = response.choices[0].message.content
        return jsonify({"summary": summary})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)
