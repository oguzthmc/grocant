import { BackTop } from 'antd';
import payment from '../../assets/images/payment.png';

function FooterCopyright() {
  return (
    <div className="footerCopyright">
      <div className="container">
        <div className="copyright">©2024 Created by Grocant, Developed by Oğuzhan Tohumcu</div>
        <div className="toTop">
          <img src={payment} alt="payment" />
        </div>
      </div>
      <BackTop />
    </div>
  );
}

export default FooterCopyright;
