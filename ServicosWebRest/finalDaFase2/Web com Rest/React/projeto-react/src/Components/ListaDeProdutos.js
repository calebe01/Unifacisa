import React from 'react'

export default function ListaDeProdutos({lista, titulo, onComprar}) {

    const renderProduto = (p) => {
        return (
        <div className='produto'>
            <img src={p.foto}/>
            <h5>{p.nome}</h5>
            <h5>R$ {p.valor}</h5>
            <button onClick={() => onComprar(p)}>Comprar</button>
        </div>
        );
    };

  return (
    <>
        <h3>{titulo}</h3>
        <div className='listaDeProduto'>
            {lista.map(renderProduto)}
        </div>
    </>
  )
}