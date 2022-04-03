import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Card from "../card/Card"
import "./Users.css"


const Users = () => {
    const [users, setusers] = useState([]);

    const random = ()=>{
      axios.get("https://randomuser.me/api/")
        .then(({data})=>{
            // console.log(data.results)
            setusers(data.results)
            
        }) 
    }
    
    useEffect(() => {
      random();               
    }, [])

    const handleClick = () =>{
      random();
    }


  return (
    <div>
      
        {
          users.map((eleman,i) =>
            <div key={i}>            
              <Card user = {eleman} />
            </div>
          )
        }

        <button onClick={handleClick}>RANDOM USERS</button>
    </div>
  )
}

export default Users