import { db } from "../config/firebase.js";
import { getDatabase, ref, set } from "firebase/database";
import { sunglasses } from "./api";

export const seedDatabase = async () => {
    const productsRef = ref(db, "products/sunglasses");
  
    try {
      // Store the sunglasses array in the database
      await set(productsRef, sunglasses);
      console.log("Database seeded successfully!");
    } catch (error) {
      console.error("Error seeding database:", error);
    }
};
  
