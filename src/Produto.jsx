    function Produto({ nome, preco, descricao, quantidade, onAdicionar, onRemover }) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <strong>R$ {preco.toFixed(2)}</strong>
      <br />
      <button onClick={onRemover}>➖</button>
      <span> {quantidade} </span>
      <button onClick={onAdicionar}>➕</button>
    </div>
  )
}

export default Produto