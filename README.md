# CashflowAI 🚀  
AI-powered invoicing & WhatsApp payment follow-up system for small businesses.

CashflowAI is a SaaS-style MVP that helps businesses:
- Create invoices
- Preview invoices
- Send invoices via WhatsApp
- Prepare for automated payment follow-ups

This project is currently in **UI-first MVP stage**, built with proper
SaaS architecture and scalability in mind.

---

## ✨ Current Features

### 🧾 Invoice Management (UI)
- Invoice list page
- Create invoice form
- Invoice preview (print-friendly)
- Invoice send flow (WhatsApp UI)

### 📲 WhatsApp Send (UI)
- Editable WhatsApp message
- Message templates (Polite / Friendly / Firm)
- Live WhatsApp-style message preview
- Ready for future WhatsApp API integration

### 📊 Dashboard
- Sidebar navigation with routing
- Topbar layout
- SaaS-style dark UI
- Stats cards (expected, pending, risk customers)

---

## 🧠 Product Vision

Most small businesses don’t struggle with sales —  
they struggle with **late payments and cashflow visibility**.

CashflowAI aims to:
- Reduce payment delays
- Remove awkward manual follow-ups
- Give clarity on expected cashflow
- Automate reminders via WhatsApp

---

## 🏗 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** JavaScript
- **Styling:** Custom CSS (SaaS-style, no Tailwind dependency)
- **Routing:** Next.js App Router
- **State:** Static UI (backend planned)

---

## 📁 Project Structure

```text
app/
├─ page.js                      # Marketing landing page
├─ dashboard/
│  ├─ page.js                   # Dashboard home
│  ├─ invoices/
│  │  ├─ page.js                # Invoice list
│  │  ├─ create/page.js         # Create invoice form
│  │  ├─ preview/page.js        # Invoice preview
│  │  └─ send/page.js           # WhatsApp send UI
├─ styles/
│  ├─ marketing.css             # Landing page styles
│  └─ app.css                   # Dashboard & app styles
components/
├─ Sidebar.js
├─ Topbar.js
└─ StatCard.js