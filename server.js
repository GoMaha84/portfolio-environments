import express from 'express';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/send', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    // Log the contact form submission
    console.log('\n--- New Contact Form Submission ---');
    console.log('From:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Message:', message);
    console.log('Time:', new Date().toLocaleString());
    console.log('-----------------------------------\n');

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: ['gowri.mahagopal@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<h3>Message:</h3>
<p>${message}</p>
      `,
    });

    console.log('Email sent successfully:', data);
    res.status(200).json({ 
      success: true, 
      message: 'Contact form submission received and email sent' 
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      error: 'Error processing submission',
      details: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Environment check:', {
    hasApiKey: !!process.env.RESEND_API_KEY
  });
}); 