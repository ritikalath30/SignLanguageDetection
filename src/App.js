// import Camera from './components/Camera';
// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [start, setStart] = useState(false);
//   function startCam() {
//     setStart(true)
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1> Sign Language Detection</h1>
//         <button onClick={startCam}>Start Camera</button>
//       </header>
//       <div>
//       <body>
//         <div>
//             {start ? <Camera /> : ''}
//         </div>
//         </body>
//       </div>
//     </div>
//   );
// }

// export default App;
import "./App.css";
import { useState, useRef } from "react";
import CameraComponent from "./components/CameraComponent";
import Navbar from "./components/Navbar";
import Example from "./components/Example";
import Grid from "./components/Grid";
import img1 from "./images/img1.jpg";


const App = () => {
    let [recordOption, setRecordOption] = useState("");
    const toggleRecordOption = (type) => {
        return () => {
            setRecordOption(type);
        };
    };

    return (

        <div style={{backgroundColor:"#EEFAFF"}}>
            <div className="item">
                <h1 className="t1">Real Time American Sign Language</h1>
                
            </div>
            <div className="para">
                <h1 className="para1">What is Sign Language?</h1>
                <p className="para2"> Sign languages are visual languages that use hand, facial and body movements as a means of communication.
                    Sign language is commonly used as the main form of communication for people who are Deaf or hard of hearing.
                    There are over 135 different sign languages all around the world including American Sign Language (ASL), Australian Sign Language (Auslan) and British Sign Language (BSL). 
                </p>
            </div>
            <div className="item2">
                <h1 className="t2">Few sign gestures</h1>
                <Example />
            </div>
            <h1 className="t3">
                Try different signs to see what it means
            </h1>
            <div className="item3">
                <CameraComponent />
            </div>
        </div>




    );
};
export default App;