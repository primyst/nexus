import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would typically send an email or save to database
    // For now, we'll just log it and return success
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      message,
      timestamp: new Date().toISOString(),
    });

    // Example: Send email via your email service
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `New Contact from ${name}`,
    //   html: `...`
    // });

    return NextResponse.json(
      { success: true, message: 'Message received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
