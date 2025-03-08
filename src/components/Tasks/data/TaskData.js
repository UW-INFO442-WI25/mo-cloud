import surfaceCleaning from "@/assets/surface-cleaning.jpg";
import deepCleaning from "@/assets/deep-cleaning.jpg";
import kitchen from "@/assets/kitchen.jpg";
import petCare from "@/assets/pet-care.jpg";
import childcare from "@/assets/childcare.jpg";
import elderlyCare from "@/assets/elderly-care.jpg";
import moodManagement from "@/assets/mood-management.jpg";

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
      image: "/images/surface-cleaning.jpg",
      bgColor: "bg-blue-100",
      route: "/tasks/surface-floor-cleaning",
      visibility: 4,
      frequency: "Weekly",
      time: "1-2 hours"
    },
    {
      id: 2,
      title: "Deep Cleaning & Organization",
      image: "/images/deep-cleaning.jpg",
      bgColor: "bg-green-100",
      route: "/tasks/deep-cleaning-organization",
      visibility: 3,
      frequency: "Monthly",
      time: "2-4 hours"
    },
    {
      id: 3,
      title: "Kitchen Maintenance",
      image: "/images/kitchen.jpg",
      bgColor: "bg-yellow-100",
      route: "/tasks/kitchen-maintenance",
      visibility: 5,
      frequency: "Daily",
      time: "30-60 min"
    },
    {
      id: 4,
      title: "Pet Care",
      image: "/images/pet-care.jpg",
      bgColor: "bg-purple-100",
      route: "/tasks/pet-care",
      visibility: 4,
      frequency: "Daily",
      time: "30-60 min"
    },
    {
      id: 5,
      title: "Childcare & Parenting",
      image: "/images/childcare.jpg",
      bgColor: "bg-pink-100",
      route: "/tasks/childcare-parenting",
      visibility: 7,
      frequency: "Daily",
      time: "1-3 hours"
    },
    {
      id: 6,
      title: "Elderly & Family Care",
      image: "/images/elderly-care.jpg",
      bgColor: "bg-orange-100",
      route: "/tasks/elderly-family-care",
      visibility: 8,
      frequency: "Daily",
      time: "1-3 hours"
    },
    {
      id: 7,
      title: "Household Mood & Stress Management",
      image: "/images/mood-management.jpg",
      bgColor: "bg-indigo-100",
      route: "/tasks/household-mood-stress",
      visibility: 3,
      frequency: "Daily",
      time: "Ongoing"
    }
  ];