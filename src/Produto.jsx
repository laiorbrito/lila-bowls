    function Produto({ nome, preco, descricao, quantidade, onAdicionar, onRemover }) {
  return (
    <div className="produto-card">
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <strong>R$ {preco.toFixed(2)}</strong>
      <br />
    <div className="quantidade-controle">
      <button onClick={onRemover}>➖</button>
      <span> {quantidade} </span>
      <button onClick={onAdicionar}>➕</button>
    </div>
  </div>  
  )
}

export default Produto