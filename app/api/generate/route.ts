
import { NextRequest, NextResponse } from 'next/server';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export async function POST(req: NextRequest) {
    try {
        const { prompt, type } = await req.json();

        if (!prompt) {
            return NextResponse.json({ success: false, error: 'Prompt is required' }, { status: 400 });
        }

        let systemPrompt = 'You are an expert blog post writer. Generate a comprehensive and engaging blog post content in HTML format based on the user title. Use appropriate headings (h2, h3), paragraphs, lists, and formatting. Do not include the title in the HTML body as it is handled separately. Keep it professional yet conversational.';

        if (type === 'title') {
            systemPrompt = 'You are an expert copywriter. Your task is to take a draft blog post title and rewrite it to be more catchy, SEO-friendly, and engaging. Return ONLY the improved title text, nothing else. Do not use quotes.';
        }

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: systemPrompt
                    },
                    {
                        role: 'user',
                        content: type === 'title' ? `Improve this title: ${prompt}` : `Write a blog post about: ${prompt}`
                    }
                ],
                temperature: 0.7,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json({ success: false, error: data.error?.message || 'Failed to generate content' }, { status: response.status });
        }

        const generatedContent = data.choices[0].message.content;

        return NextResponse.json({ success: true, content: generatedContent });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
