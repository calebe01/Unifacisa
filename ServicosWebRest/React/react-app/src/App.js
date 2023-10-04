import { useEffect, useState } from "react";
import Baseboard from "./Components/Baseboard";
import Headerr from "./Components/Headerr";
import ProductList from './Components/ProductList';
import ShoppingCart from "./Components/ShoppingCart";
import axios from "axios";

  function App(){

    let [produtos, setProdutos] = useState([]);
    let [carrinho, setCarrinho] = useState([]);

    const comprar = (p) => {
      setCarrinho([...carrinho, p]); 
    };

   
    useEffect(() => {
      axios.get('https://dummyjson.com/products').then(res => {
      let prodst = res.data.products.map(p =>  {
        return {
          id: p.id,
          nome: p.title,
          valor:p.price,
          foto:p.images[0]
        };
      });
      setProdutos(prodst);
    });
    },[]);

    return (
      <>
        <div className="Header">Minha Loja</div>
        <div className="ProductList">
          <ProductList onComprar={comprar} lista={produtos} titulo="Produtos: " />
        </div>
        <div className="ShoppingCart">
          <ShoppingCart itens={carrinho} />
        </div>
        <div className="Baseboard"></div>
      </>
    );
  };

  export default App;