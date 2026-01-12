# ClinicPatientCheck-In-System
A simple Node.js &amp; Express backend for managing clinic patients with middleware, CRUD APIs, and real-time request handling.
# Clinic Backend API (Node.js + Express)

This is a simple real-world backend project built using **Node.js and Express** that manages patients in a clinic.

The project demonstrates:
- REST APIs
- Middleware
- Request handling
- Business logic
- Data update & delete operations

---

## Features

- Add new patients  
- Get all patients  
- Delete a patient  
- Mark patient as checked  
- Clinic open/close middleware  

---

## Tech Stack

- Node.js  
- Express.js  
- JavaScript  

---

## API Endpoints

### Get all patients
GET /patients

### Add a patient
POST /patients  
Body:
```json
{
  "name": "Ravi",
  "age": 26
}
