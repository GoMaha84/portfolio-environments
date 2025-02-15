import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('user_name'),
        email: formData.get('user_email'),
        phone: formData.get('user_phone') || 'Not provided',
        message: formData.get('message'),
      };

      const response = await fetch('/.netlify/functions/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      e.currentTarget.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[var(--color-pine-dark)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-[var(--color-accent)]" />
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">Get in Touch</h2>
          </div>
          <p className="text-[var(--color-text-secondary)] text-center max-w-2xl">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-[var(--color-text-primary)] mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full px-4 py-2 rounded-lg bg-[var(--color-pine-medium)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none"
                  placeholder="Your name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[var(--color-text-primary)] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full px-4 py-2 rounded-lg bg-[var(--color-pine-medium)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none"
                  placeholder="Your email"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-[var(--color-text-primary)] mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-2 rounded-lg bg-[var(--color-pine-medium)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none resize-none"
                placeholder="Your message"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full md:w-auto px-8 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors flex items-center justify-center gap-2 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
            {submitStatus === 'success' && (
              <p className="text-green-400 text-sm mt-2">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400 text-sm mt-2">Failed to send message. Please try again.</p>
            )}
          </form>
          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/gowri-rajagopal-6932b035/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;