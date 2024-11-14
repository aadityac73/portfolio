import React from "react";

const Profile = () => {
  return (
    <section
      className="flex justify-center gap-[5rem] h-[80vh] pt-[4vh] mx-[10rem] box-border min-h-fit"
      id="profile"
    >
      <div className="w-[400px] h-[400px] flex my-auto">
        <img
          className="w-[400px] h-[400px] rounded-full"
          src="/assets/pic.jpeg"
          alt="Aditya Profile Picture"
        />
      </div>
      <div className="self-center text-center">
        <p className="font-semibold text-lg text-[#555555]">Hello, I'm</p>
        <h2 className="text-[3rem] font-semibold">Aditya Chavan</h2>
        <p className="text-[28px] text-[#555555] font-semibold mb-[1rem]">
          MERN Stack Developer
        </p>
        <div className="flex justify-center gap-[1rem]">
          <a
            href="/assets/Aditya_Resume.pdf"
            target="_blank"
            className="text-sm w-[8rem] px-[1rem] py-[.7rem] font-semibold rounded-[2rem] border-2 border-black hover:bg-[#000] hover:text-[#fff]"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="text-sm w-[8rem] px-[1rem] py-[.7rem] text-[#fff] bg-[#353535] font-semibold rounded-[2rem] border-2 border-black hover:bg-[#000] hover:text-[#fff]"
          >
            Contact Info
          </a>
        </div>
        <div className="flex justify-center mt-[1rem] gap-[1rem]">
          <a target="_blank" href="https://www.linkedin.com/in/aadityac73">
            <img
              className="h-[2rem]"
              src="/assets/linkedin.png"
              alt="Linkedin"
            />
          </a>
          <a target="_blank" href="https://github.com/aadityac73">
            <img className="h-[2rem]" src="/assets/github.png" alt="Github" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
