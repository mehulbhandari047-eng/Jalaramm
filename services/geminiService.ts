
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getTravelAdvise = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a helpful travel concierge for "Jalaram Enterprises - Travels & Transport" based in Daman. 
      The business is managed by Amar Bhandari, who oversees all activities.
      The user is asking: "${query}". 
      Provide a concise, professional, and welcoming response. 
      Key facts about us:
      1. We offer All India Tempo Transportation services (Pan India, all types of Tempos).
      2. We provide Airport Pickup and Drop services.
      3. We specialize in Corporate and office Staff Transportation.
      4. We offer Outstation cab services.
      5. We provide vehicles on Monthly/Yearly Contract basis.
      6. Fleet includes: Sedan, Innova, 7-seater, 5-seater.
      7. We also offer luxury tours in Daman, Goa, Saputara, and Udaipur.
      Mention Amar Bhandari's oversight if appropriate.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 250,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting to my travel database right now. Please call Amar Bhandari at 9979338355 for immediate assistance!";
  }
};
