import React from 'react'

function Header() {
  return <h2>我是Header部分</h2>
}

function Main() {
  return (
    <div>
      <h2>我是Main部分</h2>
      <Banner />
      <ProductList />
    </div>
  )
}

function Banner() {
  return <h3>我是Banner部分</h3>
}

function ProductList() {
  return (
    <ul>
      <li>商品数据1</li>
      <li>商品数据2</li>
      <li>商品数据3</li>
      <li>商品数据4</li>
    </ul>
  )
}

function Footer() {
  return <h2>我是Footer部分</h2>
}

export default function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
