import db from "../database/db.js";

export class Game {
  static async getContext() {}
  static async saveContext({
    option_chosen,
    option_declined,
    excerpt,
    user_id,
  }) {
    try {
      const response = await db("contexts").insert({
        excerpt_history: excerpt,
        option_chosen,
        option_declined,
        user_id,
      });
      if (!response) {
        return { error: true, message: "Failed to save context" };
      }
      return { error: false, message: "Context saved successfully" };
    } catch (error) {
      console.error(`[Game]: ${error.message || "Unexpected error!"}`);
    }
  }
}
