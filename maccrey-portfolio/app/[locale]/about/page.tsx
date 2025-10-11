import {getTranslations, getLocale} from 'next-intl/server';

export default async function AboutPage() {
  const t = await getTranslations('AboutPage');
  const locale = await getLocale();
  const techStack = ["Dart", "Python", "Firebase", "Supabase", "Cloudflare", "Next.js", "n8n", "Flutter"];

  return (
    <div className="container mx-auto px-4 py-24 sm:py-32">
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
                <span className="text-2xl">💼</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{t('strengthBusiness')}</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{t('strengthProblem')}</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{t('strengthGlobal')}</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔥</span>
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