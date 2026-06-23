function Produto({ nome, preco, descricao, noCarrinho, onAdicionar, onRemover }) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <strong>R$ {preco.toFixed(2)}</strong>
      <br />
      {noCarrinho ? (
        <button onClick={onRemover}>❌ Remover do carrinho</button>
      ) : (
        <button onClick={onAdicionar}>🛒 Adicionar ao carrinho</button>
      )}
    </div>
  )
}

export default Produto