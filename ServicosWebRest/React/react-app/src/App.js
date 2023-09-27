import { useState } from "react";
import Baseboard from "./Components/Baseboard";
import Headerr from "./Components/Headerr";
import ProductList from './Components/ProductList';
import ShoppingCart from "./Components/ShoppingCart";

  function App(){
      let produtos = [
   {id: 0, nome: 'Coca', preco: 5, foto: 'https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg'},
   {id: 1, nome: 'Fanta', preco: 3, foto: 'https://images.tcdn.com.br/img/img_prod/791033/refrigerante_fanta_lata_220ml_2171_1_41d8011006fe53cdac1e0a601ae5f2a3.jpg'},
   {id: 2, nome: 'Jaca', preco: 9, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTQ6eFeHlZs7V1TzEPUp7Cqh2J2kbQ5MGTw&usqp=CAU'},
   {id: 3, nome: 'Coca', preco: 5, foto: 'https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg'},
   {id: 4, nome: 'Fanta', preco: 3, foto: 'https://images.tcdn.com.br/img/img_prod/791033/refrigerante_fanta_lata_220ml_2171_1_41d8011006fe53cdac1e0a601ae5f2a3.jpg'},
   {id: 5, nome: 'Jaca', preco: 9, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTQ6eFeHlZs7V1TzEPUp7Cqh2J2kbQ5MGTw&usqp=CAU'},
   {id: 6, nome: 'Coca', preco: 5, foto: 'https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg'},
   {id: 7, nome: 'Fanta', preco: 3, foto: 'https://images.tcdn.com.br/img/img_prod/791033/refrigerante_fanta_lata_220ml_2171_1_41d8011006fe53cdac1e0a601ae5f2a3.jpg'},
      ];

      let [carrinho, setCarrinho]= useState([]);

      const comprar = (p) => {
        setCarrinho([...carrinho, p]); 
      };

    return (
      <>
      <Headerr titulo= "Minha Loja"/>
      <ProductList onComprar={comprar} lista = {produtos} titulo="Produtos: "/>
      <ShoppingCart itens={carrinho}/>
      <Baseboard/>
      </>
      
    )
  };

  export default App;