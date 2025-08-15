# Diggy & Beauty – E-Commerce Store

## Overview

**Diggy & Beauty** is a modern React + Tailwind CSS e-commerce website for a beauty store that sells wigs and accessories. It features a responsive design, a smooth browsing experience, and a built-in cart system. Customers can explore products, view details, and easily add items to their cart.

## Tech Stack

* **React 19** – Component-based UI
* **Vite** – Fast dev server and build tool
* **Tailwind CSS 4** – Utility-first styling
* **React Router v7** – Client-side routing
* **Framer Motion** – UI animations
* **React Toastify / Hot Toast** – User notifications
* **EmailJS** – Contact form integration without backend
* **React Scroll / Hash Link** – Smooth scrolling between sections

## Features

* **Product Listing & Details** – Display wigs and accessories with images, descriptions, and pricing.
* **Cart System** – Add, remove, and view cart items in real-time.
* **Responsive Design** – Works across desktop, tablet, and mobile.
* **Smooth Navigation** – Animated scrolling and a "Back to Top" button.
* **Contact Form** – Sends messages directly via EmailJS.
* **Toast Notifications** – Feedback for cart actions and form submissions.

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/dandokku/diggy_and_beauty.git
   cd diggy_and_beauty
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**

   ```bash
   npm run preview
   ```

## Tailwind Config

Tailwind is configured via `tailwind.config.js` and integrated with Vite using `@tailwindcss/vite`.

## Contact Form Setup

The project uses **EmailJS** for sending form submissions without a backend.
To set it up:

* Create an account at [EmailJS](https://www.emailjs.com/).
* Create an email service and template.
* Add your service ID, template ID, and public key to the contact form component.

## License

This project is for learning and demonstration purposes. Modify and adapt as needed.
