import { useEffect, useState } from 'react'
import style from './Navbar.module.css'
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

export function NavBar() {

    const Navigate = useNavigate();
    const [devState, setDevState] = useState(0);

    useEffect(()=>{
        setDevState(0);
    }, [])

    const devToogle = () =>{
        if(devState === 1){
            setDevState(0)
        } else{
            setDevState(1)
        }
    }

  return (
    <div className={style.navBarContent}>
        <div onClick={() => {
            setDevState(0);
            Navigate('/')
        }}>
            <h1>Home</h1>
        </div>

        <nav className={style.nav} >
            <div className={style.devStyle}>
                <button onClick={devToogle}>
                    DEV
                    <IoIosArrowDown />
                </button>
                {devState === 1 && 
                    <>
                        <div className={style.floatingDetails}></div>
                        <div className={style.floatingInfo}>
                            <span>git hub</span>
                            <span>Linkdein</span>
                        </div>
                    </>
                }
            </div>
            <a href="https://randomuser.me/" target="_blank" rel="noopener noreferrer">
                <button onClick={() => setDevState(0)}>
                    API
                </button>
            </a>
        </nav>
    </div>
  )
}
