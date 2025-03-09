import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import About from "./components/About/about"
import Dashboard from "./components/After-login/Dashboard/Dashboard"
import MyTasks from "./components/After-login/MyTasks/MyTasks"
import Profile from "./components/After-login/Profile/Profile"
import Assessment from "./components/Assessment/assessment"
import Question1 from "./components/Assessment/question1"
import Question2 from "./components/Assessment/question2"
import Question3 from "./components/Assessment/question3"
import Question4 from "./components/Assessment/question4"
import Question5 from "./components/Assessment/question5"
import Question6 from "./components/Assessment/question6"
import Question7 from "./components/Assessment/question7"
import Question8 from "./components/Assessment/question8"
import Question9 from "./components/Assessment/question9"
import Question10 from "./components/Assessment/question10"
import Results from "./components/Assessment/results"
import LoginPage from "./components/Auth/sign-in"
import SignUpPage from "./components/Auth/sign-up"
import Home from "./components/Home/home"
import Resource from "./components/Resource/Resource_page"
import Documentation from "./components/Resource/Documentation"
import UserProfilePage from "./components/Userprofile/UserProfile"
import ChildcareParenting from "./components/Tasks/ChildcareParenting"
import DeepCleaningOrganization from "./components/Tasks/DeepCleaningOrganization"
import ElderlyFamilyCare from "./components/Tasks/ElderlyFamilyCare"
import FamilyRelationshipEmotionalSupport from "./components/Tasks/FamilyRelationshipEmotionalSupport"
import { FilterProvider } from "./components/Tasks/FilterContext"
import GroceryManagement from "./components/Tasks/GroceryManagement"
import HouseholdMoodStressManagement from "./components/Tasks/HouseholdMoodStressManagement"
import HouseholdRepairsFixes from "./components/Tasks/HouseholdRepairsFixes"
import KitchenMaintenance from "./components/Tasks/KitchenMaintenance"
import LaundryFabricCare from "./components/Tasks/LaundryFabricCare"
import MealPreparationCooking from "./components/Tasks/MealPreparationCooking"
import PetCare from "./components/Tasks/PetCare"
import SeasonalPreventativeMaintenance from "./components/Tasks/SeasonalPreventativeMaintenance"
import SocialCommunityEngagement from "./components/Tasks/SocialCommunityEngagement"
import SurfaceFloorCleaning from "./components/Tasks/SurfaceFloorCleaning"
import Tasks from "./components/Tasks/tasks"
import VehicleEquipmentMaintenance from "./components/Tasks/VehicleEquipmentMaintenance"
import TaskDetail from "./components/Tasks/TaskDetail"

function App() {
  return (
    <FilterProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/meal-preparation" element={<MealPreparationCooking />} />
          <Route path="/tasks/grocery-management" element={<GroceryManagement />} />
          <Route path="/tasks/kitchen-maintenance" element={<KitchenMaintenance />} />
          <Route path="/tasks/surface-floor-cleaning" element={<SurfaceFloorCleaning />} />
          <Route path="/tasks/laundry-fabric-care" element={<LaundryFabricCare />} />
          <Route path="/tasks/deep-cleaning-organization" element={<DeepCleaningOrganization />} />
          <Route path="/tasks/childcare-parenting" element={<ChildcareParenting />} />
          <Route path="/tasks/elderly-family-care" element={<ElderlyFamilyCare />} />
          <Route path="/tasks/pet-care" element={<PetCare />} />
          <Route path="/tasks/family-relationship-emotional-support" element={<FamilyRelationshipEmotionalSupport />} />
          <Route path="/tasks/social-community-engagement" element={<SocialCommunityEngagement />} />
          <Route path="/tasks/household-mood-stress-management" element={<HouseholdMoodStressManagement />} />
          <Route path="/tasks/household-repairs-fixes" element={<HouseholdRepairsFixes />} />
          <Route path="/tasks/seasonal-preventative-maintenance" element={<SeasonalPreventativeMaintenance />} />
          <Route path="/tasks/vehicle-equipment-maintenance" element={<VehicleEquipmentMaintenance />} />
          <Route path="/about" element={<About />} />
          <Route path="/self-assessment" element={<Assessment />} />
          <Route path="/self-assessment/question1" element={<Question1 />} />
          <Route path="/self-assessment/question2" element={<Question2 />} />
          <Route path="/self-assessment/question3" element={<Question3 />} />
          <Route path="/self-assessment/question4" element={<Question4 />} />
          <Route path="/self-assessment/question5" element={<Question5 />} />
          <Route path="/self-assessment/question6" element={<Question6 />} />
          <Route path="/self-assessment/question7" element={<Question7 />} />
          <Route path="/self-assessment/question8" element={<Question8 />} />
          <Route path="/self-assessment/question9" element={<Question9 />} />
          <Route path="/self-assessment/question10" element={<Question10 />} />
          <Route path="/self-assessment/results" element={<Results />} />
          <Route path="/sign-in" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/userprofile" element={<UserProfilePage />} />
          <Route path="/documentation" element={<Documentation />} />
          
          {/* After Login Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-tasks" element={<MyTasks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tasks/:taskId" element={<TaskDetail />} />
        </Routes>
      </Router>
    </FilterProvider>
  )
}

export default App


