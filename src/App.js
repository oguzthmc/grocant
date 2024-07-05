import { Layout } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import AppHeader from './components/common/header';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <AppHeader />
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
