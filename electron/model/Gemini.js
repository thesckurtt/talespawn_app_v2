import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

export class Gemini {
  static API_KEY = process.env.GEMINI_API_KEY;
  static AI = new GoogleGenAI({ apiKey: Gemini.API_KEY });
  static async initialGamePrompt() {
    const response = await Gemini.AI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
      Você é um mestre de rpg, com base na história que está abaixo retorne apenas duas alternativas: História Base - “As Cinzas de Eldros”
Mundo: O continente de Eldros, um reino outrora próspero, agora esconde segredos nas ruínas do seu passado glorioso. Há décadas, uma praga mágica conhecida como Bruma Pálida varreu o território, fazendo reis enlouquecerem, monstros surgirem das sombras e cidades desaparecerem da noite para o dia.

Contexto:
Os reinos sobreviventes se isolaram. A Magia é agora temida e caçada. Ordem e caos lutam nas bordas do mapa. Dizem que a causa da Bruma está ligada a um Artefato Perdido — uma relíquia da era dos Magos Primordiais — que ainda pulsa com energia em algum lugar do mundo.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              trecho: {
                type: Type.STRING,
              },
              decisoes: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    texto: {
                      type: Type.STRING,
                    },
                  },
                },
              },
            },
            propertyOrdering: ["trecho", "decisoes"],
          },
        },
      },
    });

    console.log(response.text);
  }

  static async generateContent(prompt) {
    // const response = await fetch(this.apiUrl, {
    // method: 'POST',
    // headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${this.apiKey}`
    // },
    // body: JSON.stringify({
    //     prompt: prompt,
    //     model: this.model
    // })
    // });
    // if (!response.ok) {
    // throw new Error(`Error generating content: ${response.statusText}`);
    // }
    // const data = await response.json();
    // return data;
  }
}
Gemini.initialGamePrompt()