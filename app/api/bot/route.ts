import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { question } = await req.json();

  // Replace with the call to your AI provider's API
  const aiResponse = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer YOUR_API_KEY`, // Replace with your API key
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt: question,
      max_tokens: 50,
    }),
  });

  const responseData = await aiResponse.json();

  return NextResponse.json({ answer: responseData.choices[0].text });
}