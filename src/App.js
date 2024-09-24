import React from 'react'
import { useState } from 'react'
import TenzesGame from './Gaming/TenzesGame'
function App() {

  const [darkMode,setDarkMode] = useState(true)
   function handelDarkmode(){
    setDarkMode(prev => !prev)
   }

  return (
    <div style={{ alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
      <TenzesGame />
      

    </div>
  )
}

export default App



// const [contact,setContact] = useState({
//   firstName:"Jhon",
//   lastName:"Doe",
//   phone:"+ (179) 155486",
//   isFavorate:false
// })

// function handlerimg(){
//   setContact(prev=>
//     ({...prev,
//     isFavorate:!prev.isFavorate,})
//   )
// }
// let starephone = contact.isFavorate?contact.phone:"none"
// <div className='card' style={
//     {
//       width:"250px",
//       paddingTop:"20px"
//     }
//       }>
//        <div className='card-badg' style={{textAlign:"center"}}>
//         <img onClick={handlerimg} className='img-card' src={photo} width="200px" style={{borderRadius:"20px"}}/></div>
//         <div className='card-stats'>
//           <div className='ditails'>
//             <img src={phot7} width="40px" alt="1" />
//             <span>{contact.firstName}</span>
//             <p>{contact.lastName}</p>
//             <p>{starephone}</p>
//           </div>

//           <p>dis </p>
//          <p>pric : Form </p>
//         </div>
//       </div>