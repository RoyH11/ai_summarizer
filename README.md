# AI Summarizer App

A **Flask + React** web app that uses **OpenAI's GPT API** to summarize text.

## 🚀 Features
- AI-powered text summarization
- Flask backend & React frontend
- Secure API key handling

## 📁 Setup
### 1️⃣ Backend (Flask API)
```sh
conda create -n summarizer python=3.10
conda activate summarizer
pip install -r requirements.txt
```
Set OpenAI API key in `.env` or `~/.bashrc`, then run:
```sh
python app.py
```

### 2️⃣ Frontend (React UI)
```sh
cd frontend
npm install
npm start
```

## 🔄 API Endpoint
| Method | Endpoint  | Description |
|--------|----------|-------------|
| POST   | `/summarize` | Summarizes input text |

### Example Request
```json
{
    "text": "Flask is a Python web framework."
}
```

## 🚀 Deployment
- **Backend:** Render, Vercel, AWS (set `OPENAI_API_KEY` in env vars)
- **Frontend:** Netlify, Vercel

## 🛤️ Roadmap
- [ ] Improve UI with Material UI or TailwindCSS
- [ ] Implement authentication for API access
- [ ] Add support for multiple languages
- [ ] Optimize model performance and response time
- [ ] Deploy fully integrated app

## 📜 License
MIT License

## 🌟 Contributors
- **Your Name** (@yourgithub)

Happy coding! 🚀

