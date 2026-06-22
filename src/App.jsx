import Produto from './Produto'

const produtos = [
  { id: 1, nome: "Bowl Frango Grelhado", preco: "32,90", descricao: "Arroz, frango grelhado, legumes e molho especial" },
  { id: 2, nome: "Bowl Salmão", preco: "42,90", descricao: "Arroz, salmão, pepino, gergelim e shoyu" },
  { id: 3, nome: "Bowl Vegano", preco: "28,90", descricao: "Arroz, grão de bico, legumes assados e tahine" },
]

function App() {
  return (
    <div>
      <h1>Lila Bowls</h1>
      {produtos.map(produto => (
        <Produto
          key={produto.id}
          nome={produto.nome}
          preco={produto.preco}
          descricao={produto.descricao}
        />
      ))}
    </div>
  )
}

export default App