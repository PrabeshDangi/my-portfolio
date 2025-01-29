import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="container mx-auto pt-32">
      <div className="px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
            Hi, I'm <span className="text-emerald-600">Prabesh</span> 👋
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-700 font-medium">
            Full Stack Developer
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            I'm passionate about building robust and scalable web applications.
            With expertise in both frontend and backend technologies, I create
            seamless digital experiences that solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
