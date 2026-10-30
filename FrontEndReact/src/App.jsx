import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState([])
  const [loader,setLoader] = useState(false)
  const [error,setError] = useState("")


  useEffect(()=>{

    let ignore = false;
    const load=async()=>{
      setLoader(true);setError("") 
    
    try{
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      console.log(res,"Response Fetched")
      if(res.ok || res.status==200){
        const data = await res.json();
        console.log(data,"data");
        setUser(data)

      }
      else{
        throw new Error(`Status ${err.status}`)
      }
    }
    catch(e){
      throw new Error(`Status ${err.status}`)

    }
    finally{
      if(!ignore) setLoader(false)
    
    }
  }
  load();
  return()=>{
    ignore=true;
  }

  },[])
  return (
    <main className="container">
      {loader ? (
        <p>Page is Loading</p>
      ) : (
        <>
          <header>User Listed Below:</header>
          {user?.map((element, index) => (
            <div className="userCard" key={index}>
              <center>ID:{element.id}</center>
              <center>Address: {element.address.street}, {element.address.suite}, {element.address.city}, {element.address.zipcode}</center>
              <center>Phone: {element.phone}</center>
              <center>Website: {element.website}</center>
              <center>Company: {element.company.name}, {element.company.catchPhrase}, {element.company.bs}</center>
            </div>
          ))}
        </>
      )}
    </main>
  )
}
//   const [count, setCount] = useState(0)
//   const [buttonValue, setButtonValue] = useState()
//   const a = 18
//   const b = 5

//   const add = () => {
//     setButtonValue('add')
//     setCount(a + b)
//   }

//   const subtract = () => {
//     setButtonValue('sub')
//     setCount(a - b)
//   }

//   const multiply = () => {
//     setButtonValue('multi')
//     setCount(a * b)
//   }

//   const divide = () => {
//     setButtonValue('div')
//     setCount(a / b)
//   }

//   const getContainerClass = (value) => {
//     switch (value) {
//       case 'add':
//         return 'addContainer';
//       case 'sub':
//         return 'subContainer';
//       case 'multi':
//         return 'multiContainer';
//       case 'div':
//         return 'divContainer';
//       default:
//         return 'defaultContainer';
//     }
//   }

//   return (
//     <>
//       <h1>Basic Calculator</h1>
//       <label className={getContainerClass(buttonValue)}>
//         Value:A = 18, B = 5 <br />{count}
//       </label>
//       <button id='addbutton' onClick={add}>Add</button>
//       <button id='subbutton' onClick={subtract}>Sub</button>
//       <button id='multiButton' onClick={multiply}>Multiply</button> 
//       <button id='divButton' onClick={divide}>Divide</button> 
//     </>
//   )
// }

export default App