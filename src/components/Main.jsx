import { TypeAnimation } from "react-type-animation";
import {FaFacebook, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src="/images/main_image.jpg"
        alt="image_main"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/70">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg: items-start items-center z-20">
          <h1 className="sm:text-2xl text-4xl font-bold ">Hi there! I am Mamta Nidhi Kachhap.</h1>
          <h2 className="flex sm:text-2xl text-2xl pt-4 font-bold">
            I am a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Software Developer.",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "tech-enthusiast.",
                1000,
                "Web developer.",
                1000,
                "Graphics Designer.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1.2em", paddingLeft:"5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-center gap-11 pt-6 max-w-[500px] w-full">
           
            <FaLinkedinIn size={25}/>
            <FaFacebook size={25}/>
            <FaInstagram size={25}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
