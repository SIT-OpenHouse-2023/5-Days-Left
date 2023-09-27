// <<<<<<< HEAD
// import Container from "../components/Container";

// function HomeView() {
//     return (
//         <Container>
//             <p>Hello น้องซัน</p>
//             <div className="bg-[#D9D9D9] rounded-lg p-4">
//                 <span>prefix firstname lastname</span>
//                 <span>school</span>
//             </div>
//             <div>
//                 <p>Agenda</p>
//                 <div></div>
//             </div>
//             <div>
//                 <p>Activity</p>
//                 <button>button</button>
//             </div>
//             <div>
//                 <p>Activity</p>
//                 <button>button</button>
//             </div>
//         </Container>
//     );
// =======
import React from "react";
import { textHeader } from "../types/colors";

function HomeView() {
  const divStyle = {
    color: textHeader,
  };
  return <div style={divStyle}>Hi</div>;
}

export default HomeView;
