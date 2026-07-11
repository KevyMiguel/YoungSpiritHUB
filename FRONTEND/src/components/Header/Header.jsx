import '../Header/Header.css'
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import img from '../../assets/images/LOGO.png'

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <img id="logoImg" src={img} />
      </Link>
      <h1>Devocionais que vão te edificar</h1>
      <input type="search" placeholder='Pesquise'/>
      <button type="submit">Pesquise!</button>
      <Link className='withoutExternalRedirect' to='/Login' id="menuEntryInProfile">
          <p id='iconMenu'>☰</p>
          <FaUserCircle id='profileEntry'/>
          <p id='textProfile'>Kevy Miguel</p>
      </Link>
    </header>
  )
}

export default Header