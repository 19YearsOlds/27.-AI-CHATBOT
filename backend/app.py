from flask import Flask, request, jsonify
from flask_cors import CORS
from chatbot_logic import ask_openai

app = Flask(__name__)
CORS(app)

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    if not user_message:
        return jsonify({'error': 'No message provided'}), 400
    bot_reply = ask_openai(user_message)
    return jsonify({'response': bot_reply})

if __name__ == '__main__':
    app.run(port=5000)