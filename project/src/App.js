import  Axios from 'axios';
import { useState } from 'react';
export default function App(){
let [number,setCount]=useState([]);
let[count,setCount1]=useState("");
  const get1=async()=>{
    try{
      const res=await Axios.get('http://20.244.56.144/numbers/even');
      console.log(res.data);
      setCount([...res.data.numbers])
      setCount1("Even")
    }catch(err){
      console.log(err);
    }
  }
  const get2=async()=>{
    try{
      const res=await Axios.get('http://20.244.56.144/numbers/primes');
      console.log(res.data);
      setCount([...res.data.numbers])
      setCount1("Prime")
    }catch(err){
      console.log(err);
    }
  }
  const get3=async()=>{
    try{
      const res=await Axios.get('http://20.244.56.144/numbers/fibo');
      console.log(res.data);
      setCount([...res.data.numbers])
      setCount1("Fibonacci")
    }catch(err){
      console.log(err);
    }
  }
  const get4=async()=>{
    try{
      const res=await Axios.get('http://20.244.56.144/numbers/rand');
      console.log(res.data);
      setCount([...res.data.numbers])
      setCount1("Random")
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div>
      <div className='calc' style={{marginTop:80,marginLeft:600}}>
      <div style={{display:'flex',justifyContent:'center',backgroundColor:'green',width:300,height:80}}><p>Calculator</p></div>
      <div className='buttons' style={{gap:30,display:'flex',marginTop:10}}>
       <div ><button style={{height:50,width:50}} onClick={get1}>e</button></div> 
       <div><button style={{height:50,width:50}} onClick={get2}>p</button></div> 
       <div><button style={{height:50,width:50}}  onClick={get3}>f</button></div> 
       <div><button style={{height:50,width:50}} onClick={get4}>r</button></div> 
       </div>
       </div>
     <div style={{width:"100%",display:'flex',justifyContent:'center',marginTop:20}}><p>{count}</p></div> 
       <div style={{width:"100%",display:'flex',gap:20,justifyContent:'center',marginTop:50}}>{
         number.map(n=>{
        return (
          <div>{n}</div>
        )
      })
      }</div>
    </div>
         
  );
}

