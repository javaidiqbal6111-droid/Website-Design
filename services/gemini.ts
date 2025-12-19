
import { GoogleGenAI } from "@google/genai";

export async function getConciergeResponse(prompt: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: `You are the Digital Concierge for 'L'ESSENCE', a luxury lifestyle and skincare boutique. 
        Your tone is sophisticated, poetic, and helpful. 
        Focus on sensory descriptions (scent, texture, feeling). 
        Suggest products like 'Santal & Clay', 'Midnight Elixir', 'Silk Caress', or 'Verdant Mask' based on the user's needs.
        Keep responses under 100 words. 
        Use markdown for light formatting but keep it elegant.`,
        temperature: 0.8,
        topP: 0.9,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, my creative senses are momentarily clouded. Please allow me a moment to gather my thoughts.";
  }
}
