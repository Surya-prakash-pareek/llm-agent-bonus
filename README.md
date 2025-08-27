# 💬 LLM Chat Agent (Frontend)

A simple **chat UI** powered by **ChatGPT (GPT-4.1o via aipipe.org)**.  
This project demonstrates how to integrate OpenRouter’s Chat Completions API directly into a frontend app, complete with typing animations and a minimal UI.

---

## ✨ Features
- ⚡ **Frontend-only chat app** — no backend required  
- 🔑 **Token-based authentication** using your aipipe.org API token  
- 📝 **Chat history UI** (user + bot bubbles)  
- ⌨️ **Typing animation** for bot responses  
- 🔄 Easy to switch between models (e.g., `gpt-4.1o`, `gpt-4.1-mini`, `gpt-4.1-nano`)  

---

## 📂 Project Structure
📦 your-repo
┣ 📜 index.html
┣ 📜 style.css
┣ 📜 script.js (main chat logic)
┣ 📜 LICENSE
┗ 📜 README.md

---

## 🔧 Setup

### 1. Clone the repo
```bash
git clone https://github.com/Surya-prakash-pareek/llm-agent-bonus.git
cd llm-agent-bonus
```
2. Get an API token

Go to aipipe.org

Sign up / log in

Copy your API token

3. Configure the token

In script.js, set your token:
const API_TOKEN = "PASTE_YOUR_AIPIPE_TOKEN_HERE";
⚠️ Security note: Since this is frontend-only, your token will be visible in DevTools if you deploy it publicly.
For production use, create a backend proxy to keep your token secret.

▶️ Run the Project

Simply open index.html in your browser.
No build tools required 🎉

🌐 Deployment

You can deploy this app easily on:

GitHub Pages

Vercel

Netlify

Just push your repo and connect it.
