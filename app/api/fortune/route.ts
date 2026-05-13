import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = `
User name: ${body.name}
Zodiac: ${body.zodiac}
Mood: ${body.mood}
Focus: ${body.focus}

Generate a mystical daily fortune reading.

Focus heavily on the user's chosen topic.

Make it emotional, magical, warm, and inspiring.

Format:
✨ Energy
💖 Focus Reading
🍀 Lucky Sign
🌙 Advice
`;

    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: prompt,
    });

    return Response.json({
      result: response.output_text,
    });
  } catch (error) {
    console.error(error);

    return Response.json({
      result: "Lumi cannot read the stars right now...",
    });
  }
}