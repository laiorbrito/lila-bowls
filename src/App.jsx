import { useState } from 'react'
import Produto from './Produto'
import './App.css'

const produtos = [
  { id: 1, nome: "Bowl Frango Grelhado", preco: 32.90, descricao: "Arroz, frango grelhado, legumes e molho especial" },
  { id: 2, nome: "Bowl Salmão", preco: 42.90, descricao: "Arroz, salmão, pepino, gergelim e shoyu" },
  { id: 3, nome: "Bowl Vegano", preco: 28.90, descricao: "Arroz, grão de bico, legumes assados e tahine" },
]

function App() {
  const [carrinho, setCarrinho] = useState([])

  function adicionarProduto(produto) {
  const jaExiste = carrinho.find(item => item.id === produto.id)
  if (jaExiste) {
    setCarrinho(carrinho.map(item =>
      item.id === produto.id
        ? { ...item, quantidade: item.quantidade + 1 }
        : item
    ))
  } else {
    setCarrinho([...carrinho, { ...produto, quantidade: 1 }])
  }
}

  function removerProduto(id) {
  const item = carrinho.find(item => item.id === id)
  if (item.quantidade > 1) {
    setCarrinho(carrinho.map(item =>
      item.id === id
        ? { ...item, quantidade: item.quantidade - 1 }
        : item
    ))
  } else {
    setCarrinho(carrinho.filter(item => item.id !== id))
  }
}

  const totalItens = carrinho.reduce((soma, item) => soma + item.quantidade, 0)
  const total = carrinho.reduce((soma, item) => soma + item.preco * item.quantidade, 0)

  return (
    <div>
      <h1>Lila Bowls</h1>
      <p className="carrinho-resumo">🛒 {totalItens} itens — R$ {total.toFixed(2)}</p>
      <div className="produtos-lista">
        {produtos.map(produto => {
          const noCarrinho = carrinho.find(item => item.id === produto.id)
          return (
            <Produto
              key={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              descricao={produto.descricao}
              quantidade={noCarrinho ? noCarrinho.quantidade : 0}
              onAdicionar={() => adicionarProduto(produto)}
              onRemover={() => removerProduto(produto.id)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App