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
    </div>
  );
}

export default AppHeader;
