import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AddReparation from './AddReparation';

const API_URL ="http://localhost:3000/api/v1/matricules";
function getAPIDATA(){
  return axios.get(API_URL).then((response)=> response.data);
}

function Reparation() {
const [matricules,setMatricules] = useState([]);
  useEffect(()=>{
      let mounted = true ;
      getAPIDATA().then((items)=>{
        if(mounted){
          setMatricules(items);
        }
      });
      return ()=> {mounted=false}  ;
  },[]);
  return (
    <div>
    <AddReparation
   
    />
    </div>
  )
}

export default Reparation;