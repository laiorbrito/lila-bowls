import { useState } from 'react'
import Produto from './Produto'

const produtos = [
  { id: 1, nome: "Bowl Frango Grelhado", preco: 32.90, descricao: "Arroz, frango grelhado, legumes e molho especial" },
  { id: 2, nome: "Bowl Salmão", preco: 42.90, descricao: "Arroz, salmão, pepino, gergelim e shoyu" },
  { id: 3, nome: "Bowl Vegano", preco: 28.90, descricao: "Arroz, grão de bico, legumes assados e tahine" },
]

function App() {
  const [carrinho, setCarrinho] = useState([])

  function adicionarProduto(produto) {
    setCarrinho([...carrinho, produto])
  }

  const total = carrinho.reduce((soma, item) => soma + item.preco, 0)

  return (
    <div>
      <h1>Lila Bowls</h1>
      <p>🛒 {carrinho.length} itens — R$ {total.toFixed(2)}</p>

      {produtos.map(produto => (
        <Produto
          key={produto.id}
          nome={produto.nome}
          preco={produto.preco}
          descricao={produto.descricao}
          onAdicionar={() => adicionarProduto(produto)}
        />
      ))}
    </div>
  )
}

export default App