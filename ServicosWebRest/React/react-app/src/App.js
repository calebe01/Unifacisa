import { useState } from "react";

// function App() {
//   let produtos = [
//    {id: 0, nome: 'Coca', preco: 5, foto: 'https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg'},
//    {id: 1, nome: 'Fanta', preco: 3, foto: 'https://images.tcdn.com.br/img/img_prod/791033/refrigerante_fanta_lata_220ml_2171_1_41d8011006fe53cdac1e0a601ae5f2a3.jpg'},
//    {id: 2, nome: 'Jaca', preco: 9, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTQ6eFeHlZs7V1TzEPUp7Cqh2J2kbQ5MGTw&usqp=CAU'},
//    {id: 3, nome: 'Coca', preco: 5, foto: 'https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg'},
//    {id: 4, nome: 'Fanta', preco: 3, foto: 'https://images.tcdn.com.br/img/img_prod/791033/refrigerante_fanta_lata_220ml_2171_1_41d8011006fe53cdac1e0a601ae5f2a3.jpg'},
//    {id: 5, nome: 'Jaca', preco: 9, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTQ6eFeHlZs7V1TzEPUp7Cqh2J2kbQ5MGTw&usqp=CAU'},
//    {id: 6, nome: 'Coca', preco: 5, foto: 'https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg'},
//    {id: 7, nome: 'Fanta', preco: 3, foto: 'https://images.tcdn.com.br/img/img_prod/791033/refrigerante_fanta_lata_220ml_2171_1_41d8011006fe53cdac1e0a601ae5f2a3.jpg'},
//    {id: 8, nome: 'Jaca', preco: 9, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTQ6eFeHlZs7V1TzEPUp7Cqh2J2kbQ5MGTw&usqp=CAU'},
//    {id: 9, nome: 'Coca', preco: 5, foto: 'https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg'},
//    {id: 10, nome: 'Fanta', preco: 3, foto: 'https://images.tcdn.com.br/img/img_prod/791033/refrigerante_fanta_lata_220ml_2171_1_41d8011006fe53cdac1e0a601ae5f2a3.jpg'},
//    {id: 11, nome: 'Jaca', preco: 9, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTQ6eFeHlZs7V1TzEPUp7Cqh2J2kbQ5MGTw&usqp=CAU'},
//    {id: 12, nome: 'Coca', preco: 5, foto: 'https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg'},
//    {id: 13, nome: 'Fanta', preco: 3, foto: 'https://images.tcdn.com.br/img/img_prod/791033/refrigerante_fanta_lata_220ml_2171_1_41d8011006fe53cdac1e0a601ae5f2a3.jpg'},
//    {id: 14, nome: 'Jaca', preco: 9, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTQ6eFeHlZs7V1TzEPUp7Cqh2J2kbQ5MGTw&usqp=CAU'},
//    {id: 15, nome: 'Coca', preco: 5, foto: 'https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg'},
//    {id: 16, nome: 'Fanta', preco: 3, foto: 'https://images.tcdn.com.br/img/img_prod/791033/refrigerante_fanta_lata_220ml_2171_1_41d8011006fe53cdac1e0a601ae5f2a3.jpg'},
//    {id: 17, nome: 'Jaca', preco: 9, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTQ6eFeHlZs7V1TzEPUp7Cqh2J2kbQ5MGTw&usqp=CAU'},
//    {id: 18, nome: 'Coca', preco: 5, foto: 'https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg'},
//    {id: 19, nome: 'Fanta', preco: 3, foto: 'https://images.tcdn.com.br/img/img_prod/791033/refrigerante_fanta_lata_220ml_2171_1_41d8011006fe53cdac1e0a601ae5f2a3.jpg'},
//    {id: 20, nome: 'Jaca', preco: 9, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTQ6eFeHlZs7V1TzEPUp7Cqh2J2kbQ5MGTw&usqp=CAU'},
//    {id: 21, nome: 'Jaca', preco: 9, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTQ6eFeHlZs7V1TzEPUp7Cqh2J2kbQ5MGTw&usqp=CAU'},
//    {id: 22, nome: 'Jaca', preco: 9, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTQ6eFeHlZs7V1TzEPUp7Cqh2J2kbQ5MGTw&usqp=CAU'},
//    {id: 23, nome: 'Jaca', preco: 9, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTQ6eFeHlZs7V1TzEPUp7Cqh2J2kbQ5MGTw&usqp=CAU'},
//   ];

//   const [total, setTotal] = useState(0);
//   const [carrinho, setCarrinho] = useState([]);

//   const comprar = (p) => {
//     setTotal(total + p.preco);
//     setCarrinho([...carrinho, p]);
//   };

//   const renderProduto = (p) => {
//     return (
//      <li className="produto">
//       <img src={p.foto}/>
//       {p.nome} - R$ {p.preco}
//       <br/>
//       <button onClick={()=>comprar(p)}>Comprar</button>
//      </li>
//     );
//   };

//   const renderItemCarrinho = (p) => {
//     return (
//      <li>
//       {p.nome} - R$ {p.preco}
//      </li>
//     );
//   };


//   return (
//     <>
//       <h3>Lista de Produtos:</h3>
//       <ul className="listaDeProdutos">
//         {produtos.map(renderProduto)}
//       </ul>
//       <hr/>
//       <h3>Produtos no Carrinho:</h3>
//       <ol>
//         {carrinho.map(renderItemCarrinho)}
//       </ol>
//       <h3>Total: R$ {total}</h3>
//     </>
//   );
// }

// export default App;
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

      const comprar = (p) => {
        alert("Comprar o produto: " + p.nome);
      };

    return (
      <>
      <Headerr titulo= "Minha Loja"/>
      <ProductList onComprar={comprar} lista = {produtos} titulo="Produtos: "/>
      <ShoppingCart/>
      <Baseboard/>
      </>
      
    )
  };

  export default App;