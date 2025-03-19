// import React, { useEffect, useState } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const AboutMe = () => {
//   const [userData, setUserData] = useState(
//     JSON.parse(window.localStorage.getItem("userInfo"))
//   );
//   const [userAbout, setUserAbout] = useState(null);

//   const genAI = new GoogleGenerativeAI(import.meta.env.VITE_APP_GEMINI_KEY);

//   useEffect(() => {
//     const getResponseForGivenPrompt = async () => {
//       try {
//         const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//         const result = await model.generateContent(
//           `Using these details ${userData.userData.fullName}, ${userData.userData.country}, ${userData.userData.proffession}, ${userData.userData.education}, ${userData.userData.age}, write an engaging About Me in 100 words.`
//         );

//         const response = result.response;
//         const text = await response.text();
//         setUserAbout(text);
//       } catch (error) {
//         console.log("Something Went Wrong");
//         setUserAbout("An error occurred while fetching AI-generated content.");
//       }
//     };

//     getResponseForGivenPrompt();
//   }, []);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-blue-400 to-sky-300 p-6">
//       <div className="bg-white bg-opacity-90 shadow-xl rounded-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
//         {/* Left Side - Image */}
//         <div className="w-full md:w-[40%] h-[400px] bg-center bg-cover bg-[url(https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-622.jpg)]"></div>

//         {/* Right Side - About Content */}
//         <div className="w-full md:w-[60%] p-6 md:p-10 flex flex-col justify-center text-gray-800">
//           <h2 className="text-3xl font-extrabold text-gray-700 mb-4">About Me</h2>
//           <p className="text-gray-600 text-lg leading-relaxed mb-6">
//             {userAbout || "Generating AI-based About Me..."}
//           </p>
//           <button className="cursor-pointer bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transform transition-all duration-300">
//             Contact Me
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;

import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useNavigate } from "react-router-dom";

const AboutMe = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(
    JSON.parse(window.localStorage.getItem("userInfo"))
  );

  const [userAbout, setUserAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_APP_GEMINI_KEY);

  useEffect(() => {
    const getResponseForGivenPrompt = async () => {
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(
          `Using these details ${userData.userData.fullName}, ${userData.userData.country}, ${userData.userData.proffession}, ${userData.userData.education}, ${userData.userData.age}, write an engaging About Me section in 100 words.`
        );
        const response = result.response;
        const text = await response.text();
        setUserAbout(text);
        setLoading(false);
      } catch (error) {
        console.log("Something Went Wrong");
        setUserAbout("An error occurred while generating the About Me section.");
        setLoading(false);
      }
    };

    getResponseForGivenPrompt();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <nav className="w-full bg-purple-700 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-lg font-semibold">AI Generated About Me</h1>
        <button 
          onClick={() => navigate("/")}
          className="bg-white cursor-pointer text-purple-700 px-4 py-2 rounded-md shadow hover:bg-gray-200 transition-all"
        >
          Back to Form
        </button>
      </nav>

      <div className="flex items-center justify-center mt-10 md:p-6 p-[15px]">
        <div className="bg-white shadow-lg rounded-lg w-full md:w-[75%] flex flex-col md:flex-row items-center p-[20px] md:p-8 border border-gray-300">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/3 flex items-center justify-center">
            <img 
              src="https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-622.jpg" 
              alt="Profile" 
              className="rounded-lg w-[80%] h-auto object-cover shadow-md border border-gray-300" 
            />
          </div>

          {/* Right Side - About Content */}
          <div className="w-full md:w-2/3 md:p-6 p-[10px] text-center md:text-left">
            <h2 className="text-3xl font-bold text-purple-700 mb-4">About Me</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Hello, I am <span className="text-purple-600">{userData.userData.fullName}</span></h3>
            {loading ? (
              <p className="text-gray-500 italic animate-pulse">✨ Generating AI-based About Me...</p>
            ) : (
              <p className="text-gray-700 leading-relaxed md:p-4 p-[5px] md:text-[1rem] text-[.85rem] rounded-md shadow-sm">{userAbout}</p>
            )}
            <button className="mt-6 bg-purple-700 text-white px-5 py-2 rounded-md hover:bg-purple-800 transition-all duration-300 shadow-md">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;


