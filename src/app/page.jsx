import React from 'react'
import MyButton from './components/Button'

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Hello React</h1>
      <button style={{ backgroundcolor: 'black', color: 'white', padding: 10 }}>
        Home Button
      </button>
      <br />
      <input tyoe="text" />

      <button className="submit-btn">Home button</button>

      <button className="btn">another buttom</button>

      <img src="/images.jpg" alt="" />

      <MyButton>my custom button</MyButton>
      <MyButton>login</MyButton>
      <MyButton>Subnit</MyButton> 
    </div>
  )
}

export default Home
