import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // The actual phone number for the tel link
  const phoneNumber = "+919940756053";
  // The displayed masked version
  const maskedPhone = "+91 99407*****";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('user_name'),
        email: formData.get('user_email'),
        phone: formData.get('user_phone') || 'Not provided', // Optional phone number
        message: formData.get('message'),
      };

      const response = await fetch('/api/send', {
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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Mail className="w-6 h-6 text-portfolio-blue" />
          <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="w-6 h-6 text-portfolio-blue mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Email
                </h3>
                <a 
                  href="mailto:gowrirajagopal.bm@gmail.com"
                  className="text-gray-600 hover:text-portfolio-blue transition-colors"
                >
                  gowrirajagopal.bm@gmail.com
                </a>
                <p className="text-sm text-gray-500 mt-1">
                  Feel free to email me for any professional inquiries
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-portfolio-blue mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Phone
                </h3>
                <a 
                  href={`tel:${phoneNumber}`}
                  className="text-gray-600 hover:text-portfolio-blue transition-colors"
                >
                  {maskedPhone}
                </a>
                <p className="text-sm text-gray-500 mt-1">
                  Available during business hours
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-portfolio-blue mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Location
                </h3>
                <p className="text-gray-600">India</p>
                <p className="text-sm text-gray-500 mt-1">
                  Open to remote and local opportunities
                </p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <input
                type="tel"
                name="user_phone"
                placeholder="Your Phone Number (Optional)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-portfolio-blue text-white py-2 px-6 rounded-lg transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-600'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus === 'success' && (
              <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 text-sm mt-2">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;