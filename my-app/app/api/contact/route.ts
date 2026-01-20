import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiting (for production, use Redis or database)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 3600000 }); // 1 hour
    return true;
  }

  if (limit.count >= 5) {
    return false;
  }

  limit.count++;
  return true;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  return input.trim().slice(0, 1000); // Limit length and trim
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedCompany = sanitizeInput(company || '');
    const sanitizedMessage = sanitizeInput(message);

    // Validate email format
    if (!validateEmail(sanitizedEmail)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Validate message length
    if (sanitizedMessage.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      );
    }

    // Log submission (in production, store in database)
    const submission = {
      name: sanitizedName,
      email: sanitizedEmail,
      company: sanitizedCompany,
      message: sanitizedMessage,
      timestamp: new Date().toISOString(),
      ip: ip,
    };

    console.log('Contact form submission:', submission);

    // TODO: Send email using your service
    // Example with SendGrid:
    // await sendEmail({
    //   to: 'hello@nexuscorporate.com',
    //   from: 'noreply@nexuscorporate.com',
    //   subject: `New Contact Form Submission from ${sanitizedName}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${sanitizedName}</p>
    //     <p><strong>Email:</strong> ${sanitizedEmail}</p>
    //     <p><strong>Company:</strong> ${sanitizedCompany || 'Not provided'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
    //   `,
    // });

    // TODO: Send auto-reply to user
    // await sendEmail({
    //   to: sanitizedEmail,
    //   from: 'noreply@nexuscorporate.com',
    //   subject: 'We received your message - Nexus Corporate',
    //   html: `
    //     <h2>Thank you for reaching out!</h2>
    //     <p>Hi ${sanitizedName},</p>
    //     <p>We've received your message and will get back to you within 24 hours.</p>
    //     <p>Best regards,<br>Nexus Corporate Team</p>
    //   `,
    // });

    // TODO: Store in database
    // await db.contactSubmissions.create({
    //   name: sanitizedName,
    //   email: sanitizedEmail,
    //   company: sanitizedCompany,
    //   message: sanitizedMessage,
    //   createdAt: new Date(),
    // });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! We received your message and will respond within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

// other methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
