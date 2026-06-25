import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        // Log the submitted data (in a real app, you would save this to a database or send an email)
        console.log('Form submission received:', body);

        // Return a successful response
        return NextResponse.json(
            { success: true, message: 'Form submitted successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Form submission error:', error);
        
        // Return an error response
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
}
