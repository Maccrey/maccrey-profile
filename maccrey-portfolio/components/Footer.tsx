'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [visitors, setVisitors] = useState({ today: 0, total: 0 });

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const response = await fetch('/api/visitors', { method: 'POST' });
        if (response.ok) {
          const data = await response.json();
          setVisitors(data);
        }
      } catch (error) {
        console.error('Error fetching visitors:', error);
      }
    };

    fetchVisitors();
  }, []);

  return (
    <footer className="w-full p-8 text-center text-gray-600 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800">
      <div className="mb-2">
        <span>Today: {visitors.today}</span> | <span>Total: {visitors.total}</span>
      </div>
      <p>© 2025 Maccrey. All rights reserved.</p>
    </footer>
  );
}
