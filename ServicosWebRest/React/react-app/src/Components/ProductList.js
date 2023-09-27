import React from 'react'


export default function ProductList({lista, titulo,onComprar}) {

      const renderProduto = (p) => {
    return (
     <div className="produto">
      <img src={p.foto}/>
      {p.nome} - R$ {p.preco}
      <br/>
      <button onClick={()=>onComprar(p)}>Comprar</button>
     </div>
    );
  };

  return (

<>

    <h3>{titulo}</h3>
    <div className='listaDeProdutos'>
        {lista.map(renderProduto)}
    </div>


</>    )
}
