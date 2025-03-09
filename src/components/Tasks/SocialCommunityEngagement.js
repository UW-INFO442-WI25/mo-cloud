"use client"

import TaskPageWrapper from "./Components/TaskPageWrapper";
import { socialCommunityEngagementTasks } from "./data/TaskData";

function SocialCommunityEngagement() {
  return (
    <TaskPageWrapper
      title="Social & Community Engagement"
      taskId={7}
      tasksData={socialCommunityEngagementTasks}
    />
  );
}

export default SocialCommunityEngagement;


