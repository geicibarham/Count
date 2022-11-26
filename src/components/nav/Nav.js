
import './_nav.scss';
import { Link } from 'react-router-dom';
import rewards from '../../assets/images/rewards.png'
const Nav = () => {
    return (
        <header>
            <Link className='nav-link' to="/">
            <h1 className='comic'>
                Countless Fun
            </h1>
            </Link>
            <Link to="/scores">
            <img className="rewards-icon"src={rewards} alt="rewards icon link" />
            </Link>
        </header>
    )
}

export default Nav;