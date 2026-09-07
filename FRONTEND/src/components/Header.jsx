import '../components/Header.css'
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import img from '../assets/images/LOGO.png'

// Prop () para persistir no usuário logado
const Header = ({userLogged}) => {
  console.log(userLogged);

  return (
    <header>
      <Link to='/'>
        <img id="logoImg" src={img} />
      </Link>
      <h1>Devocionais que vão te edificar</h1>
      <Link className='withoutExternalRedirect' to={userLogged ? "/account": "/Login"} id="menuEntryInProfile">
          <p id='iconMenu'>☰</p>
          <FaUserCircle id='profileEntry'/>
          {userLogged ? <p id="textProfile">{userLogged.name}</p> : <></>}
      </Link>
    </header>
  )
}

export default Header