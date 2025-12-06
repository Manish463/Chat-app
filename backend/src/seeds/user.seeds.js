import "dotenv/config";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

const seedUsers = [
  // Female Users
  {
    email: "priya.sharma@duomo.in",
    fullName: "Priya Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "ananya.verma@duomo.in",
    fullName: "Ananya Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "kavya.patel@duomo.in",
    fullName: "Kavya Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "riya.mehta@duomo.in",
    fullName: "Riya Mehta",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "isha.kapoor@duomo.in",
    fullName: "Isha Kapoor",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "sakshi.singh@duomo.in",
    fullName: "Sakshi Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "tanya.agarwal@duomo.in",
    fullName: "Tanya Agarwal",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "meera.iyer@duomo.in",
    fullName: "Meera Iyer",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "arjun.kumar@duomo.in",
    fullName: "Arjun Kumar",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "rahul.yadav@duomo.in",
    fullName: "Rahul Yadav",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "vivaan.joshi@duomo.in",
    fullName: "Vivaan Joshi",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "aditya.reddy@duomo.in",
    fullName: "Aditya Reddy",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "krish.nair@duomo.in",
    fullName: "Krish Nair",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "rohan.banerjee@duomo.in",
    fullName: "Rohan Banerjee",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "yash.chopra@duomo.in",
    fullName: "Yash Chopra",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];


const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();