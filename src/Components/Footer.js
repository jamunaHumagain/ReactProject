import React from "react";
import { GrGithub, GrLinkedinOption } from "react-icons/gr";

import { BiSolidPhoneCall } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
const Footer = () => {
  return (
    <div>
      <div className="w-screen bg-black flex flex-row justify-around items-center p-2">
        <a
          href="https://np.linkedin.com/in/jamuna-humagain-3aa69525a?trk=public_profile_browsemap"
          target="blank"
          className="flex items-center text-lg text-violet-300 hover:text-white"
        >
          <div className="h-[30px] w-[40px] rounded-full flex justify-center items-center bg-violet-400">
            <GrLinkedinOption className="text-white" />
          </div>
          <span className="ml-1 mt-[0.1rem]">Jamuna</span>
        </a>
        <a
          href="jamunahumagai01@gmail.com"
          target="blank"
          className="flex items-center text-lg text-violet-300 hover:text-white"
        >
          <div className="h-[30px] w-[40px] rounded-full flex justify-center items-center bg-violet-400">
            <GrMail className="text-white" />
          </div>
          <span className="ml-1 mt-[0.1rem]">jamunahumagai01@gmail.com</span>
        </a>
        <a
          href="//"
          target="blank"
          className="flex items-center text-lg text-violet-300 hover:text-white"
        >
          <div className="h-[30px] w-[40px] rounded-full flex justify-center items-center bg-violet-400">
            <BiSolidPhoneCall className="text-white" />
          </div>
          <span className="ml-1 mt-[0.1rem]">9867057113</span>
        </a>
        <a
          href="https://github.com/jamunaHumagain"
          target="blank"
          className="flex items-center text-lg text-violet-300 hover:text-white"
        >
          <div className="h-[30px] w-[40px] rounded-full flex justify-center items-center bg-violet-400">
            <GrGithub className="text-white" />
          </div>
          <span className="ml-1 mt-[0.1rem]">Jamuna</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
