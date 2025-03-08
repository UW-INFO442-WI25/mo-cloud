import surfaceCleaning from "../../../assets/task12.png";
import deepCleaning from "../../../assets/task15.png";
import kitchen from "../../../assets/task16.png";
import petCare from "../../../assets/task6.png";
import childcare from "../../../assets/task1.png";
import elderlyCare from "../../../assets/task22.png";
import moodManagement from "../../../assets/task20.png";
import mealPrep from "../../../assets/task9.png";
import groceryShopping from "../../../assets/task14.png";
import laundryCare from "../../../assets/task13.png";
import familyRelationship from "../../../assets/task17.png";
import socialEngagement from "../../../assets/task3.png";
import householdRepairs from "../../../assets/task4.png";
import seasonalMaintenance from "../../../assets/task10.png";
import vehicleMaintenance from "../../../assets/task18.png";

export const deepCleaningTasks = [
    {
      id: 1,
      name: "Cleaning windows, curtains, and blinds",
      timeRange: "30-60",
      completed: false,
      frequency: "Monthly",
      visibility: 4
    },
    {
      id: 2,
      name: "Decluttering and organizing storage spaces (closets, garage, attic)",
      timeRange: "30-90",
      completed: false,
      frequency: "Monthly",
      visibility: 3
    },
    {
      id: 3,
      name: "Checking and replacing air filters, vacuum bags",
      timeRange: "10-20",
      completed: false,
      frequency: "Monthly",
      visibility: 2
    },
  ];
  
  export const surfaceFloorTasks = [
    {
      id: 1,
      name: "Vacuuming carpets and rugs",
      timeRange: "20-30",
      completed: false,
      frequency: "Weekly",
      visibility: 4
    },
    {
      id: 2,
      name: "Mopping hard floors",
      timeRange: "15-30",
      completed: false,
      frequency: "Weekly",
      visibility: 4
    },
    {
      id: 3,
      name: "Dusting surfaces and furniture",
      timeRange: "15-30",
      completed: false,
      frequency: "Weekly",
      visibility: 3
    },
    {
      id: 4,
      name: "Spot cleaning spills and stains",
      timeRange: "10-20",
      completed: false,
      frequency: "As Needed",
      visibility: 3
    }
  ];
  
  export const petCareTasks = [
    {
      id: 1,
      name: "Feeding and providing fresh water",
      timeRange: "5-10",
      completed: false,
      frequency: "Daily",
      visibility: 5
    },
    {
      id: 2,
      name: "Walking dogs or playtime with pets",
      timeRange: "20-40",
      completed: false,
      frequency: "Daily",
      visibility: 4
    },
    {
      id: 3,
      name: "Cleaning litter boxes or cages",
      timeRange: "10-15",
      completed: false,
      frequency: "Daily",
      visibility: 4
    },
    {
      id: 4,
      name: "Grooming and bathing",
      timeRange: "30-60",
      completed: false,
      frequency: "Weekly",
      visibility: 3
    }
  ];
  
  export const childcareParentingTasks = [
    {
      id: 1,
      name: "Preparing kids for school (dressing, packing bags)",
      timeRange: "20-40",
      completed: false,
      frequency: "Daily",
      visibility: 8,
    },
    {
      id: 2,
      name: "Helping with homework",
      timeRange: "30-60",
      completed: false,
      frequency: "Daily",
      visibility: 7,
    },
    {
      id: 3,
      name: "Reading bedtime stories, putting kids to sleep",
      timeRange: "15-30",
      completed: false,
      frequency: "Daily",
      visibility: 8,
    },
    {
      id: 4,
      name: "Monitoring and supervising children's play",
      timeRange: "30-120",
      completed: false,
      frequency: "Daily",
      visibility: 6,
    },
  ];
  
  export const elderlyFamilyCareTasks = [
    {
      id: 1,
      name: "Assisting with medication and doctor appointments",
      timeRange: "15-60",
      completed: false,
      frequency: "Daily",
      visibility: 8
    },
    {
      id: 2,
      name: "Helping with mobility, bathing, or feeding",
      timeRange: "30-90",
      completed: false,
      frequency: "Daily",
      visibility: 9
    },
    {
      id: 3,
      name: "Providing emotional support and companionship",
      timeRange: "30-120",
      completed: false,
      frequency: "Daily",
      visibility: 5
    },
  ];
  
  export const kitchenMaintenanceTasks = [
    {
      id: 1,
      name: "Cleaning countertops, stove, and sink",
      timeRange: "10-20",
      completed: false,
      frequency: "Daily",
      visibility: 6
    },
    {
      id: 2,
      name: "Packing and storing leftovers",
      timeRange: "5-15",
      completed: false,
      frequency: "Daily",
      visibility: 4
    },
    {
      id: 3,
      name: "Taking out the trash",
      timeRange: "5",
      completed: false,
      frequency: "Daily",
      visibility: 9
    },
    {
      id: 4,
      name: "Checking food expiration dates and organizing fridge",
      timeRange: "10-15",
      completed: false,
      frequency: "Weekly",
      visibility: 2
    },
  ];
  
  export const householdMoodStressTasks = [
    {
      id: 1,
      name: "Ensuring a positive home atmosphere",
      timeRange: "Ongoing",
      completed: false,
      frequency: "Daily",
      visibility: 4
    },
    {
      id: 2,
      name: "Managing and anticipating family stress levels",
      timeRange: "Ongoing",
      completed: false,
      frequency: "Daily",
      visibility: 3
    },
  ];
  
  // Task categories for the main tasks page
  export const taskCategories = [
    {
      id: 1,
      title: "Surface & Floor Cleaning",
      image: surfaceCleaning,
      bgColor: "bg-[#FFE4E6]",
      route: "/tasks/surface-floor-cleaning",
      visibility: 4,
      frequency: "Weekly",
      time: "1 h 5 min",
      category: "Clean"
    },
    {
      id: 2,
      title: "Deep Cleaning & Organization",
      image: deepCleaning,
      bgColor: "bg-[#FFE4E6]",
      route: "/tasks/deep-cleaning-organization",
      visibility: 3,
      frequency: "Monthly",
      time: "2 h 50 min",
      category: "Clean"
    },
    {
      id: 3,
      title: "Kitchen Maintenance",
      image: kitchen,
      bgColor: "bg-[#FFF8E7]",
      route: "/tasks/kitchen-maintenance",
      visibility: 5,
      frequency: "Daily",
      time: "55 min",
      category: "Cook"
    },
    {
      id: 4,
      title: "Pet Care",
      image: petCare,
      bgColor: "bg-[#E5EAD7]",
      route: "/tasks/pet-care",
      visibility: 4,
      frequency: "Daily",
      time: "2 h",
      category: "Care"
    },
    {
      id: 5,
      title: "Childcare & Parenting",
      image: childcare,
      bgColor: "bg-[#E5EAD7]",
      route: "/tasks/childcare-parenting",
      visibility: 7,
      frequency: "Daily",
      time: "4 h",
      category: "Care"
    },
    {
      id: 6,
      title: "Elderly & Family Care",
      image: elderlyCare,
      bgColor: "bg-[#E5EAD7]",
      route: "/tasks/elderly-family-care",
      visibility: 8,
      frequency: "Daily",
      time: "3 h 30 min",
      category: "Care"
    },
    {
      id: 7,
      title: "Household Mood & Stress Management",
      image: moodManagement,
      bgColor: "bg-[#FED7AA]",
      route: "/tasks/household-mood-stress",
      visibility: 3,
      frequency: "Daily",
      time: "2 h",
      category: "Emotion"
    },
    {
      id: 8,
      title: "Meal Preparation & Cooking",
      image: mealPrep,
      bgColor: "bg-[#FFF8E7]",
      route: "/tasks/meal-preparation",
      category: "Cook",
      frequency: "Daily",
      time: "2 h 20 min"
    },
    {
      id: 9,
      title: "Grocery Shopping & Inventory Management",
      image: groceryShopping,
      bgColor: "bg-[#FFF8E7]",
      route: "/tasks/grocery-management",
      category: "Cook",
      frequency: "Weekly",
      time: "2 h 15 min"
    },
    {
      id: 10,
      title: "Laundry & Fabric Care",
      image: laundryCare,
      bgColor: "bg-[#FFE4E6]",
      route: "/tasks/laundry-fabric-care",
      category: "Clean",
      frequency: "Weekly",
      time: "2 h 40 min"
    },
    {
      id: 11,
      title: "Family Relationship & Emotional Support",
      image: familyRelationship,
      bgColor: "bg-[#FED7AA]",
      route: "/tasks/family-relationship-emotional-support",
      category: "Emotion",
      frequency: "As Needed",
      time: "3 h"
    },
    {
      id: 12,
      title: "Social & Community Engagement",
      image: socialEngagement,
      bgColor: "bg-[#FED7AA]",
      route: "/tasks/social-community-engagement",
      category: "Emotion",
      frequency: "As Needed",
      time: "3 h 45 min"
    },
    {
      id: 13,
      title: "Household Repairs & Fixes",
      image: householdRepairs,
      bgColor: "bg-[#DCD5FC]",
      route: "/tasks/household-repairs-fixes",
      category: "Repair",
      frequency: "As Needed",
      time: "3 h 30 min"
    },
    {
      id: 14,
      title: "Seasonal & Preventative Maintenance",
      image: seasonalMaintenance,
      bgColor: "bg-[#DCD5FC]",
      route: "/tasks/seasonal-preventative-maintenance",
      category: "Repair",
      frequency: "As Needed",
      time: "3 h"
    },
    {
      id: 15,
      title: "Vehicle & Equipment Maintenance",
      image: vehicleMaintenance,
      bgColor: "bg-[#DCD5FC]",
      route: "/tasks/vehicle-equipment-maintenance",
      category: "Repair",
      frequency: "As Needed",
      time: "2 h"
    }
  ];