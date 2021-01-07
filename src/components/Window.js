import style from './Window.module.css'
import {tvWeekly, weekly} from '../api';
import { useEffect, useState } from 'react';
import Tile from './Tile';
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
function Window(props) {
    const [week,setWeek] = useState([])
    const [tvWeek,setTvWeek] = useState([])
    useEffect(()=>{
        async function fetch(){
            let resp = await  weekly();
       setWeek(resp); 
        }
        fetch();
    },[])
    useEffect(()=>{
      async function fetch(){
          let resp = await  tvWeekly();
     setTvWeek(resp); 
      }
      fetch();
  },[])
    
    return(
        <div className={style.window}>
            <span className={style.title}>Weekly trending Movies</span>
            <motion.div 
            variants={container}
            initial="hidden"
            animate="visible"
            id={style.rated} className = {style.carrousel}>
                {
                    week.map(element =>{
                        return(
                            <motion.div
                            key={element.id+"tile"}
                            variants={item}>
                                <Tile data = {element}/>
                            </motion.div>
                            )    
                    })
                }
            </motion.div>
            <span className={style.title}>Weekly trending Series</span>
            <motion.div 
            variants={container}
            initial="hidden"
            animate="visible"
            id={style.rated} className = {style.carrousel}>
                {
                    tvWeek.map(element =>{
                        return(
                            <motion.div
                            key={element.id+"tile"}
                            variants={item}>
                                <Tile data = {element}/>
                            </motion.div>
                            )    
                    })
                }
            </motion.div>
        </div>
    )
}

export default Window