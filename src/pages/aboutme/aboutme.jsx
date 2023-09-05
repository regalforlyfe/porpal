import React from "react";
import MainLayout from "../../components/mainlayout/mainlayout";

const AboutMe = () => {
  return (
    <div className="lg:pt-20">
      <MainLayout
        subtitle="AHMAD RIFAL"
        title="As Frontend Developer."
        desc="I am a highly competent IT Web Developer with a proven track record in designing UI, create web system as fullstack developer and managing databases. I have strong technical skills and communicate very well. I am eager to be challenged in order to grow and further improve my IT skills."
        image={"/assets/image/developer2.jpg"}
      />
    </div>
  );
};

export default AboutMe;
