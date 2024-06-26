import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("tan");

  return (
  
     <div   className="w-full h-screen duration-200"
     style={{ backgroundColor: color }}>

<div  className="fixed flex flex-weap justify-center bottom-12 inset-x-0 px-2">
  <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-2 py-1 rounded-lg">

  <button onClick={()=> setColor("red")} className="outline-none px-4 py-1 rounded-full text-white  shadow-lg" style={{backgroundColor: "red"}}>
    Red</button>
  <button onClick={()=> setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white  shadow-lg" style={{backgroundColor: "blue"}}>
    Blue</button>
  <button onClick={()=> setColor("green")}  className="outline-none px-4 py-1 rounded-full text-white  shadow-lg" style={{backgroundColor: "green"}}>
    Green</button>
  <button onClick={()=> setColor("black")}  className="outline-none px-4 py-1 rounded-full text-white  shadow-lg" style={{backgroundColor: "black"}}>
    Black</button>
  <button onClick={()=> setColor("pink")}  className="outline-none px-4 py-1 rounded-full text-white  shadow-lg" style={{backgroundColor: "pink"}}>
    Pink</button>
  <button onClick={()=> setColor("orange")}  className="outline-none px-4 py-1 rounded-full text-white  shadow-lg" style={{backgroundColor: "orange"}}>
    orange</button>

  </div>
</div>
     </div>
  );
}

export default App;




//police color//

// import { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [colorIndex, setColorIndex] = useState(0);
//   const colors = ["red", "blue"];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setColorIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
//     }, 300);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full h-screen duration-200" style={{ backgroundColor: colors[colorIndex] }}>
//       <div className="fixed flex flex-weap justify-center bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-1 rounded-lg">
//           <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }}>
//             Red
//           </button>
//           <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "blue" }}>
//             Blue
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;








