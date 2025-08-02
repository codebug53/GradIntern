## 📁 Project Folder Structure

```bash
GradIntern/
│
├── client/                      # Frontend (HTML/CSS/JS)
│   ├── components/              # Reusable components
│   ├── DashBoard/               # Dashboard UI
│   ├── LoginPage/               # Login form and logic
│   ├── SignUp/                  # Sign-up form and logic
│   ├── HomePage/                # Landing/Home page
│   ├── script.js                # Frontend interactivity
│   ├── style.css                # Global styles
│   └── index.html               # Entry HTML file
│
├── server/                      # Backend (Node.js + Express)
│   ├── models/                  # Mongoose schemas (User, Job)
│   ├── routes/                  # API route definitions
│   ├── controllers/             # Request handlers
│   ├── middleware/              # Auth and other middlewares
│   ├── config/                  # MongoDB connection config
│   ├── server.js                # Main server entry point
│   └── .env                     # Environment variables
│
├── package.json                 # NPM dependencies and metadata
└── README.md                    # Project documentation
