# Ekattor - Social Development Events Platform

A community-driven platform where users can create, join, and track social service events such as road cleaning, tree plantation, and donation drives.

---

## 🔗 Live Links

 Live Site: [your-firebase-link]( https://my-ekattor-web.web.app)
 Client Repo: [GitHub](https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-abufattahmdshakib)
 Server Repo: [GitHub](https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-abufattahmdshakib)

---

## Project Goal

Empower local communities by simplifying the process of organizing and participating in impactful social events.

---

## Technologies Used

### Client
- React, React Router DOM
- Firebase Auth
- JWT Token (jsonwebtoken)
- Tailwind CSS / DaisyUI
- React Toastify
- React Datepicker
- Framer Motion (optional)
- Axios
- Environment Variables

### Server
- Node.js, Express.js
- MongoDB
- CORS
- dotenv
- JWT (jsonwebtoken)

---

## Features at a Glance

### Authentication
- Email/Password & Google or GitHub Login
- JWT-based secure protected routes
- Toast notifications after login/register
- Redirect handling after login
- Auth validation on reload

### Event Management
- Create Event (with validation and future date only)
- Filter Events by Type
- Search Events by Name
- View Event Details (private route)
- Join Event functionality
- Show Joined Events (sorted by date)
- Manage own Events (Update/Delete)

### Validations
- Password must have uppercase, lowercase, and 6+ characters
- Date must be future date
- All fields in forms are required

---

## Pages Overview

| Page | Type | Description |
|------|------|-------------|
| Home | Public | Banner, Features, Gallery, Newsletter |
| Upcoming Events | Public | Filter + Search + Cards |
| Event Details | Private | Info + Join button |
| Create Event | Private | Add event with validations |
| Joined Events | Private | Show events user has joined |
| Manage Events | Private | Update/Delete own events |

---

## UI & Design

- Fully responsive (Mobile, Tablet, Desktop)
- Eye-friendly spacing, alignment, contrast
- Dark/Light theme toggle
- Modern UI with Tailwind/DaisyUI
- Spinner on loading (optional)
- Animations via Framer Motion (optional)

---

## Advanced Features (Challenge Completed ✅)

- ✅ Form validation on all inputs
- ✅ Filter by event type using MongoDB queries
- ✅ Search event by name (case-insensitive)
- ✅ JWT secured routes and API calls
- ✅ Pagination on Upcoming Events (optional)
- ✅ Theme toggle system
