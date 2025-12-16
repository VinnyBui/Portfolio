import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = await fetch('https://api.openai.com/v1/chatkit/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
        'OpenAI-Beta': 'chatkit_beta=v1',
      },
      body: JSON.stringify({
        workflow: {
          id: process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID,
        },
        user: 'portfolio-visitor',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create session');
    }

    const data = await response.json();
    return NextResponse.json({ client_secret: data.client_secret });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create session' },
      { status: 500 }
    );
  }
}
