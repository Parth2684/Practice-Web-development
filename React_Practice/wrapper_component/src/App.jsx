import { useState } from 'react'


function App() {
  

  return (
    <>
     <CardWrapper>
        hi there
     </CardWrapper>
    </>
  )
}


function CardWrapper({children}){
  return <div style={{border: "2px solid black", padding: 20}}>
    {children}
  </div>
}

export default App
