import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import app from "./services/firebase";
// import {set,ref } from "firebase/database";
// import {database} from "./services/firebase";
import FormComponent from "./components/FormPage";
// import { db } from './services/firebase'
// import database from "./firebase";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import About from "./components/AboutMe/about";
function App() {
  // const [data, setData] = useState([]);
  // const [userID,setUserID] = useState(1);

  // function Push() {
  //   setUserID(userID+=1);
  //   console.log(userID);
  //   // const db = getDatabase();
  //   set(ref(database, 'users/' + userID), {
  //     username: 'john',
  //     email: 'gmail.com',
     
  //   });
  // }

  // useEffect(() => {
  //   // Initialize the Firebase database with the provided configuration
  //   const database = getDatabase(app);

  //   // Reference to the specific collection in the database
  //   const collectionRef = ref(database, "your_collection");

  //   // Function to fetch data from the database
  //   const fetchData = () => {
  //     // Listen for changes in the collection
  //     onValue(collectionRef, (snapshot) => {
  //       const dataItem = snapshot.val();

  //       // Check if dataItem exists
  //       if (dataItem) {
  //         // Convert the object values into an array
  //         const displayItem = Object.values(dataItem);
  //         setData(displayItem);
  //       }
  //     });
  //   };

  //   // Fetch data when the component mounts
  //   fetchData();
  // }, []);

  // console.log(data);

  // const user = {
  //   fName : 'jonh',
  //   lName : 'son',
  //   age : 54,
  //   profession : 'developer',
  //   disc : 'i am a web developer'
  // }

  // firebase
  //   .database()
  //   .ref("notes")
  //   .push({
  //       title: "Working",
  //       body: "This is to check the Integration is working",
  //   });

  // Push Function
//   const Push = () => {
//     console.log('push');
//     database.ref("user").set({
//       name: user.fName,
//       age: user.age,
//     }).catch(alert);
// }

// database.ref("user").set({
//   name: user.fName,
//   age: user.age,
// }).catch(alert);

  // db.ref('user').set(
  //   user
  // ).catch(alert)

  return (
    <div>
      {/* <button onClick={Push}>Click</button> */}
      {/* <FormComponent /> */}
      {/* <div>
        <button onClick={Push}>Push</button>
        <h1>Data from database:</h1>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div> */}
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<FormComponent/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
