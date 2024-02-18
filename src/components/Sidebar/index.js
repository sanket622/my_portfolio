import { Link } from 'react-router-dom'
import './index.scss'
import sanketlogo from '../../assets/images/logos.jpg'
import LogoSubtitle from '../../assets/images/logo-sub.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { faFacebook, faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={sanketlogo} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="sanket" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
         target = "_blank"
          rel="noreferrer"
          href="https://github.com/dashboard"
          >
         <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
         target = "_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/sanket-kumar-417689255/"
          >
         <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
         target = "_blank"
          rel="noreferrer"
          href="https://www.facebook.com/profile.php?id=100011899695979"
          >
         <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
         target = "_blank"
          rel="noreferrer"
          href="https://www.instagram.com/sanket_singh98/"
          >
         <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
