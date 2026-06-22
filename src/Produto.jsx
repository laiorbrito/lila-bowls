function Produto({ nome, preco, descricao }) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <strong>R$ {preco}</strong>
    </div>
  )
}

export default Produto