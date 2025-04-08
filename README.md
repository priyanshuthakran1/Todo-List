# 📝 To-Do List App (MERN Stack)

A simple yet powerful To-Do List web application built using the **MERN stack** (MongoDB, Express.js, React, Node.js). This app allows users to create, read, update, and delete tasks efficiently with a clean and responsive UI.

## 🚀 Features

- ✅ Create, Edit, and Delete tasks
- 📆 Mark tasks as completed
- 🔄 Realtime updates with backend sync
- 🌐 Responsive design for desktop & mobile
- 🌙 Light/Dark Mode (optional, if implemented)

## 🛠️ Tech Stack

- **Frontend:** React, React Router, Axios, Bootstrap/Tailwind (optional)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Version Control:** Git & GitHub

## 📸 Screenshots

> *(Add screenshots or a GIF demo here)*

## ⚙️ Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/priyanshuthakran1/todo-list.git
   cd Todo-List
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   npm start
   ```

> Make sure MongoDB is running locally or use a MongoDB Atlas URI.

## 🌍 Environment Variables

Create a `.env` file in the `backend` folder and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## 🔐 Security & Validation

- Input validation on both frontend and backend
- Proper error handling with Express middleware
- CORS enabled

## 🧩 Folder Structure

```
📁 backend/
   ├── models/
   ├── routes/
   ├── controllers/
   ├── server.js
📁 frontend/
   ├── src/
       ├── components/
       ├── pages/
       ├── App.js
       ├── index.js
```

## 🧪 Future Improvements

- 🧑‍💼 User authentication (JWT + bcrypt)
- 📅 Due dates and reminders
- 📊 Task filtering & priority labels
- 📱 PWA support

## 🤝 Contributing

Contributions are welcome! Fork the repo and submit a pull request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

### Made with ❤️ by [Priyanshu](https://github.com/priyanshuthakran1)
```

---

Let me know if your app has **authentication**, **hosted link**, or **screenshots** — I can customize it even more!
