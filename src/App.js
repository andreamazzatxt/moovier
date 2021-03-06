import {fetching} from './api'
import React, {  useEffect, useRef, useState } from 'react';
import './App.css';
import Tile from './components/Tile'
import SavedBubble from './components/SavedBubble';
import { saveList } from './components/saveList';
import Window from './components/Window';
import { motion } from "framer-motion";


const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

function App() {

 const [input,setInput] = useState('')
 const [response,setResponse] = useState([]) ;
 const [toggle,setToggle] = useState(false) ;
 const [list,setList] = useState([])
 const contentRef = useRef();
 const inputRef = useRef();

  
  const handleClick = async (event) =>{
    setToggle(false)
    event.preventDefault();
    if(input){
    let resp = await fetching(input);
    setResponse(resp);
    if(resp.length === 0){
      inputRef.current.style.borderColor = 'red'
      console.log('red')
    }else{
      setToggle(true);
    }
    
    }
  }

  const handleChange = (element) =>{
    inputRef.current.style.borderColor = 'white'
    setInput(element.target.value)
  }


  useEffect(()=>{
    let data = localStorage.getItem('fav');
    data = data ? JSON.parse(data) : [];
    setList(data)
  },[]) 

  return (
    <saveList.Provider value={{list,setList}}>
 <div id = "App" className="App">
      <SavedBubble />
          <form className = {'header'} onSubmit={handleClick}>
                    <img alt ='logo' className='logoHead'src='./logo512.png'></img>
                    <div ref={inputRef}className={'inputBox'}>
                      <i id='iconMag' className="fas fa-search"></i>
                      <input className='input' type='text' onChange={handleChange}></input>
                      </div>
                 </form>
                
                {toggle 
                 && <motion.div 
                 variants={container}
                 initial="hidden"
                 animate="visible"
                ref={contentRef} className={'content'}>
                    { toggle && response.map(element=>{
                      return (
                         element.avatarImg && <motion.div
                         key={element.id+'search'}
                          variants={item}>
                          <Tile data ={element}/>
                          </motion.div>
                      )
                    }) }  
                </motion.div>}
    
   
        <Window />
    
    </div>
         
    </saveList.Provider>
   
  );
}

export default App;
