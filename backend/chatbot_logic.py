import openai

openai.api_key = 'sk.8449247327Hkfjeowdo'

def ask_openai(prompt):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbbo",
        messages=[{"role": "user", "content": prompt}]
    )
    return response['choices'][0]['message']['content'].strip()