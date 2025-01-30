import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="">
      <div className="flex-1 space-y-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
          Hi, I'm <span className="text-emerald-600">Prabesh Dangi</span> 👋
        </h1>
        <h2 className="text-2xl md:text-3xl text-slate-700 font-medium">
          Backend Developer
        </h2>
        <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
          <p className="">
            I'm a backend developer with a passion for building scalable and
            efficient systems. I'm a quick learner and I'm always looking to
            expand my skills.
          </p>
          <p>
            I'm currently working as a backend developer at{" "}
            <Link
              to="https://aitc.ai/"
              target="_blank"
              className="text-emerald-600"
            >
              AITC{" "}
              <img
                src="https://aitc.ai/logo.png"
                alt="AITC"
                className="w-12 h-12 inline-flex items-center justify-center"
              />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
