import { useState, useEffect } from "react";
import { db } from "./firebase-config"
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore"
import { async } from "@firebase/util";
import img13  from "../src/imagews/pexels-photo-3817672.webp"
import "../src/App.css"

function App() {
  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState(0)
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, "users")



const createUser = async () =>{
await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) })
}

const updateUser = async (id, age) => {
  const userDoc = doc(db, "users", id )
const newFields = {age: age + 1}
await updateDoc(userDoc, newFields)

}

const deleteUser = async (id) => {
  const userDoc = doc(db, "users", id )
  await deleteDoc(userDoc)


}
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getUsers()
  }, [])





  return (

    <>
      <div className="mygo">
        <div className="mtt">
        <div className="lolo">
        <div className="lll">
        <div className="love">
        <input className="fff" type="text" 
        placeholder="Name..."  
        onChange={(e) => { setNewName(e.target.value)
          
        }}/>
        <input className="fff" type="number"
         placeholder="Age" 
         onChange={(e) => { setNewAge(e.target.value)
         }}/>
       

       <div className="popo">
       <button className="lovers" onClick={createUser}> Create User</button>
       </div>

        {users.map((user) => {

          return <div className="daddy">
            <h3>Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>
            
<div className="nre">
<button className="lover" onClick={() => {updateUser(user.id, user.age) }}> 
            {" "}
            
            Increase Age
            </button>
            <button className="lover" onClick={() => {deleteUser(user.id)}}>
              Delete User
            </button>
</div>

          </div>

        })}
      </div>
        </div>
      </div>

<div className="imhhh">


<img className="oiuy" src={img13} alt=""/>


</div>
        </div>
      </div>

    </>
  )
}

export default App;
