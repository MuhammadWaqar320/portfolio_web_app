import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.jpg";
import Typewriter from "typewriter-effect";
import { ABOUT_ME_CONTENT } from "../../utils/constant";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Muhammad Waqar
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[var(--primary-color)] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Software Engineer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Fullstack Developer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Frontend Expert")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("MERN/MEAN Developer")
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
              options={{
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
              }}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            {ABOUT_ME_CONTENT}
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1_pLl2wjYVCU-wnqXIhjhYr0YC0SJXvwv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--btn-color)] inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              boxShadow:
                "0 0 2px var(--primary-color), 0 0 2px var(--primary-color), 0 0 40px var(--primary-color)",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-[var(--primary-color)] rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Muhammad Waqar"
              className="w-full h-full rounded-full object-cover custom-drop-shadow "
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
