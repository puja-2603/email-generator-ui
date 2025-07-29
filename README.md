# ✉️ Email Generator

An AI-powered email generator that helps users create professional and personalized emails using the **Gemini API**.  
This project includes a web UI, a Chrome extension, and a backend service — all designed to streamline the email creation process.

---

## 📁 Repository Structure

email-generator/
├── ui/ # React-based frontend (Vite + MUI setup)
├── extension/ # Chrome extension for quick email generation


🔗 Backend Repository (separate): [`email-generator-api`](https://github.com/puja-2603/email-generator-api)

---

## ✨ Features

- 🎯 Generate emails based on **tone**, **type**, and **topic**
- 🤖 Integrated **Gemini API** for intelligent content generation
- 💻 Responsive web UI built with **React + Material UI**
- 🔌 Chrome extension to generate emails directly in your browser
- 🌐 Backend APIs using **Node.js + Express**

---

## 🚀 Tech Stack

| Layer     | Technology                     |
|-----------|--------------------------------|
| Frontend  | React, Vite, Material UI, Axios|
| Extension | JavaScript, HTML/CSS, Manifest V3 |
| Backend   | Node.js, Express.js            |
| AI API    | Gemini API (Google Generative AI) |

---

## 🔧 Setup Instructions

### 🔹 UI (React App)

```bash
cd ui
npm install
npm run dev
📍 Live Link: https://email-generator-ui.onrender.com/
```

🔹 Chrome Extension
Open chrome://extensions/ in your browser

Enable Developer Mode (toggle at top right)

Click Load Unpacked

Select the email-generator-extension/ folder

You're ready to use the extension!

🔹 Backend (API Service)
The backend is hosted separately. You can find it here:

👉 email-generator-api

Make sure to update the .env and set your API key and PORT as required.

🙋‍♀️ Author
Made with ❤️ by Puja Agrawal

📌 Notes
The email-generator-extension/ folder is currently inside the email-generator repository along with email-generator-ui/

The backend is intentionally kept in a separate repository for deployment and modularity









