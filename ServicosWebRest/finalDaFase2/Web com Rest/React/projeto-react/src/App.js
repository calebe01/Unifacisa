import './App.css';
import Cabecalho from './Components/Cabecalho';
import ListaDeProdutos from './Components/ListaDeProdutos';
import CarrinhoDeCompra from './Components/CarrinhoDeCompras';
import Rodape from './Components/Rodape';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  let [carrinho, setCarrinho] = useState([]);
  let [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then(res =>{
      let prods = res.data.products.map(p =>{
        return {
          id: p.id,
          nome: p.title,
          valor: p.price,
          foto: p.images[0]
        };
      });
      setProdutos(prods);
    });
  }, []);
  //O codigo que esta aqui sera chamado quando o componente for carregado.

  const comprar = (p) => {
    setCarrinho([...carrinho, p]);
  };


  return (
    <>
    <Cabecalho titulo="Minha Loja"/>
    <ListaDeProdutos onComprar={comprar} lista={produtos} titulo='Produtos :'/>
    <hr/>
    <CarrinhoDeCompra itens={carrinho}/>
    <Rodape/>
    </>
  );
}

export default App;