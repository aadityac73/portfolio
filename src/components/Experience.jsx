import React from "react";

const Experience = () => {
  return (
    <section
      className="h-[96vh] mt-[4vh] mx-[10rem] box-border min-h-fit"
      id="experience"
    >
      <p className="text-center text-[16px] text-[#555555]">Explore My</p>
      <h2 className="text-center text-[48px] font-semibold">Experience</h2>
      <div className="flex gap-[2rem] mt-[2rem]">
        <div className="flex-1 p-[2rem] border border-black rounded-[2rem]">
          <h2 className="text-[28px] text-[#555555] font-semibold text-center">Frontend Development</h2>
          <div>
            <article>
              <img className="h-[2rem]" src="/assets/checkmark.png" alt="Checkmark" />
              <h3>React</h3>
              <p>Experienced</p>
            </article>
          </div>
        </div>
        <div className="flex-1 p-[2rem] border border-black rounded-[2rem]">

        </div>
      </div>
    </section>
  );
};

export default Experience;
