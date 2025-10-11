export default function AboutPage() {
  const techStack = ["Dart", "Python", "Firebase", "Supabase", "Cloudflare", "Next.js", "n8n", "Flutter"];

  return (
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <h1 className="text-4xl font-bold text-center mb-16">About Me</h1>
      <div className="max-w-3xl mx-auto space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-400">My Story</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            50세에 새로운 도전을 시작한 늦깎이 개발자입니다. 
            호기심과 만드는 것에 대한 열정 하나로 시작해, 이제는 풀스택 개발자로 성장하고 있습니다. 
            Flutter로 앱을 만들고, Python과 n8n으로 비효율을 자동화하며, Next.js로 웹의 가능성을 탐험합니다.
            나이는 숫자에 불과하다는 것을 코드로 증명하고 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Philosophy</h2>
          <blockquote className="text-xl italic text-gray-400 border-l-4 border-blue-500 pl-4">
            “나는 효율적인 자동화와 사용자 경험 사이의 균형을 찾는 개발자다.”
          </blockquote>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Tech Stack</h2>
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
            Download Resume
          </a>
        </section>
      </div>
    </div>
  );
}