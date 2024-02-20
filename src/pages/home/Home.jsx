import style from './Home.module.css'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const Navigate =useNavigate();
  return (
    <div className={style.HomeContent}>
        <div className={style.homeSection}>
          <h1>
            <span>E</span>xplore a diversidade de perfis personalizado
          </h1>
          <span>Crie dados ficticios com as suas preferencias em instantes</span>
          <br />
          <button  onClick={() => Navigate('/bR4sDfG2tH')}>Crie seu modelo</button>

        </div>
    </div>
  )
}
