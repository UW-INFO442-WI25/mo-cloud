# Testing Protocol

## Overview
This testing protocol covers three main features of our web application: task dashboard, self-assessment, and resource page. For the tasks dashboard, we want to ensure that users can add, filter, and view tasks seamlessly. This includes testing features such as filtering, search, and task entry. In addition, the self-assessment module should operate without requiring a user log-in, allow for a single answer selection per question, and correctly calculate and display the final score based on user responses. Lastly, the resource page should provide easy access to articles and videos, ensuring that all resource links are functional and lead to the correct content.

## Task Dashboard
### 1. User Experience Test
#### Testing Steps
- The user can intuitively understand how to navigate, search, and add tasks without significant training.
- The user can easily recognize and interact with the interface.

#### Expected Result
- 90% of users can understand how to use core features without further guidance.
- The button size of the pages is appropriate.

#### Failure standard
- 50% of users find it hard to finish task input the first time due to confused feature logistics.
- 20% of users need additional guidance to finish the steps
- The size of the button is too small or too large

### 2. Functional Test
#### Test Steps
- The user can log in with emails and navigate to the dashboard.
- The user can use the “Add Task” functionality to record a new task.
- The user can apply each filter individually and in combination.
- The user can use the search bar to receive the matching tasks.
- The user can see the visualization generated on the dashboard after recording the tasks. 

#### Expected Result
- All core features (add tasks, search bar, task filter, and visualization) work without bugs or system errors.
- All user inputs, whether manual or automatic, are correctly stored, retrieved, and displayed without loss or corruption.
- Users can smoothly and efficiently complete all actions.

#### Failure Standard 
- More than 40% of users encounter bugs or misoperations.
- More than 25% of users are confused about the feature and need extra training to understand the feature.
- The interactivity of the features is redundant and unclear, which decreases the overall user experience.


### 3. Data integrity test
#### Testing Steps 
- Tasks can be synchronized in different electronic devices with the same account
- The data input is correctly recorded and visualized

#### Expected Result
- Successfully synchronized in different devices without any data loss and mistakes
- The visualization correctly display the data entered by the user.

#### Failure standard
- Can’t correctly synchronize or track the data 
- The dashboard mistakenly display the visualiztion 


## Self-Assessment Module
### 1. User Experience Test
#### Testing Steps
- The user can easily progress through the series of assessment questions.
- The user can easily understand the questions and results.

#### Expected Result
- At least 90% of users can complete the assessment without additional guidance.
- At least 90% of users report that the questions are clear and intuitive.
- Users can interpret their score and accompanying insights correctly on first exposure.

#### Failure Standard:
- If 30% or more users express confusion regarding the flow or content of the assessment.
- If more than 20% of users need extra help or training to complete the assessment.
- If the final results are displayed in a manner that is unclear or misleading.

### 2. Functional Test
#### Testing Steps 
- The user can navigate and take the self-assessment page directly (without logging in).
- The user can only see one question at a time and select one answer per question.
- The user can only move forward to the next question once select an answer.

#### Expected Result
- 100% of the questions load correctly and in sequence.
- Users can only select one answer for each question.
- Every user response is captured without loss or error.

#### Failure Standard 
- If any assessment question fails to load or is displayed out of order.
- If responses are missed, stored incorrectly, or if data persistence fails upon navigation

#### 3. Data Accuracy Test
#### Testing Steps 
- If the user logs in and takes the test, the score will be correctly stored in the user's profile.
- All user responses are stored reliably so that returning to the assessment does not cause any loss or corruption of data.
- - The score and any accompanying insights are calculated and displayed correctly.
- The assessment report can be downloaded by the user.

#### Expected Result
- User input data is consistently saved and remains accurate across sessions.
- The computed score exactly aligns with the expected result.
- The final score must match the expected result based on the input answers.
- The user can acquire the PDF version of the assessment report. 

#### Failure Standard
- The scoring algorithm produces results that differ from the expected outcomes in any test case.
- There are issues with data storage or if user responses are not accurately preserved upon navigation or access.
- The score recalculations are delayed, incorrect, or not triggered when user re-taking the assessment.


## Resource Access
### 1. User Experience Test
Accessibility of Articles and Videos
#### Test Steps:
- The user can easily navigate and click on all the provided resources with any bugs or corruption
- The resources can load correctly in a new tab or embedded viewer.

#### Expected Result
- All resource links should direct the user to the correct content without error.

#### Failure Standard
- The links are broken or mistakenly take the users to a different tab than expected. 
