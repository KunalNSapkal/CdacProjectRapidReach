# CDAC Project


# RapidReach – The Courier Services Web Application



A full-stack courier platform streamlining parcel bookings, shipment tracking, and delivery management with dedicated dashboards for Customers, Employees, and Admins.

---

## Table of Contents

- [Introduction](#introduction)  
- [Features](#features)  
- [Prerequisites](#prerequisites)  
- [Project Setup](#project-setup)  
  - [Backend Setup](#backend-setup)  
  - [Frontend Setup](#frontend-setup)  
  - [Database Setup](#database-setup)  
- [Authentication (JWT)](#authentication-jwt)  
- [API Documentation & Testing (Swagger)](#api-documentation--testing-swagger)  
- [Folder Structure](#folder-structure)
  
---

## Introduction

The **Courier Service Management System** empowers users to book parcels, track deliveries in real-time, and manage operations through responsive dashboards. Built using **.NET (C#)** backend, **React.js** frontend, and **MYSQL** database, the application provides secure, role-based access and seamless logistics handling.

---

## Features

- Role-based dashboards for Admin, Employee, and User  
- Parcel booking, processing, and live shipment tracking  
- Notification system for status updates & feedback  
- **JWT-based authentication with role-based authorization**  
- Responsive UI leveraging Bootstrap & React  
- Secure RESTful API backend  
- API documentation and interactive testing via Swagger  
- Deployed on AWS for scalability and reliability

---

## Prerequisites

Make sure you have the following tools installed:

- **.NET Framework 4.5+** (with TLS 1.2)  
- **Visual Studio** (for backend development)  
- **Node.js & npm** (for React frontend)  
- **Git** for version control  
- **Swagger (Swashbuckle)** for API docs/testing  
- **AWS account** for deployment

---

## Project Setup

### Frontend Setup

1. Navigate to `/ClientApp` folder  
2. Run `npm install`  
3. Wire up API endpoints and start with `npm start`  

### Backend Setup

1. Clone the repository and open in Visual Studio  
2. Configure `appsettings.json` with your MSSQL connection string  
3. Install packages, including `Swashbuckle.AspNetCore`  
4. Enable Swagger in `Startup.cs` or `Program.cs`  
5. Run the API and test endpoints via Swagger UI


### Database Setup

1. Install MySQL Server and configure the connection string in `appsettings.json`.
2. Add MySQL Connector/NET or Pomelo MySQL provider in .NET, adjust EF Core setup.
3. Run migrations or SQL scripts to create tables (Users, Admin, Courier, Payments...), then optionally seed with sample data.

---

## API Documentation & Testing (Swagger)

Swagger UI allows you to:

- Explore and test all API endpoints  
- Review request/response schemas  
- Generate API documentation automatically

Visit `<your-backend-url>/swagger` to access the UI.

---

## Folder Structure


Backend/
├─ Controllers/
├─ Models/
├─ Helpers/
├─ Data/
├─ Mappers/
├─ Migrstions/
├─ appsettings.json
└─ RapidReach.sln

ClientApp/
└─ src/
├─ components/
│ ├─ admin/
│ ├─ employee/
│ └─ user/
├─ services/
├─ App.js
└─ index.js
└─ package.json

Database/
├─ init.sql
└─ migrations/

Docs/
└─ README.md


