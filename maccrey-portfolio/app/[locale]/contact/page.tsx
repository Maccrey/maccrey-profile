'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">{t('title')}</h1>
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            {t('description')}
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:maccrey@naver.com" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">{t('email')}</a>
            <a href="https://github.com/Maccrey" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">GitHub</a>
            <a href="https://code-lab.tistory.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">{t('blog')}</a>
          </div>
        </div>

        <form
          action="https://formsubmit.co/maccrey@naver.com"
          method="POST"
          className="space-y-6"
          onSubmit={() => setIsSubmitting(true)}
        >
          {/* FormSubmit configuration */}
          <input type="hidden" name="_subject" value="New contact form submission from portfolio" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" style={{ display: 'none' }} />
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('nameLabel')}</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('emailLabel')}</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('messageLabel')}</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-lg font-medium transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t('sending') : t('sendButton')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}