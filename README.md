# 📝 ToDoApp

A simple yet functional **Task Management Dashboard** built using **Laravel**, **React.js**, **Inertia.js**, **Tailwind CSS**, and **ShadCN UI**. This app allows users to manage their daily tasks—create, view, edit, delete, and mark tasks as completed or pending.

🎥 **Demo:** [Watch on Loom](https://www.loom.com/share/09b408ef66c949a2916ac6ca1f57619e?sid=e04710c7-9502-4e01-aa58-d416a6289eed)  
📦 **Repo:** [ToDoApp on GitHub](https://github.com/KeijiPlata/ToDoApp.git)

---

## 🚀 Features

- ✅ **Task CRUD**: Create, Read, Update, Delete tasks
- ✅ **Mark as Completed**: Toggle task completion status
- ✅ **User-Specific Tasks**: Only the task owner can manage their tasks
- ✅ **Form Validation**: Server-side and client-side error handling
- ✅ **SPA Experience**: Built with Inertia.js for seamless navigation
- ✅ **Responsive Design**: Mobile-friendly layout with Tailwind CSS

---

## 🛠 Tech Stack

**Frontend:**
- React.js
- Inertia.js
- Tailwind CSS
- ShadCN UI
- React Icons

**Backend:**
- Laravel 12
- MySQL 

---

## ⚙️ Installation

1. **Clone the repo:**

```bash
git clone https://github.com/KeijiPlata/ToDoApp.git
cd to-do-app
```

2. **Install backend dependencies:**

```bash
composer install
```

3. **Install frontend dependencies:**

```bash
npm install
```

4. **Set up environment:**

```bash
cp .env.example .env
php artisan key:generate
```

5. **Configure your `.env`:**

- Set up your database (MySQL).
- If you want to test the reset password feature, create a Mailtrap account and copy your Mailtrap credentials (`MAIL_MAILER`, `MAIL_HOST`, `MAIL_PORT`, `MAIL_USERNAME`, `MAIL_PASSWORD`) into the `.env` file.

6. **Run migrations and seeders:**

```bash
php artisan migrate --seed
```

7. **Start local dev servers:**

```bash
# Laravel
php artisan serve

# Vite (frontend)
npm run dev
```

---

## ✅ Dummy Users (Seeded)

You can log in using any of the following test accounts:

| Name               | Email                               | Password               |
|--------------------|-------------------------------------|------------------------|
| Robert Gubat       | robert.gubat@example.com            | robert.gubat123        |
| Joseph Molinas     | joseph.molinas@example.com          | joseph.molinas123      |
| Troy San Pedro     | troy.sanpedro@example.com           | troy.sanpedro123       |
| Patrick Concepcion | patrick.concepcion@example.com      | patrick.concepcion123  |
| Gerald Salapati    | gerald.salapati@example.com         | gerald.salapati123     |
