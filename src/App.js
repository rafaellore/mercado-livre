import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="app">
    <Header/>
    <img src="https://besthqwallpapers.com/Uploads/27-3-2019/85058/4k-black-silk-black-fabric-texture-silk-black-backgrounds.jpg" height="250px" width="100%"/>
    <div className="enterprise-box"></div> 
    <Product/>
    <GlobalStyle />
    </div>
  );
}

export default App;
