import { NextRequest, NextResponse } from 'next/server';

// Simple rate limiting (in-memory, reset on server restart)
const submissions = new Map<string, number[]>();

// Email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, 1000);
}

// Send email notification (configure with your email service)
async function sendEmailNotification(data: {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}) {
  // Option 1: Using SendGrid (recommended)
  // Uncomment and configure if using SendGrid
  /*
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: process.env.CONTACT_EMAIL || 'hello@nexuscorporate.com',
    from: process.env.FROM_EMAIL || 'noreply@nexuscorporate.com',
    subject: `New Inquiry from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Budget:</strong> ${data.budget || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `,
  };

  await sgMail.send(msg);
  */

  // Option 2: Using Nodemailer (alternative)
  // Uncomment and configure if using Nodemailer
  /*
  const nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.FROM_EMAIL,
    to: process.env.CONTACT_EMAIL,
    subject: `New Inquiry from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p>
