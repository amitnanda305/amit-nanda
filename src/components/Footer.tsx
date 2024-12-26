import React, { useState } from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false); // State to control popup visibility
  const [email, setEmail] = useState<string>(''); // State to hold email value
  const [status, setStatus] = useState<string | null>(null); // To handle form submission status

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Example of sending form data to an API endpoint (web3forms in this case)
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'fbe3574e-09bb-4c5a-b1ec-aac001a52439',
          email,
        }),
      });

      if (response.ok) {
        setStatus('Subscription successful!');
        setEmail(''); // Clear the email field after successful submission
        setShowPopup(true); // Show success popup
        setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
      } else {
        setStatus('Failed to subscribe. Please try again later.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-400">Feel free to reach out for collaborations or just a friendly hello</p>
            <div className="flex space-x-4 mt-4">
              <a
                className="hover:text-indigo-400 transition-colors"
                onClick={() => {
                  window.open('https://github.com/amitnanda305', '_blank');
                }}
              >
                <Github size={20} />
              </a>
              <a
                className="hover:text-indigo-400 transition-colors"
                onClick={() => {
                  window.open('https://www.linkedin.com/in/amit-nanda-191a46262', '_blank');
                }}
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to stay updated with my latest projects and articles</p>
            <form onSubmit={handleSubmit} className="flex">
              <input type="hidden" name="access_key" value="fbe3574e-09bb-4c5a-b1ec-aac001a52439" />
              <div className="flex">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-grow"
                  required
                />
                <button
                  type="submit"
                  className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            {status && (
              <div className={`mt-4 text-center ${status.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
                {status}
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dish khant. All rights reserved.</p>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h3 className="text-xl font-semibold text-green-600">Success!</h3>
            <p className="mt-2 text-gray-700">You have successfully subscribed to the newsletter.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
