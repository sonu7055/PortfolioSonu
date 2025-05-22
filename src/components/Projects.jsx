import Tilt from 'react-parallax-tilt';

function Project() {
  return (
    <main className="p-8">
      <div className="text-center text-3xl font-bold mb-8">
        <h1>Projects</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {[
          {
            title: 'Zentry Clone',
            desc: 'A sleek and minimal landing page built with React and Tailwind CSS. Inspired by Zentry’s design, focused on clean UI and smooth transitions.',
          },
          {
            title: 'EnhanceIt',
            desc: 'An AI-powered enhancement tool with a beautiful UI, built using OpenAI, Tailwind, and React.',
          },
          {
            title: 'Code Reviewer',
            desc: 'A code review automation tool that helps developers improve quality before pushing to Git.',
          },
        ].map((project, index) => (
          <Tilt
            key={index}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.05}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            className="bg-white rounded-xl shadow-lg w-80 p-6"
          >
            <h2 className="text-xl font-bold text-purple-700">{project.title}</h2>
            <p className="mt-2 text-gray-600 text-sm">{project.desc}</p>
          </Tilt>
        ))}
      </div>
    </main>
  );
}

export default Project;
