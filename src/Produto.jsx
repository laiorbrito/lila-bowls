function Produto({ nome, preco, descricao, onAdicionar }) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <strong>R$ {preco.toFixed(2)}</strong>
      <br />
      <button onClick={onAdicionar}>
        🛒 Adicionar ao carrinho
      </button>
    </div>
  )
}

export default Produto