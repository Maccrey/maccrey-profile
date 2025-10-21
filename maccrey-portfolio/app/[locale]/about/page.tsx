import {getTranslations, getLocale} from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslator(locale, 'About');
  const title = t('metaTitle');
  const description = t('metaDescription');
  // TODO: Replace 'https://your-domain.com' with your actual domain
  const url = `https://your-domain.com/${locale}/about`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Your Name - Portfolio', // TODO: Replace 'Your Name - Portfolio' with your actual name and portfolio title
      images: [
        {
          url: 'https://your-domain.com/vercel.svg', // TODO: Replace with a more relevant image for your about page
          width: 800,
          height: 600,
          alt: 'About Page'
        }
      ],
      locale: locale,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://your-domain.com/vercel.svg'] // TODO: Replace with a more relevant image for your about page
    }
  };
}

export default async function AboutPage() {
  const t = await getTranslations('AboutPage');
  const locale = await getLocale();
  const techStack = ["Dart", "Python", "Firebase", "Supabase", "Cloudflare", "Next.js", "n8n", "Flutter"];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "임석훈",
    "jobTitle": "개발자",
    "url": `https://your-domain.com/${locale}/about`, // TODO: Replace with your actual domain
    "sameAs": [
      "https://github.com/Maccrey"
    ]
  };

  return (
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <h1 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">{t('title')}</h1>
      <div className="max-w-4xl mx-auto space-y-16">
        {/* 나의 이야기 */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">{t('storyTitle')}</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {t('storyContent')}
          </p>
        </section>

        {/* 비즈니스에서 개발로 */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">{t('journeyTitle')}</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {t('journeyIntro')}
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{t('experienceTitle')}</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">▸</span>
              <span className="text-gray-700 dark:text-gray-300">{t('tradingExperience')}</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">▸</span>
              <span className="text-gray-700 dark:text-gray-300">{t('retailExperience')}</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">▸</span>
              <span className="text-gray-700 dark:text-gray-300">{t('bankingExperience')}</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">▸</span>
              <span className="text-gray-700 dark:text-gray-300">{t('cryptoExperience')}</span>
            </li>
          </ul>
        </section>

        {/* 50세, 개발자로의 전환 */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">{t('transformationTitle')}</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {t('transformationContent')}
          </p>
        </section>

        {/* 비즈니스 경험이 만든 개발자의 강점 */}
        <section className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">{t('strengthsTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{t('strengthBusiness')}</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{t('strengthProblem')}</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{t('strengthGlobal')}</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{t('strengthPersistence')}</p>
            </div>
          </div>
        </section>

        {/* 개발 철학 */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">{t('philosophyTitle')}</h2>
          <blockquote className="text-xl italic text-gray-600 dark:text-gray-400 border-l-4 border-blue-500 pl-6 py-2">
            {t('philosophyContent')}
          </blockquote>
        </section>

        {/* 나의 다짐 */}
        <section className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">{t('commitmentTitle')}</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {t('commitmentContent')}
          </p>
        </section>

        {/* 기술 스택 */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">{t('techStackTitle')}</h2>
          <div className="flex flex-wrap gap-4">
            {techStack.map((tech) => (
              <div key={tech} className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow">
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* 이력서 다운로드 */}
        <section className="text-center pt-8">
          <a
            href={locale === 'en' ? '/resume-en.html' : locale === 'ja' ? '/resume-ja.html' : '/resume.html'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            {t('downloadResume')}
          </a>
        </section>
      </div>
    </div>
  );
}