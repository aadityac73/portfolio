import React from "react";

const About = () => {
  return (
    <section
      className="h-[96vh] pt-[4vh] mx-[10rem] box-border min-h-fit"
      id="about"
    >
      <p className="text-center text-[16px] text-[#555555]">Get To Know More</p>
      <h2 className="text-center text-[48px] font-semibold">About Me</h2>
      <div className="flex gap-[4rem] h-[80%] mt-[2rem]">
        <div className="w-[400px] h-full flex">
          <img className="w-[400px] grayscale h-full max-w-[400px] rounded-[2rem] border-2 border-black" src="/assets/Aditya_PIC.jpg" alt="Aditya Profile Picture" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex gap-[2rem] mb-[2rem]">
            <div className="flex-1 rounded-[2rem] border border-black flex items-center flex-col p-[2rem]">
              <img className="h-[2rem]" src="/assets/experience.png" alt="Experience Icon" />
              <h3 className="text-[20px] mt-1 font-semibold">Experience</h3>
              <p className="text-center">
                3+ years <br /> MERN Stack Development
              </p>
            </div>
            <div className="flex-1 rounded-[2rem] border border-black flex items-center flex-col p-[2rem]">
              <img className="h-[2rem]" src="/assets/education.png" alt="Education Icon" />
              <h3 className="text-[20px] mt-1 font-semibold">Education</h3>
              <p className="text-center">
                B.E Computer Engineering <br /> Diploma in Computer Engineering
              </p>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
