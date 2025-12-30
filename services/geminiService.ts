
import { GoogleGenAI } from "@google/genai";

// Ensure the API key is handled as a non-optional string for the SDK
const apiKey = process.env.API_KEY || "";

const getAiClient = () => {
  if (!apiKey) {
    console.warn("API_KEY is missing. AI Assistant will be disabled. Please set it in your environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const getTravelAdvise = async (query: string) => {
  const ai = getAiClient();
  if (!ai) return "I'm currently resting. Please call Amar Bhandari at 9979338355 for immediate travel or transport assistance!";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the primary travel concierge for "Jalaram Enterprises - Travels & Transport" in Daman. 
      Business Owner: Amar Bhandari.
      User Query: "${query}"
      
      Your goal is to be helpful and drive bookings. Key Services:
      - All India Tempo Transportation (Pan India).
      - Airport Pickup/Drop.
      - Corporate/Staff Transport.
      - Luxury Tours (Daman, Goa, Saputara, Udaipur).
      - Fleet: Sedans, Innovas, SUVs, Tempos.
      
      Response Style: Professional, friendly, concise. Always suggest contacting via WhatsApp/Email for the best rates.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 200,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Service Error:", error);
    return "Something went wrong with my logic. Please reach out to Amar Bhandari directly at 9979338355!";
  }
};
