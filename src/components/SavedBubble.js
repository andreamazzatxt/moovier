import style from './SavedBubble.module.css'
import React, { useState, useEffect, useContext, useRef } from 'react';
import { saveList } from './saveList';


function SavedBubble(props) {
    const {list,setList} = useContext(saveList)
    const [toggle,setToggle] = useState(false);
    const bubbleRef = useRef();
    const counterRef = useRef();
    const handleOpen = () =>{ 
        setToggle(true)
    }
    const handleClose = () => {
        setToggle(false);
        console.log('Close')
    }
    const handleDelete = (event) =>{
        let temp = list.filter((element)=>{
            return parseInt(element.id) !== parseInt(event.target.id)
        })
        setList(temp)
        localStorage.setItem('fav',JSON.stringify(temp))
    }
    useEffect(()=>{
        bubbleRef.current.style.width = toggle ? '26rem'  :  '3rem'
        bubbleRef.current.style.height = toggle ? '20rem'  :  '3rem'
        bubbleRef.current.style.borderRadius = toggle ? '20px' : '50%'
        bubbleRef.current.style.margin = toggle ? '10px' : '';
        bubbleRef.current.style.top = toggle ? '50px' : '';
    },[toggle])

    

    return(
         <div ref={bubbleRef} className={style.bubble}>
            {
            !toggle 
            ? <div 
            ref={counterRef}style={props}onClick={handleOpen} className={style.counter}> {list.length}
            </div>
            : <div className={style.content}>
             <div className={style.header}>
             <span className={style.head}>Your Library</span>
             <img alt='close icon'onClick={handleClose} className={style.close} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0UyMUIxQjsiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0M0MDYwNjsiIGQ9Ik01MTAuMjgsMjg1LjMwNEwzNjcuOTEyLDE0Mi45MzZMMTUwLjI0OCwzNjguNjA4bDE0MC45MjgsMTQwLjkyOA0KCUM0MDYuMzUyLDQ5My42OTYsNDk3LjA1Niw0MDEuMjg4LDUxMC4yOCwyODUuMzA0eiIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0zNTQuMzc2LDM3MS41MzZjLTUuMTIsMC0xMC4yMzItMS45NTItMTQuMTQ0LTUuODU2TDE0Ni40MDgsMTcxLjg0OA0KCQljLTcuODE2LTcuODE2LTcuODE2LTIwLjQ3MiwwLTI4LjI4czIwLjQ3Mi03LjgxNiwyOC4yOCwwTDM2OC41MiwzMzcuNGM3LjgxNiw3LjgxNiw3LjgxNiwyMC40NzIsMCwyOC4yOA0KCQlDMzY0LjYwOCwzNjkuNTg0LDM1OS40OTYsMzcxLjUzNiwzNTQuMzc2LDM3MS41MzZ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0xNjAuNTQ0LDM3MS41MzZjLTUuMTIsMC0xMC4yMzItMS45NTItMTQuMTQ0LTUuODU2Yy03LjgxNi03LjgxNi03LjgxNi0yMC40NzIsMC0yOC4yOA0KCQlsMTkzLjgzMi0xOTMuODMyYzcuODE2LTcuODE2LDIwLjQ3Mi03LjgxNiwyOC4yOCwwczcuODE2LDIwLjQ3MiwwLDI4LjI4TDE3NC42ODgsMzY1LjY4DQoJCUMxNzAuNzg0LDM2OS41ODQsMTY1LjY2NCwzNzEuNTM2LDE2MC41NDQsMzcxLjUzNnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
             </div>
             
                {   
                    list.map((element)=>{
                        return(
                         <div key={element.id} className={style.miniTile}>
                             <img alt={element.title} className={style.img} src={element.avatarImg}></img>
                             <span className={style.title}>{element.title}</span> 
                             <img alt='delete icon'id={element.id} onClick={handleDelete} className={style.delete}src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAxNTAgMTUwIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PGNpcmNsZSBjeD0iNzUiIGN5PSI3NSIgZmlsbD0iIzAyOWJjNSIgcj0iNjQiLz48cGF0aCBkPSJtNTAuNCA1OC4zMXY0Ni44MWMwIDIuNDEgMTEgNC4zNiAyNC42IDQuMzZzMjQuNi0yIDI0LjYtNC4zNnYtNDYuODF6IiBmaWxsPSIjZTFlNmU5Ii8+PHBhdGggZD0ibTc1IDU0Yy0xMy41OCAwLTI0LjYgMi0yNC42IDQuMzZzMTEgNC4zNiAyNC42IDQuMzYgMjQuNi0yIDI0LjYtNC4zNi0xMS4wMi00LjM2LTI0LjYtNC4zNnoiIGZpbGw9IiNlYmYwZjMiLz48cGF0aCBkPSJtNDguMTkgNTEuMTV2Ny41N2MwIDIuNjIgMTIgNC43NSAyNi44MSA0Ljc1czI2LjgxLTIuMTMgMjYuODEtNC43NXYtNy41N3oiIGZpbGw9IiNkNWQ2ZGIiLz48cGF0aCBkPSJtNzUgNDYuMzljLTE0LjgxIDAtMjYuODEgMi4xMy0yNi44MSA0Ljc2czEyIDQuNzUgMjYuODEgNC43NSAyNi44MS0yLjEzIDI2LjgxLTQuNzUtMTItNC43Ni0yNi44MS00Ljc2eiIgZmlsbD0iI2ViZjBmMyIvPjxnIGZpbGw9IiNkNWQ2ZGIiPjxwYXRoIGQ9Im01OS43OCA2OC4zMWEyIDIgMCAwIDAgLTEuODQgMi4xOHYzMC4yM2ExLjg3IDEuODcgMCAxIDAgMy42OCAwdi0zMC4yM2EyIDIgMCAwIDAgLTEuODQtMi4xOHoiLz48cGF0aCBkPSJtNjkuOTMgNjguMzFhMiAyIDAgMCAwIC0xLjg0IDIuMTh2MzAuMjNhMS44NyAxLjg3IDAgMSAwIDMuNjggMHYtMzAuMjNhMiAyIDAgMCAwIC0xLjg0LTIuMTh6Ii8+PHBhdGggZD0ibTgwLjA3IDY4LjMxYTIgMiAwIDAgMCAtMS44NCAyLjE4djMwLjIzYTEuODcgMS44NyAwIDEgMCAzLjY4IDB2LTMwLjIzYTIgMiAwIDAgMCAtMS44NC0yLjE4eiIvPjxwYXRoIGQ9Im05MC4yMiA2OC4zMWEyIDIgMCAwIDAgLTEuODQgMi4xOHYzMC4yM2ExLjg3IDEuODcgMCAxIDAgMy42OCAwdi0zMC4yM2EyIDIgMCAwIDAgLTEuODQtMi4xOHoiLz48cGF0aCBkPSJtODQuNzEgNTAuNjZoLTMuNjJ2LTYuMmEuMzIuMzIgMCAwIDAgLS4zMi0uMzFoLTExLjU0YS4zMi4zMiAwIDAgMCAtLjMyLjMxdjYuMmgtMy42MnYtNi4yYTQgNCAwIDAgMSAzLjk0LTMuOTRoMTEuNTRhNCA0IDAgMCAxIDMuOTQgMy45NHoiLz48L2c+PC9zdmc+" />  
                        </div>
                        )
                    })
                }
            </div>

        
        }
            </div>
          
    )
    
}


export default SavedBubble