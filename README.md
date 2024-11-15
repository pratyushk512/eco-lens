# DevReapers- SIT

## Environmental Impact Tracking and Reporting App

## Project Description
- The current market lacks an accessible platform for analyzing
product environmental impacts:
- Consumers need transparency on product sustainability.
- Difficulties in identifying eco-friendly alternatives.
- Insufficient motivation for consumers to prioritize sustainability.
Our Solution
- EcoLens aims to bridge this gap by providing detailed reports
and sustainable choices, aligning with the competition's goal
of using Generative AI to improve productivity and decisionmaking.

## Installation
**1.** Clone the repository by running : `git clone https://github.com/pratyushk512/ecolens-devReapers-SIT` on terminal.

**2.** Navigate to `/frontend/` and run `npm i` to install node_modules and all dependencies.

**3.** Run `npm run dev` to start frontend server.

**4.** Navigate to `/backend/` and run `npm i` to install node_modules and all dependencies.

**5.** Navigate to `/backend/src/` and run `nodemon index.js` to start backend server.

## Usage
- **Login/Signup** from HOME page.
- Click **Scan Product**. You will be directed to scan page.
- Import or Capture image from camera and upload the file. Report will be generated of that product.
- Click **Previous Scans** to view past scanned products.
- Click **Rewards** then **Business Partner** if you want generate QR codes as a business otherwise **Consumer** to claim rewards.

## Technologies Used

- Frontend: React, TailwindCSS, Shadcn/UI
- Backend: Node.js with Express.js
- Database: MongoDB, Cloudinary
- APIs: **Google Cloud Vision API** for product analysis, **Gemini API** for report generation.



## Features
- AI-Driven Analysis: Uses Generative AI to analyze
product images and generate detailed impact reports.
- Sustainability Scores: Highlights CO2 emissions, resource
usage, and recycling feasibility.
- Eco-Friendly Alternatives: Suggests greener options to
the user.
- Reward System: Collaborates with eco-friendly brands
to reward users with discounts and points so that
people use this platform.

## Team Members
- [Pratyush Kumar](https://github.com/pratyushk512) : Backend Developer (Backend Logic and define routes)
- [Rahil Raipuria](https://github.com/rahilraipuria) : Frontend Developer (Reward section including QR scanner, Capturing of Image via file upload and real time)
- [Rajdeep Paul](https://github.com/Rajdeep37) : Frontend Developer (Home Page, QR Code generator)
- [Subham Singh](https://github.com/1-SubhamSingh) : Frontend Developer (Landing Page, Previous Reports, Auth Page)

## Acknowledgements
- Google Cloud Vision Documentation : https://cloud.google.com/vision/
- Gemini API Documentation : https://ai.google.dev/gemini-api/docs
- Shadcn/UI Documentation : https://ui.shadcn.com/docs
