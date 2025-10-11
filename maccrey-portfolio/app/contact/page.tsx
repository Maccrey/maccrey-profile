'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission logic (e.g., using an API route or a third-party service)
    console.log({ name, email, message });
    alert('Message sent! (This is a demo)');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-lg text-gray-400 mb-4">
            Feel free to reach out. You can find me on these platforms:
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:maccrey@naver.com" className="text-blue-400 hover:underline transition-colors">Email</a>
            <a href="https://github.com/Maccrey" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline transition-colors">GitHub</a>
            <a href="https://code-lab.tistory.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline transition-colors">Blog</a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-lg font-medium transition-colors disabled:bg-gray-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}