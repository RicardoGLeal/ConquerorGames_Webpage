// import * as React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import img from '../../images/team/team.jpeg'
import React from 'react'

// function Example() {
//   const [lastYPos, setLastYPos] = React.useState(0);
//   const [shouldShowAnimation] = React.useState(false);
//   // console.log("Hola");
//   React.useEffect(() => {
//     function handleScroll() {
//       console.log("scrolled");
//       const yPos = window.scrollY;
//       if(yPos < 100)
//       {
//         setLastYPos(yPos*.01);
//       }
//     }
//     window.addEventListener('scroll', handleScroll, false);

//     return () => {
//       window.removeEventListener('scroll', handleScroll, false);
//     }
//   }, [lastYPos]);
//   return (
//     <div className="wrapper">
//       <motion.div
//         className="image"
//          style={{
//           //  scale
//          }}
//       >
//         <motion.img src={img}
//           className="item"
//           style={{
//             scaleY: lastYPos
//           }}
//         />
//       </motion.div>
//     </div>
//   )
// }


const Example = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  console.log("Hola");
  return (
      <div className="wrapper">
        <motion.div
          className="image"
           style={{
             scale
           }}
        >
        <motion.img src={img}
            className="item"
            style={{
              scaleY: scrollYProgress
            }}
          />
          
        </motion.div>
      </div>
  )
}
export default Example;
