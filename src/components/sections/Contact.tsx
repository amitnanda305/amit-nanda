import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<string | null>(null); // To handle form submission status
  const [showPopup, setShowPopup] = useState<boolean>(false); // To control popup visibility

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Handle form submission logic here (for example, call an API)
    try {
      // Example of sending form data to an API endpoint (web3forms in this case)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'fbe3574e-09bb-4c5a-b1ec-aac001a52439',
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        }); // Clear form after successful submission
        setShowPopup(true); // Show success popup
        setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
      } else {
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="bg-clip-text bg-gradient-to-r font-bold from-indigo-600 mb-4 text-4xl text-transparent to-purple-600">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <Mail className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">amitnanda305@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <Phone className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+91 7043385625</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <MapPin className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600">Rajkot, Gujrat</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14741.158660300032!2d70.80216!3d22.30389!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca6c3029971d%3A0x4cb23d7d54078e88!2sRajkot%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1&z=12"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value="fbe3574e-09bb-4c5a-b1ec-aac001a52439" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>

              {status && (
                <div className={`mt-4 text-center ${status.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h3 className="text-xl font-semibold text-green-600">Success!</h3>
            <p className="mt-2 text-gray-700">Your message has been sent successfully.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
