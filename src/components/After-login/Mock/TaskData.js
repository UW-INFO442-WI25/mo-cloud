import p1 from "../../../assets/task1.png";
import p3 from "../../../assets/task3.png";
import p4 from "../../../assets/task4.png";
import p6 from "../../../assets/task6.png";
import p9 from "../../../assets/task9.png";
import p10 from "../../../assets/task10.png";
import p12 from "../../../assets/task12.png";
import p13 from "../../../assets/task13.png";
import p14 from "../../../assets/task14.png";
import p15 from "../../../assets/task15.png";
import p16 from "../../../assets/task16.png";
import p17 from "../../../assets/task17.png";
import p18 from "../../../assets/task18.png";
import p20 from "../../../assets/task20.png";
import p22 from "../../../assets/task22.png";

export const mockTasks = [
    {
      title: "Meal Preparation & Cooking",
      time: "2 h 20 min",
      image: p9,
      bgColor: "bg-[#FFF8E7]",
      route: "/tasks/meal-preparation",
      category: "Cook",
      frequency: "Daily"
    },
    {
      title: "Grocery Shopping & Inventory Management",
      time: "2 h 15 min",
      image: p14,
      bgColor: "bg-[#FFF8E7]",
      route: "/tasks/grocery-management",
      category: "Cook",
      frequency: "Weekly"
    },
    {
      title: "Kitchen Maintenance & Cleanup",
      time: "55 min",
      image: p16,
      bgColor: "bg-[#FFF8E7]",
      route: "/tasks/kitchen-maintenance",
      category: "Cook",
      frequency: ["Daily", "Weekly"]
    },
    {
      title: "Surface & Floor Cleaning",
      time: "1 h 5 min",
      image: p12,
      bgColor: "bg-[#FFE4E6]",
      route: "/tasks/surface-floor-cleaning",
      category: "Clean",
      frequency: "Weekly"
    },
    {
      title: "Laundry & Fabric Care",
      time: "2 h 40 min",
      image: p13,
      bgColor: "bg-[#FFE4E6]",
      route: "/tasks/laundry-fabric-care",
      category: "Clean",
      frequency: "Weekly"
    },
    {
      title: "Deep Cleaning & Organization",
      time: "2 h 50 min",
      image: p15,
      bgColor: "bg-[#FFE4E6]",
      route: "/tasks/deep-cleaning-organization",
      category: "Clean",
      frequency: "Monthly"
    },
    {
      title: "Childcare & Parenting",
      time: "4 h",
      image: p1,
      bgColor: "bg-[#E5EAD7]",
      route: "/tasks/childcare-parenting",
      category: "Care",
      frequency: "Daily"
    },
    {
      title: "Elderly & Family Care",
      time: "3 h 30 min",
      image: p22,
      bgColor: "bg-[#E5EAD7]",
      route: "/tasks/elderly-family-care",
      category: "Care",
      frequency: "Daily"
    },
    {
      title: "Pet Care",
      time: "2 h",
      image: p6,
      bgColor: "bg-[#E5EAD7]",
      route: "/tasks/pet-care",
      category: "Care",
      frequency: ["Daily", "Weekly"]
    },
    {
      title: "Family Relationship & Emotional Support",
      time: "3 h",
      image: p17,
      bgColor: "bg-[#FED7AA]",
      route: "/tasks/family-relationship-emotional-support",
      category: "Emotion",
      frequency: "As Needed"
    },
    {
      title: "Social & Community Engagement",
      time: "3 h 45 min",
      image: p3,
      bgColor: "bg-[#FED7AA]",
      route: "/tasks/social-community-engagement",
      category: "Emotion",
      frequency: "As Needed"
    },
    {
      title: "Household Mood & Stress Management",
      time: "2 h",
      image: p20,
      bgColor: "bg-[#FED7AA]",
      route: "/tasks/household-mood-stress-management",
      category: "Emotion",
      frequency: "Daily"
    },
    {
      title: "Household Repairs & Fixes",
      time: "3 h 30 min",
      image: p4,
      bgColor: "bg-[#DCD5FC]",
      route: "/tasks/household-repairs-fixes",
      category: "Repair",
      frequency: "As Needed"
    },
    {
      title: "Seasonal & Preventative Maintenance",
      time: "3 h",
      image: p10,
      bgColor: "bg-[#DCD5FC]",
      route: "/tasks/seasonal-preventative-maintenance",
      category: "Repair",
      frequency: "As Needed"
    },
    {
      title: "Vehicle & Equipment Maintenance",
      time: "2 h",
      image: p18,
      bgColor: "bg-[#DCD5FC]",
      route: "/tasks/vehicle-equipment-maintenance",
      category: "Repair",
      frequency: "As Needed"
    }
  ];