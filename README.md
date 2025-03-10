# mo-cloud

## Project Overview
Invisible labor, work that is undervalued, unrecognized, or uncompensated, plays a critical role in families, workplaces, and society. One of the most affected groups is new parents, who often experience an unequal distribution of household and caregiving responsibilities. Despite its essential contributions, this labor remains largely unnoticed, leading to stress, burnout, and relationship imbalances.

This project aims to raise awareness and promote accountability by providing a digital platform where new parents can log, track, and visualize their daily labor. Through data-driven insights, personalized assessments, and interactive dashboards, our platform empowers users to recognize hidden work patterns, foster open discussions, and drive positive change in labor distribution within families. By making invisible labor visible, we want to create stronger relationships, improve equity, and encourage shared responsibility in caregiving and household tasks.

## Problem Statement
How might we raise awareness about invisible labor within new parents to build stronger relationships and accountability?

## Key Features
1. Labor Entry: This allows users to log various types of household labor during the day and the time spent on each task. The interface will be user-friendly, allowing one-time and recurring task entries with options to edit previous logs. There are existing labor types and times for users to select directly.

2. Labor Tracking: This feature focuses on collecting, organizing, and summarizing data about household tasks logged by users. Users can see the labor data they entered over time and gain an insightful understanding of their labor distribution. While it involves data aggregation, its primary purpose is to track patterns and provide actionable insights for improving equity and accountability in labor distribution.

3. Visualization Dashboard: This feature summarizes data from Labor Tracking and presents it in an interactive, user-friendly format. It uses charts and graphs to visually represent labor distribution entered by the users. The goal is to make invisible labor more tangible by offering a clear picture of how responsibilities are shared. Unlike Labor Tracking, this feature prioritizes making data accessible and understandable through visuals.
   
4. Self-Assessment: The assessment is designed to assess and analyze data from users. It includes 10 questions aimed at evaluating the effectiveness of the labor distribution. The score ranges from 10 to 40 to indicate different levels of effectiveness. After each time taking the assessment, users can download the report in a PDF file with their responses. Users can retake the assessment over time and track how their family labor distribution has improved.

## Tech Stack 
1. Frontend:
JavaScript & React – Builds an interactive UI for logging labor, tracking tasks, and displaying insights.
Chart.js / Recharts – Visualizes labor distribution trends in the dashboard.

2. Backend:
Node.js & Express.js – Handles labor entry, tracking, and assessment API requests.
MongoDB Atlas / Firebase Firestore – Stores user task logs, labor distribution data, and assessment scores.

3. Hosting & Deployment:
Render – Hosts the React frontend and Node.js backend for seamless user access.


## Usage Guide
1. How to log labor entries
Users can navigate to "Tasks" through the navigation bar or "View Dashboard" through the profile. Then, users can select the tasks they want to record and click on the "Add to MY Tasks" button in green.
<img width="1000" alt="laborentry" src="https://github.com/user-attachments/assets/c507aec7-4168-4206-86e8-251234ff89ae" />

   
2. How to view and interpret tracking data
Users can go to "My Tasks" in the profile. Then, users can see the data insights and visualization generated based on what the users record. 
<img width="1000" alt="visual" src="https://github.com/user-attachments/assets/ffa476ac-3f12-4f25-a20d-e567b0c63fe5" />


3. How the assessment works and how to use recommendations
Users can click on "Get Started Now" on the homepage or go to "Self-Assessment" through the navigation bar to take the assessment. After answering the questions, the user will be able to see the score with the option to download their responses into a PDF document. 
<img width="1000" alt="assessment" src="https://github.com/user-attachments/assets/2662f05b-dba3-4393-a954-a3eb3ea88c96" />


## Installation

1. Clone the repository:
   \`\`\`
   git clone https://github.com/UW-INFO442-WI25/mo-cloud.git
   \`\`\`

2. Navigate to the project directory:
   \`\`\`
   cd mo-cloud
   \`\`\`

3. Install the dependencies:
   \`\`\`
   npm install
   \`\`\`

## 🚀 Getting Started

After you've installed the project, follow these steps to start the website:

1. Ensure you're in the project directory:
   \`\`\`
   cd mo-cloud
   \`\`\`

2. Start the development server:
   \`\`\`
   npm run dev
   \`\`\`

3. Open your web browser and visit:
   \`\`\`
   http://localhost:5173
   \`\`\`

   You should now see the MoCloud website running locally on your machine.

4. To stop the server, press `Ctrl + C` in the terminal where the server is running.

### Building for Production

When you're ready to build the project for production:

1. Run the build command:
   \`\`\`
   npm run build
   \`\`\`

2. The built files will be in the `dist` directory. You can serve these files using a static server:
   \`\`\`
   npm run preview
   \`\`\`

3. Visit `http://localhost:4173` to see the production build.

Note: The production build is optimized for performance and is what you would deploy to a web server.

### Documentation
- [User Personas](docs/user_persona.md)
- [Testing Protocol](docs/TestingProtocol.md) 
