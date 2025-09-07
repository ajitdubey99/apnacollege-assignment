# 🚀 ApnaCollege Assignment - Next.js Project

This is a **Next.js** application styled with **Tailwind CSS**, structured for an ApnaCollege assignment. It includes multiple reusable components and pages like login, dashboard, topics, progress, and profile.

---

## 📁 Project Structure

```
apnacollege-assignment/
├── package.json              # Project metadata and dependencies
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS config for Tailwind
├── README.md                # You're reading it!
├── .gitignore               # Git ignored files
├── public/
│   └── favicon.ico          # App icon
├── src/
│   ├── app/                 # Next.js App Directory
│   │   ├── globals.css      # Global CSS (Tailwind imports here)
│   │   ├── layout.js        # Root layout component
│   │   └── page.js          # Home page component
│   ├── components/          # Reusable UI components/pages
│   │   ├── LoginPage.js
│   │   ├── Dashboard.js
│   │   ├── TopicsPage.js
│   │   ├── ProgressPage.js
│   │   └── ProfilePage.js
│   └── data/
│       └── topics.js        # Static/fake data used in the app
```

---

## 🛠️ Tech Stack

* [Next.js](https://nextjs.org/) (App Router)
* [React](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [PostCSS](https://postcss.org/)

---

## 🚦 Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/ajitdubey99/apnacollege-assignment.git
cd apnacollege-assignment
```

### 2. **Install Dependencies**

Make sure you have Node.js installed (v16 or above, v20.9.0 or above recommended).

```bash
npm install
```

### 3. **Run the Development Server**

```bash
npm run dev
```

Now open your browser and visit **[http://localhost:3000](http://localhost:3000)** to see the app in action.

---

## 🧪 Available Scripts

* `npm run dev` – Starts the development server
* `npm run build` – Builds the app for production
* `npm run start` – Starts the production server after build
* `npm run lint` – Lints the code using ESLint

---

## 📄 License

This project is part of an assignment and is free to use for learning purposes.