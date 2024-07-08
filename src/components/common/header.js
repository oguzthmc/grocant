import { NavLink } from 'react-router-dom';
import {
  FacebookFilled,
  InstagramFilled,
  MailOutlined,
  MobileOutlined,
  TwitterSquareFilled,
  UserOutlined,
} from '@ant-design/icons';

function AppHeader() {
  return (
    <div className="container">
      {/* topbar */}
      <div className="topBar">
        <div className="contactInfo">
          <ul>
            <li>
              <a href="tel:07450223366">
                <MobileOutlined />
                <span>07450223366</span>
              </a>
            </li>
            <li>
              <a href="mailto:contact@grocant.co.uk">
                <MailOutlined />
                <span>contact@grocant.co.uk</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="otherInfo">
          <ul className="socialMedia">
            <li>
              <a href="https://www.facebook.com">
                <FacebookFilled />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <TwitterSquareFilled />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <InstagramFilled />
              </a>
            </li>
          </ul>
          <button>
            <UserOutlined />
            My Account
          </button>
        </div>
      </div>
      {/* header */}
      <div className="header separator">
        <div className="logo">Grocant</div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AppHeader;
