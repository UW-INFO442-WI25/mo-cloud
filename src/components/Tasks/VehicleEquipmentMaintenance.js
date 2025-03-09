"use client"

import TaskPageWrapper from "./Components/TaskPageWrapper";
import { vehicleEquipmentTasks } from "./data/TaskData";

function VehicleEquipmentMaintenance() {
  return (
    <TaskPageWrapper
      title="Vehicle & Equipment Maintenance"
      taskId={12}
      tasksData={vehicleEquipmentTasks}
    />
  );
}

export default VehicleEquipmentMaintenance;