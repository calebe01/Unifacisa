import React from 'react'

export default function ShoppingCart({itens}) {
  
  const renderItem = (i) => {
    return (<li>{i.nome} - R$ {i.preco}</li>)
  }

  const calculaTotal = () => {
    let total = 0;
    itens.forEach(i => total += i.preco);
    return total;
  };

  return (

<>

    <h3>Carrinho de Compras:</h3>

    <ol>
      {itens.map(renderItem)}
    </ol>
    <h3>Total: R$ {calculaTotal()}</h3>
</>    )
}
