import React, { useState } from "react";

const AboutMe = () => {
  const [userAbout, setUserAbout] = useState(
    JSON.parse(window.localStorage.getItem("userInfo"))
  );
  console.log(userAbout);
  console.log(userAbout.userData.fullName);

  return (
    <div className="flex items-center justify-center flex-col md:flex-row min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg w-full md:w-[75%] flex items-center justify-center flex-col md:flex-row">
        {/* Left Side - Image */}
        <div className="w-full h-[300px] md:h-[420px] md:w-1/2 bg-center bg-[url(https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-622.jpg)] bg-cover ">
        
        </div>

        {/* Right Side - About Content */}
        <div className="w-full md:w-1/2 p-[20px] md:p-8 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">About Me</h2>

          {/* {userAbout.fullName}{userAbout.age}{userAbout.email} */}

          <p className="text-gray-600 mb-4">
            {userAbout.userData.fullName} a {userAbout.userData.country} based {userAbout.userData.proffession}, is passionate about creating efficient and
            user-friendly applications. With a {userAbout.userData.education} education, he has
            self-learned and mastered various development skills, continuously
            adapting to new technologies. His problem-solving approach and
            dedication to learning make him a reliable professional in the
            field. <br />
            <br />
            At {userAbout.userData.age} years old, John takes pride in his work, striving to grow and
            contribute to the tech industry. His commitment to innovation and
            teamwork drives him to develop high-quality solutions. As a
            determined and skilled developer, he aims to make a lasting impact
            in the ever-evolving world of technology.
          </p>
          {/* <p className="text-gray-600 mb-4">
            With a strong foundation in frontend development, I continuously strive to enhance
            my skills and deliver high-quality web applications.
          </p> */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
