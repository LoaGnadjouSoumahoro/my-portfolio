import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div>
      {" "}
      <div className="w-10/12 mx-auto">
        <h1 className="md:text-4 text-3xl lg:text-5xl font-bold">About me</h1>
        <div className="pt-6 text-neutral-300">
          <p>
            I am a passionate Front-End developer who started her journey in the
            world of web development several years ago. After taking a break, I
            decided to return to my first love: creating exceptional web
            experiences.
          </p>
          <br />
          <p>
            In a career transition, I have chosen to fully dedicate myself to
            Front-End development. Currently, I am enrolled in a specialized
            Front-End bootcamp where I have the opportunity to deepen my skills
            and explore the latest industry trends.
          </p>
          <br />

          <p>
            I am seeking an unpaid internship opportunity to apply my knowledge
            and contribute to innovative projects. This internship represents
            the perfect opportunity for me to solidify my skills and enhance my
            professional experience in a dynamic environment like yours.
          </p>
          <br />
          <p>
            I am confident that my dedication and passion for web development
            could be a valuable asset to your team. Feel free to review my
            attached CV to learn more about my background and skills.
          </p>
        </div>
        <div className="p-4 pl-0 mt-5 sm:mt-5">
          <a
            href="mailto:loagnadjou@gmail.com"
            className="px-4 py-[5px] whitespace-nowrap transition ease-in duration-150 bg-neutral-700 hover:bg-neutral-600 rounded-2xl border-[0.5px] border-[#363636]"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
