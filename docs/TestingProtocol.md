# Testing Protocol

## Overview
This testing protocol covers three main features of our web application: task dashboard, self-assessment, and resource page. For the tasks dashboard, we want to ensure that users can add, filter, and view tasks seamlessly. This includes testing features such as filtering, search, and task entry. In addition, the self-assessment module should operate without requiring a user log-in, allow for a single answer selection per question, and correctly calculate and display the final score based on user responses. Lastly, the resource page should provide easy access to articles and videos, ensuring that all resource links are functional and lead to the correct content.

## Task Dashboard
### 1. Filtering Functionality 
#### Test Steps
- Log in and navigate to the dashboard.
- Add multiple tasks with varying frequencies, visibilities, and categories.
- Apply each filter individually and in combination.

#### Expected Result
- Only tasks matching the selected filter(s) should be displayed.

### 2. Search Bar Functionality
#### Test Steps
- Enter keywords into the search bar.
- Verify that the search returns matching tasks.
- Test with partial keywords and different casing.

#### Expected Result
- The search should return results that closely match the input.

### 3. Adding tasks to dashboard 
#### Test Steps
- Log in and navigate to the dashboard.
- Use the “Add Task” functionality to create a new task.
- Confirm that the task appears on the dashboard immediately.

#### Expected Result
- New tasks are added and displayed correctly with the proper filters.

### 4. Visual Display of User Input
#### Test Steps
- Enter data into task fields (title, description, etc.).
- Confirm that all entered data is displayed correctly on the dashboard.

#### Expected Result
- The visuals should accurately reflect the user input without truncation or formatting errors.


## Self-Assessment Module
### 1. No Log-in Requirement
#### Testing steps 
- Navigate to the self-assessment page directly (without logging in).
- Verify that the assessment is accessible.

#### Expected Result
- Users can take the assessment without needing to log in.

### 2. Single-Answer Selection per Question
#### Test Steps
- Start the self-assessment.
- Attempt to select more than one answer for any given question.

#### Expected Result
- The system should allow only one answer per question. Selecting a new answer should deselect the previous choice.

#### 3. Correct Score Calculation
#### Test Steps
- Complete the assessment using known test inputs.
- Verify that the score and any accompanying insights are calculated and displayed correctly.

#### Expected Result
- The final score must match the expected result based on the input answers.

## Resource Access
### 1. Accessibility of Articles and Videos
#### Test Steps:
- Click on resource links provided (articles and videos).
- Verify that the resources load correctly in a new tab or embedded viewer.

#### Expected Result
- All resource links should direct the user to the correct content without error.
- Known Bugs & Workarounds
  - Issue: Some links might return a 404 error if the resource has been moved or deleted.
  - Workaround: Verify the resource URL and update the link if necessary.

