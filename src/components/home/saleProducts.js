import { Button, Col, Row } from 'antd';

const products = [
  {
    key: '1',
    image: require('../../assets/images/img5.jpg'),
    title: 'Glens Vodka 70cl Extra smooth',
    saleprice: '£20.00',
    price: '£15.50',
  },
  {
    key: '2',
    image: require('../../assets/images/img6.jpg'),
    title: 'Pot Noodle Chicken & Mushroom Standard 90g',
    saleprice: '£1.50',
    price: '£0.90',
  },
  {
    key: '3',
    image: require('../../assets/images/img7.jpg'),
    title: 'Branston Baked Beans in a Rich and Tasty Tomato Sauce 4 x 410g',
    saleprice: '£2.00',
    price: '£1.50',
  },
  {
    key: '4',
    image: require('../../assets/images/img8.jpg'),
    title: 'Kelloggs Crunchy Nut Hazelnut & Chocolate Granola 380g',
    saleprice: '£3.00',
    price: '£2.50',
  },
];

function SaleProducts() {
  return (
    <div className="block products">
      <h2>Sale Products</h2>
      <Row gutter={[24, 24]}>
        {products.map((p) => {
          return (
            <Col xs={24} sm={12} lg={6} key={p.key}>
              <div className="content">
                <div className="image">
                  <img src={p.image} alt="productImage" />
                </div>
                <h3>{p.title}</h3>
                <div className="price">
                  <span className="salePrice">{p.saleprice}</span>
                  {p.price}
                </div>
                <Button type="primary">Add to Basket</Button>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default SaleProducts;
