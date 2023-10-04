import React from 'react'

export default function CarrinhoDeCompra({itens}) {

  const renderItem = (i) => {
    return (<li><img src={i.foto}/> 
    <br></br> {i.nome} - R$ {i.valor}</li>)
  }

  const calculaTotal = () => {
    let total = 0;
    itens.forEach(i => total += i.valor);
    return total;
  };

  return (
    <>
    <div className='itens'>
    <h3>Carrinho de Compras:</h3>
    <ol>
      {itens.map(renderItem)}
    </ol>
    <h3>Total: R$ {calculaTotal()}</h3>
    </div>
    </>
  )
};