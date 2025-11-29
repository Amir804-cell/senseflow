import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client
// Note: process.env.API_KEY is assumed to be available in the environment
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateMarketingCopy = async (topic: string): Promise<string> => {
  if (!apiKey) return "Experience the future of indoor climate control with SenseFlow. (API Key missing for live generation)";

  try {
    const model = ai.models;
    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a short, punchy, professional marketing paragraph (max 50 words) about ${topic} for a company called SenseFlow. The tone should be modern, eco-friendly, and innovative.`,
    });
    return response.text || "Revolutionizing indoor air quality.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Advanced IoT solutions for a healthier home environment.";
  }
};

export const explainComponent = async (componentName: string): Promise<string> => {
  if (!apiKey) return `High-performance ${componentName} designed for efficiency in SenseFlow's compact cooling system.`;

  try {
    const model = ai.models;
    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are explaining components in SenseFlow, a compact Peltier-based cooling device for Danish homes. 
      
Explain the specific technical function and importance of the "${componentName}" component in this system. 
Focus on:
- Its unique role in the cooling/control process
- Key technical advantages
- How it contributes to the overall system performance

Provide a concise, technical but accessible explanation in 2-3 sentences. Make it specific to THIS component, not generic.`,
    });
    return response.text || "Critical system component.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return `The ${componentName} plays a crucial role in SenseFlow's thermal management system.`;
  }
};

