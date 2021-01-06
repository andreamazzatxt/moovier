import style from './Window.module.css'
import {weekly} from '../api';
import { useEffect, useState } from 'react';
import Tile from './Tile';
function Window(props) {
    const [week,setWeek] = useState([])
    useEffect(()=>{
        async function fetch(){
            let resp = await  weekly();
       setWeek(resp); 
        }
        fetch();
    },[])
    
    return(
        <div>
            <span className={style.title}>Weekly Most Rated</span>
            <div id={style.rated} className = {style.carrousel}>
                {
                    week.map(element =>{
                        return <Tile data = {element}/>
                    })
                }
            </div>
        </div>
    )
}

export default Window