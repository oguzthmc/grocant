import { NavLink } from 'react-router-dom';
import {
  FacebookFilled,
  InstagramFilled,
  MailOutlined,
  MenuOutlined,
  MobileOutlined,
  TwitterSquareFilled,
  UserOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { Button, Drawer } from 'antd';

function AppHeader() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

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
        <div className="mobileVisible">
          <Button type="text" icon={<MenuOutlined />} onClick={showDrawer} />
          <Drawer title="Menu" onClose={onClose} open={open}>
            <nav>
              <ul>
                <li>
                  <NavLink to="/" onClick={onClose}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={onClose}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/shop" onClick={onClose}>
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/faq" onClick={onClose}>
                    FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={onClose}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </Drawer>
        </div>
        <nav className="mobileHidden">
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
