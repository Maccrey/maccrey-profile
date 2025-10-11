import {getTranslations} from 'next-intl/server';

export default async function AboutPage() {
  const t = await getTranslations('AboutPage');
  const techStack = ["Dart", "Python", "Firebase", "Supabase", "Cloudflare", "Next.js", "n8n", "Flutter"];

  return (
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <h1 className="text-4xl font-bold text-center mb-16">{t('title')}</h1>
      <div className="max-w-3xl mx-auto space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-400">{t('storyTitle')}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {t('storyContent')}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-400">{t('philosophyTitle')}</h2>
          <blockquote className="text-xl italic text-gray-400 border-l-4 border-blue-500 pl-4">
            {t('philosophyContent')}
          </blockquote>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-400">{t('techStackTitle')}</h2>
          <div className="flex flex-wrap gap-4">
            {techStack.map((tech) => (
              <div key={tech} className="bg-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                {tech}
              </div>
            ))}
          </div>
        </section>

        <section className="text-center pt-8">
          <a
            href="/resume.pdf" // TODO: Add resume.pdf to /public folder
            download
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-lg font-medium transition-colors"
          >
            {t('downloadResume')}
          </a>
        </section>
      </div>
    </div>
  );
}