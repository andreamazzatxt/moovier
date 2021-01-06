import {fetching} from './api'
import {useSpring, animated} from 'react-spring'
import React, {  useEffect, useRef, useState } from 'react';
import './App.css';
import Tile from './components/Tile'
import SavedBubble from './components/SavedBubble';
import { saveList } from './components/saveList';
import Window from './components/Window';

function App() {

 const [input,setInput] = useState('')
 const [response,setResponse] = useState([]) ;
 const [toggle,setToggle] = useState(false) ;
 const [list,setList] = useState([])
 const contentRef = useRef();

  
  const handleClick = async (event) =>{
    event.preventDefault();
    if(input){
    let resp = await fetching(input);
    setResponse(resp);
    setToggle(true);
    contentRef.current.scrollIntoView({behavior:'smooth'})

    }
  }
  const springLoad = useSpring({
    opacity : 1,
    from: {
        opacity:0.5,
    }
})

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
                    <input placeholder='  Search...'className={'input'} type='text' onChange={(element)=>{setInput(element.target.value)}}></input>
                    <button className={'buttonSearch'} onClick={handleClick}>SEARCH</button>
                  </form>
                
                <div ref={contentRef} className={'content'}>
                    { toggle && response.map(element=>{
                      return (
                        <div>
                          <Tile  data ={element}/>
                          </div>
                      )
                    }) }  
                </div>
    
   
       <Window />
    
    </div>
         
    </saveList.Provider>
   
  );
}

export default App;
