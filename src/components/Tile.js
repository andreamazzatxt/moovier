import { useContext, useEffect, useRef, useState } from 'react';
import { saveList } from './saveList';
import style from './Tile.module.css'

function convertDate(dateString) {
    var date = new Date(dateString);
    return date.getDate()+"/"+(date.getMonth() + 1)+"/"+date.getFullYear();
}

function Tile(props) {
    const [clicked,setClicked]= useState(false)
    const [toggleSave, setToggleSave] = useState(false)
    const {list,setList} = useContext(saveList);
    const tileRef = useRef();
    const handleClick = () =>{
        setClicked(true);
        document.getElementById('App').style.backgroundImage = props.data.backImg && `url(${props.data.backImg})` 
        tileRef.current.style.maxHeight = '150vh';
    }
    const handleClose = () =>{
        setClicked(false);
        tileRef.current.style.maxHeight = '68vh';
    }
    const handleSave =() =>{
       let check = false;
       list.forEach(element => {
           if(element.id===props.data.id){
               check = true;
           }
       });
       if(!check){setList([...list,props.data])};
       setToggleSave(true);
    }
    useEffect(()=>{
        let check = false;
        list.forEach(element => {
            if(element.id===props.data.id){
                check = true;
            }
        });
        if(!check){setToggleSave(false);};
        
    },[list,props])

    useEffect(()=>{
        localStorage.setItem('fav',JSON.stringify(list))
    },[list])
    useEffect(()=>{
        let check = false;
       list.forEach(element => {
           if(element.id===props.data.id){
               check = true;
           }
       });
       if(check){
           setToggleSave(true);
       }
    },[list,props])

    return ( 
       props.data.avatarImg && 
       <div ref={tileRef} key={props.data.id} className = {style.tile}>
              {
            clicked &&
            
            <img alt='close icon'onClick={handleClose} className={style.close} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0UyMUIxQjsiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0M0MDYwNjsiIGQ9Ik01MTAuMjgsMjg1LjMwNEwzNjcuOTEyLDE0Mi45MzZMMTUwLjI0OCwzNjguNjA4bDE0MC45MjgsMTQwLjkyOA0KCUM0MDYuMzUyLDQ5My42OTYsNDk3LjA1Niw0MDEuMjg4LDUxMC4yOCwyODUuMzA0eiIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0zNTQuMzc2LDM3MS41MzZjLTUuMTIsMC0xMC4yMzItMS45NTItMTQuMTQ0LTUuODU2TDE0Ni40MDgsMTcxLjg0OA0KCQljLTcuODE2LTcuODE2LTcuODE2LTIwLjQ3MiwwLTI4LjI4czIwLjQ3Mi03LjgxNiwyOC4yOCwwTDM2OC41MiwzMzcuNGM3LjgxNiw3LjgxNiw3LjgxNiwyMC40NzIsMCwyOC4yOA0KCQlDMzY0LjYwOCwzNjkuNTg0LDM1OS40OTYsMzcxLjUzNiwzNTQuMzc2LDM3MS41MzZ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0xNjAuNTQ0LDM3MS41MzZjLTUuMTIsMC0xMC4yMzItMS45NTItMTQuMTQ0LTUuODU2Yy03LjgxNi03LjgxNi03LjgxNi0yMC40NzIsMC0yOC4yOA0KCQlsMTkzLjgzMi0xOTMuODMyYzcuODE2LTcuODE2LDIwLjQ3Mi03LjgxNiwyOC4yOCwwczcuODE2LDIwLjQ3MiwwLDI4LjI4TDE3NC42ODgsMzY1LjY4DQoJCUMxNzAuNzg0LDM2OS41ODQsMTY1LjY2NCwzNzEuNTM2LDE2MC41NDQsMzcxLjUzNnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
            
        } 
           <img onClick={handleClick} alt= {props.data.title} className={style.img} src={props.data.avatarImg}></img>
           {
               clicked &&
                 <div className={style.text}>
                 <h1 className={style.title}>{props.data.title}</h1>
                 <p className={style.resume}>{props.data.resume ? props.data.resume : "Cooming soon..."}</p>
                 <p className={style.date}>{props.data.date && convertDate(props.data.date)}</p> 
                 {  !toggleSave ?  
                 <img alt="save icon" onClick = {handleSave} className={style.icon}  src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yNTYgMGMtMTQxLjE2NDA2MiAwLTI1NiAxMTQuODM1OTM4LTI1NiAyNTZzMTE0LjgzNTkzOCAyNTYgMjU2IDI1NiAyNTYtMTE0LjgzNTkzOCAyNTYtMjU2LTExNC44MzU5MzgtMjU2LTI1Ni0yNTZ6bTAgMCIgZmlsbD0iIzIxOTZmMyIvPjxwYXRoIGQ9Im0zNjggMjc3LjMzMjAzMWgtOTAuNjY3OTY5djkwLjY2Nzk2OWMwIDExLjc3NzM0NC05LjU1NDY4NyAyMS4zMzIwMzEtMjEuMzMyMDMxIDIxLjMzMjAzMXMtMjEuMzMyMDMxLTkuNTU0Njg3LTIxLjMzMjAzMS0yMS4zMzIwMzF2LTkwLjY2Nzk2OWgtOTAuNjY3OTY5Yy0xMS43NzczNDQgMC0yMS4zMzIwMzEtOS41NTQ2ODctMjEuMzMyMDMxLTIxLjMzMjAzMXM5LjU1NDY4Ny0yMS4zMzIwMzEgMjEuMzMyMDMxLTIxLjMzMjAzMWg5MC42Njc5Njl2LTkwLjY2Nzk2OWMwLTExLjc3NzM0NCA5LjU1NDY4Ny0yMS4zMzIwMzEgMjEuMzMyMDMxLTIxLjMzMjAzMXMyMS4zMzIwMzEgOS41NTQ2ODcgMjEuMzMyMDMxIDIxLjMzMjAzMXY5MC42Njc5NjloOTAuNjY3OTY5YzExLjc3NzM0NCAwIDIxLjMzMjAzMSA5LjU1NDY4NyAyMS4zMzIwMzEgMjEuMzMyMDMxcy05LjU1NDY4NyAyMS4zMzIwMzEtMjEuMzMyMDMxIDIxLjMzMjAzMXptMCAwIiBmaWxsPSIjZmFmYWZhIi8+PC9zdmc+" />
                    :<p>Saved</p>
                }
                 </div>    
           } 
       
        </div>
    )
}

export default Tile;