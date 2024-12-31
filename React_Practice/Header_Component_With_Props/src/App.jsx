import { useState } from "react"


function App(){

  return (
    <>
      <HeaderWithButton />
      <Header title="My Name Is Parth2"/>
      <Header title="My Name Is Parth3"/>
      <Header title="My Name Is Parth4"/>
      <Header title="My Name Is Parth4"/>
    </>
  )
}
  function HeaderWithButton(){ 
    const [title, setTitle] = useState("My Name Is Parth");
    function updateTitle(){
      setTitle("My Name Is " + Math.random());
    }
      return <div>
        <button onClick={updateTitle}>Change the Title</button>
        <Header title={title}></Header>
      </div>
   }
  function Header({title}){
    return <div>
      {title}
    </div>
  }


export default App
