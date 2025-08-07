# 🧠 Grad Intern Backend

This is the backend for a job portal project built with **Node.js**, **Express**, **MongoDB**, and **JWT authentication**. It handles API endpoints for user registration/login, job posting, resume uploading, and job applications.

---

## 🚀 Features

- User registration and login (with hashed passwords)
- JWT-based secure authentication
- Role-based access for recruiters and job seekers
- CRUD operations for job postings
- Resume upload via Cloudinary
- MongoDB as the database with Mongoose ODM
- Secure `.env` environment handling

---

## 🗂️ Project Structure

```

/server
│
├── controllers/         # Route logic (job, user, application)
├── models/              # Mongoose schemas
├── routes/              # Express routes
├── utils/               # Cloudinary setup, middleware, etc.
├── .env                 # Environment variables (should NOT be committed)
├── server.js            # Main entry file
├── package.json         # Dependencies and scripts
└── README.md            # You're reading it!

````

---

## ⚙️ Environment Setup

Create a `.env` file inside `/server` folder:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
````

---

## ▶️ Running the Server

Make sure you're in the `/server` folder:

```bash
npm install         # Install dependencies
npm run server      # Start backend using nodemon
```

Server should start on:

```
http://localhost:5000
```

---

## 📮 API Endpoints

### 👤 User

| Method | Endpoint          | Description         |
| ------ | ----------------- | ------------------- |
| POST   | `/users/register` | Register new user   |
| POST   | `/users/login`    | Login existing user |

---

### 💼 Job

| Method | Endpoint    | Description         |
| ------ | ----------- | ------------------- |
| POST   | `/jobs`     | Create new job post |
| GET    | `/jobs`     | List all jobs       |
| GET    | `/jobs/:id` | Get job details     |

---

### 📎 Applications

| Method | Endpoint            | Description                   |
| ------ | ------------------- | ----------------------------- |
| POST   | `/applications/:id` | Apply to a job                |
| GET    | `/applications/:id` | View applications (recruiter) |

---

## 🧪 Testing the API (Postman)

1. Register/Login user
2. Copy JWT token from login response
3. Use that token in Postman headers:

   ```
   Authorization: Bearer <your_token_here>
   ```
4. Test authenticated routes like POST /jobs, POST /applications/\:id

---

## 🧼 Git Hygiene

Add the following to `.gitignore` to keep sensitive files and folders out of Git:

```
node_modules/
.env
```

If accidentally committed:

```bash
git rm -r --cached node_modules .env
git commit -m "Remove sensitive files from Git"
git push
```

---

## 📦 Tech Stack

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose
* Cloudinary
* JWT
* bcrypt
* multer
* dotenv

---

## 👨‍💻 Author

**Abhishek Kumar**
Summer Intern @IIT JAMMU 
GitHub: [AbhiKunkal](https://github.com/AbhiKunkal)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

```

---

Let me know if you want the markdown file downloaded as `.md`, or you want it to include frontend/API demo screenshots too.
```
