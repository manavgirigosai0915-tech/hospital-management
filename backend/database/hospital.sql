-- ===========================================
-- Hospital Management System Database
-- ===========================================

CREATE DATABASE IF NOT EXISTS hospital_db;

USE hospital_db;

-- ===========================================
-- USERS TABLE
-- ===========================================

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    role ENUM('admin','user') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ===========================================
-- DEPARTMENTS TABLE
-- ===========================================

CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ===========================================
-- DOCTORS TABLE
-- ===========================================

CREATE TABLE doctors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    doctor_name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    phone VARCHAR(20),
    department_id INT,
    specialization VARCHAR(100),
    qualification VARCHAR(100),
    experience VARCHAR(50),
    available_time VARCHAR(100),
    status ENUM('Available','Leave') DEFAULT 'Available',
    image VARCHAR(255),

    CONSTRAINT fk_department
    FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE SET NULL
);

-- ===========================================
-- PATIENTS TABLE
-- ===========================================

CREATE TABLE patients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_name VARCHAR(100) NOT NULL,
    age INT,
    gender ENUM('Male','Female','Other'),
    phone VARCHAR(20),
    email VARCHAR(100),
    address TEXT,
    disease VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ===========================================
-- APPOINTMENTS TABLE
-- ===========================================

CREATE TABLE appointments (
    id INT AUTO_INCREMENT PRIMARY KEY,

    patient_name VARCHAR(100) NOT NULL,

    doctor_id INT,

    appointment_date DATE,

    appointment_time TIME,

    status ENUM(
        'Pending',
        'Confirmed',
        'Completed',
        'Cancelled'
    ) DEFAULT 'Pending',

    FOREIGN KEY (doctor_id)
    REFERENCES doctors(id)
    ON DELETE CASCADE
);

-- ===========================================
-- REPORTS TABLE
-- ===========================================

CREATE TABLE reports (

    id INT AUTO_INCREMENT PRIMARY KEY,

    patient_id INT,

    report_title VARCHAR(100),

    description TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (patient_id)
    REFERENCES patients(id)
    ON DELETE CASCADE
);

-- ===========================================
-- SETTINGS TABLE
-- ===========================================

CREATE TABLE settings (

    id INT AUTO_INCREMENT PRIMARY KEY,

    hospital_name VARCHAR(100),

    hospital_email VARCHAR(100),

    hospital_phone VARCHAR(20),

    hospital_address TEXT,

    logo VARCHAR(255)
);

-- ===========================================
-- INSERT DEFAULT ADMIN
-- Password = admin123
-- ===========================================

INSERT INTO users
(
name,
email,
password,
phone,
role
)

VALUES
(
'Administrator',
'admin@hospital.com',
'admin123',
'9876543210',
'admin'
);

-- ===========================================
-- INSERT DEPARTMENTS
-- ===========================================

INSERT INTO departments
(department_name,description)

VALUES

('Cardiology','Heart Specialist'),

('Neurology','Brain and Nerves'),

('Orthopedics','Bone Specialist'),

('Pediatrics','Child Specialist'),

('Dental','Dental Care');

-- ===========================================
-- INSERT DOCTORS
-- ===========================================

INSERT INTO doctors
(
doctor_name,
email,
phone,
department_id,
specialization,
qualification,
experience,
available_time,
status,
image
)

VALUES

(
'Dr. John Smith',
'john@hospital.com',
'9876543211',
1,
'Heart Specialist',
'MBBS MD',
'12 Years',
'09:00 AM - 05:00 PM',
'Available',
'doctor1.jpg'
),

(
'Dr. Sarah',
'sarah@hospital.com',
'9876543212',
2,
'Neurologist',
'MBBS DM',
'8 Years',
'10:00 AM - 04:00 PM',
'Available',
'doctor2.jpg'
);

-- ===========================================
-- INSERT PATIENT
-- ===========================================

INSERT INTO patients
(
patient_name,
age,
gender,
phone,
email,
address,
disease
)

VALUES

(
'Rahul Patel',
28,
'Male',
'9999999999',
'rahul@gmail.com',
'Rajkot',
'Fever'
);

-- ===========================================
-- INSERT APPOINTMENT
-- ===========================================

INSERT INTO appointments
(
patient_name,
doctor_id,
appointment_date,
appointment_time,
status
)

VALUES

(
'Rahul Patel',
1,
'2026-07-25',
'10:30:00',
'Pending'
);

-- ===========================================
-- INSERT REPORT
-- ===========================================

INSERT INTO reports
(
patient_id,
report_title,
description
)

VALUES

(
1,
'Blood Test',
'Normal Report'
);

-- ===========================================
-- INSERT SETTINGS
-- ===========================================

INSERT INTO settings
(
hospital_name,
hospital_email,
hospital_phone,
hospital_address,
logo
)

VALUES
(
'CityCare Hospital',
'info@citycare.com',
'+91 9876543210',
'Rajkot, Gujarat',
'logo.png'
);