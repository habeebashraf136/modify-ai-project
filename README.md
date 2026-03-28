# Music Mood AI 🎵🤖

Music Mood AI is a sophisticated web application that uses Artificial Intelligence to detect a user's emotional state through facial expressions and automatically plays music that matches their mood.

## ✨ Features

- **AI Emotion Detection**: Real-time facial expression analysis using MediaPipe.
- **Dynamic Music Player**: A custom-built, professional music player that responds to detected moods.
- **Mood-Based Recommendations**: Automatically fetches and plays tracks corresponding to detected emotions (Happy, Sad, Surprised, etc.).
- **Professional UI/UX**: A clean, minimal, and sophisticated design inspired by modern AI interfaces (Claude-like aesthetic).
- **Responsive Design**: Fully functional across desktop and mobile devices.
- **Dark Mode Support**: System-aware dark mode for comfortable viewing in any environment.
- **Secure Authentication**: User registration and login system with JWT-based security.

## 🛠️ Tech Stack

### Frontend
- **React**: Modern component-based UI development.
- **Vite**: Ultra-fast build tool and development server.
- **Sass (SCSS)**: Professional-grade styling with advanced nesting and variables.
- **MediaPipe**: Google's high-performance machine learning framework for facial landmark detection.
- **Axios**: Promise-based HTTP client for API communication.
- **React Router**: Client-side navigation and routing.

### Backend
- **Node.js & Express**: Scalable server-side environment and web framework.
- **MongoDB & Mongoose**: Flexible NoSQL database and object modeling.
- **Redis**: High-performance caching for optimized song retrieval.
- **JWT (JSON Web Tokens)**: Secure user session management.
- **Bcrypt**: Advanced password hashing for user security.
- **ImageKit**: Cloud-based storage for song posters and media.
- **Multer**: Middleware for handling multi-part form data/file uploads.

## 📁 Project Structure

```text
modify-AI project/
├── frontend/                # React application
│   ├── src/
│   │   ├── features/        # Feature-based module organization
│   │   │   ├── Expression/  # AI Emotion detection logic
│   │   │   ├── Home/        # Main dashboard and music player
│   │   │   ├── auth/        # Login/Register functionality
│   │   │   └── shared/      # Common styles and components
│   │   ├── App.jsx          # Root component
│   │   └── main.jsx         # Entry point
│   └── package.json
└── backend/                 # Node.js Express server
    ├── src/
    │   ├── controllers/     # API logic handlers
    │   ├── models/          # Database schemas
    │   ├── routes/          # API endpoint definitions
    │   └── app.js           # Server configuration
    └── server.js            # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB
- Redis (Optional, for caching)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd modify-AI-project
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   # Create a .env file with your credentials (PORT, MONGO_URI, JWT_SECRET, etc.)
   npm start
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

## 🎨 Design Philosophy

The project follows a **Minimalist & Human-Centric** design approach. It avoids typical "techy" dark modes in favor of warm neutrals and sophisticated typography, creating an experience that feels like a professional creative tool.

---
Created with ❤️ by [Your Name/Team]
