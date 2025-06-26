import db from "../database/db.js";
import { Gemini } from "./Gemini.js";

export class Game {
  static async initialGame() {
    const response = await Gemini.initialGamePrompt();
    return response;
  }
  static async getAllContexts(user_id) {
    try {
      const response = await db("contexts").where("user_id", user_id);

      return response;
    } catch (error) {
      return {
        error: true,
        message: `[Game]: ${error.message || "Unexpected error!"}`,
      };
    }
  }

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
      return {
        error: true,
        message: `[Game]: ${error.message || "Unexpected error!"}`,
      };
    }
  }

  static async savePrompt(user_id, prompt){
    try {
      const response = await db("prompts").insert({
        user_id,
        prompt
      });
      if (!response) {
        return { error: true, message: "Failed to save prompt" };
      }
      return { error: false, message: "Prompt saved successfully" };
    } catch (error) {
      return {
        error: true,
        message: `[Game]: ${error.message || "Unexpected error!"}`,
      };
    }
  }
}
