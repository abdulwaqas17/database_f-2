import React, { useState } from "react";
import { database } from "../../services/firebase"; // IMPORT KR LIA GETDATABASE KO FIREBASE.JS K THROUGH
import { set , ref,get,child} from "firebase/database"; // SOME FUNCTIONIMPORT FROM "firebase/database"
import { useNavigate } from "react-router-dom";

const FormComponent = () => {

    const navigate = useNavigate();

    let [userID,setUserID] = useState(0); // FOR GIVE UNIQUE IN EVERY INSTANCE/ TO EVERY USER

    // const database = getDatabase(); [ager alag se call kren gy TO UPPER FIREBASE KO INITIALIZE BHI KRNA PARAY GA]
  
    // Push data to Realtime database 
    function Push() {
        // e.preventDafault()

        if(userData.fullName && userData.age && userData.country && userData.proffession && userData.education) {
          setUserID(userID += 1);
          console.log(userID);
    
          // for set data in real time database of firebase
          set(ref(database, 'users/' + userID), { //'users/' +(concatinate) userID ==> user k ander 1,2 
            
            userData
           
          }).then((e)=>{
    
            console.log(e);
            alert('Data Submit Successfully')
    
            // to get data from firebase
            get(child(ref(database), `users/${userID}`)).then((s) => {
                // console.log(s.val());
                let userInfo = s.val()
                console.log(userInfo);
                window.localStorage.setItem('userInfo',JSON.stringify(userInfo));
                navigate('/aboutme');
                
            })
    
           
    
          }).catch((c)=> {
            console.log(c);
    
            alert('Fill the details')
          })
    
        } else {
          alert('Kindly Fill all the details')
        }

     
    }
  

    function Get() {

        get(child(ref(database), 'users/2')).then((s) => {
            console.log(s.val());
        })
    }
    
    // userData object 
    const [userData,setUserData] = useState({
        fullName : '',
        age : '',
        education : '',
        proffession : '',
        country : '',
    })

    // handleForm
    const handleForm = (e)=>{
        setUserData({...userData,[e.target.name]:e.target.value});
    }
    console.log(userData);

    // Clear
    const Clear =()=>{
      setUserData(
        {
          fullName : '',
          age : '',
          education : '',
          proffession : '',
          country : '',
      }
      )
    }
  return (
  
      <div className="flex justify-center flex-col md:flex-row">
        {/* Left Side - Image */}
        <div className="w-full md:w-[50%] bg-blue-50 text-purple-950 md:h-[100vh] p-[20px] md:py-[30px] md:px-[50px] flex justify-center items-center flex-col text-center">
          <h1 className="md:text-5xl font-bold text-2xl">Create Your About Us</h1>
          <p className="md:text-[1rem] md:py-[30px] py-[10px] text-[.9rem]">This site utilizes advanced AI to generate a compelling and personalized About Us section for you. Simply provide your details, and let AI create a professional and engaging introduction effortlessly.</p>

          <div>
            <img src="https://www.playbookux.com/wp-content/uploads/2016/06/team.png" alt="" className="md:h-[400px]" />
          </div>
        </div>
        
        {/* Right Side - Form */}
        <div className="w-full md:w-[50%] md:h-[100vh] bg-white p-8">
          <h2 className="md:text-4xl text-2xl font-bold text-center">User Information</h2>
          <p className="md:text-xl text-[.9rem] text-center py-[10px]">Fill the all correct to get better response</p>
          <form>
            <div className="mb-4">
              <label className="block text-xl mb-[3px]">Full Name</label>
              <input onChange={handleForm} name="fullName" value={userData.fullName} type="text" className="w-full p-2 border rounded" placeholder="Enter your name" />
            </div>
            <div className="mb-4">
              <label className="block text-xl mb-[3px]">Age</label>
              <input onChange={handleForm} name="age" value={userData.age} type="number" className="w-full p-2 border rounded" placeholder="Enter your age" />
            </div>
            <div className="mb-4">
              <label className="block text-xl mb-[3px]">Education</label>
              <input onChange={handleForm} name="education" value={userData.education} type="email" className="w-full p-2 border rounded" placeholder="Enter your Education" />
            </div>
            <div className="mb-4">
              <label className="block text-xl mb-[3px]">Proffession</label>
              <input onChange={handleForm} name="proffession" value={userData.proffession} type="email" className="w-full p-2 border rounded" placeholder="Enter your Proffession" />
            </div>
            <div className="mb-4">
              <label className="block text-xl mb-[3px]">Country</label>
              <input onChange={handleForm} name="country" value={userData.country} type="email" className="w-full p-2 border rounded" placeholder="Enter your Country" />
            </div>

            <div className="flex justify-center items-center gap-[40px] md:gap-[70px]">

            <button type="button" onClick={Push} className="md:text-xl cursor-pointer bg-purple-950 transition-all text-white px-[16px] py-[5px] md:px-[25px] md:py-[7px] rounded hover:bg-white hover:border-[2px] hover:border-purple-950  hover:text-black " >
              Submit
            </button>

            <button type="button" onClick={Clear} className="md:text-xl cursor-pointer border-purple-950 border-[2px] transition-all  px-[16px] py-[5px] md:px-[25px] md:py-[7px] rounded hover:bg-purple-950  hover:text-white">
            Clear
            </button>

            </div>
         
           
         
          </form>
        </div>
      </div>
   
  );
};

export default FormComponent;
