import { GoogleGenAI } from "@google/genai";

// getTravelAdvise uses Gemini to provide travel and transport advice for Jalaram Enterprises.
export const getTravelAdvise = async (query: string) => {
  // Always initialize GoogleGenAI inside the function using the API key from process.env.API_KEY as per guidelines.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    // Generate content using the recommended gemini-3-flash-preview model for simple Q&A tasks.
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
      }
    });
    // Directly access the text property as per @google/genai SDK specifications.
    return response.text;
  } catch (error) {
    console.error("Gemini Service Error:", error);
    return "Something went wrong with my logic. Please reach out to Amar Bhandari directly at 9979338355!";
  }
};