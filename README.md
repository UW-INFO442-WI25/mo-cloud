# mo-cloud

## Project Overview
Invisible labor, work that is undervalued, unrecognized, or uncompensated, plays a critical role in families, workplaces, and society. One of the most affected groups is new parents, who often experience an unequal distribution of household and caregiving responsibilities. Despite its essential contributions, this labor remains largely unnoticed, leading to stress, burnout, and relationship imbalances.

This project aims to raise awareness and promote accountability by providing a digital platform where new parents can log, track, and visualize their daily labor. Through data-driven insights, personalized assessments, and interactive dashboards, our platform empowers users to recognize hidden work patterns, foster open discussions, and drive positive change in labor distribution within families. By making invisible labor visible, we want to create stronger relationships, improve equity, and encourage shared responsibility in caregiving and household tasks.

## Problem Statement
How might we raise awareness about invisible labor within new parents to build stronger relationships and accountability?

## Key Features
1. Labor Entry: This allows users to log various types of paid and unpaid labor during the day and the time spent on each task. The interface will be user-friendly, allowing one-time and recurring task entries with options to edit previous logs. There are existing labor types and times for users to select directly, and users can also add and customize their own labor information as needed. 

2. Labor Tracking: This feature focuses on collecting, organizing, and summarizing data about household tasks logged by users. It provides users with clear summaries and insights into the time spent on various labor categories (e.g., paid, unpaid, childcare, household) and identifies trends in labor distribution over time. The feature emphasizes detailed reports and feedback, such as recognizing imbalances or progress in labor-sharing. While it involves data aggregation, its primary purpose is to track patterns and provide actionable insights for improving equity and accountability in labor distribution.

3. Visualization Dashboard: This feature summarizes data from Labor Tracking and presents it in an interactive, user-friendly format. It uses charts, graphs, and filters (e.g., by time frame or category) to visually represent labor distribution among family members. The goal is to make invisible labor more tangible by offering a clear picture of how responsibilities are shared. Unlike Labor Tracking, this feature prioritizes making data accessible and understandable through visuals.
   
4. Assessment/Score: The assessment section on the homepage is designed to assess and analyze data from users. It includes 15 questions aimed at evaluating consent scores with the range of -2 to +2 to roughly identify potential indicators of invisible work within their families. Based on the results, we can provide appropriate personalized advice as a reference.

## Tech Stack 
1. Frontend:
JavaScript & React – Builds an interactive UI for logging labor, tracking tasks, and displaying insights.
Chart.js / Recharts – Visualizes labor distribution trends in the dashboard.

2. Backend:
Node.js & Express.js – Handles labor entry, tracking, and assessment API requests.
MongoDB Atlas / Firebase Firestore – Stores user task logs, labor distribution data, and assessment scores.

3. Hosting & Deployment:
Render – Hosts the React frontend and Node.js backend for seamless user access.


