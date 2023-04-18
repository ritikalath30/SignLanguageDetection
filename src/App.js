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
import VideoRecorder from "./components/VideoRecorder";
import AudioRecorder from "./components/AudioRecorder";
import CameraComponent from "./components/CameraComponent";
import Navbar from "./components/Navbar";
import Example  from "./components/Example";



const App = () => {
    let [recordOption, setRecordOption] = useState("");
    const toggleRecordOption = (type) => {
        return () => {
            setRecordOption(type);
        };
    };
    
    return (
        <>
            <div className="container">
                <Navbar/>
                <div className="main">
                    <h1 className="item">Sign language Detection</h1>
                </div>
                <Example />
                <div className="item2">
                    <CameraComponent/>
                </div>
                
            </div>
            
                
            
        </>
    );
};
export default App;