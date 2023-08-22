import React from 'react'
import '../src/App.css'

const Home = () => {
  return (
    <div>
        <div className='Main-Nav'>
        <div className='image-container'>
            <img src="../src/Images/LittleLogo.png" alt="Logo" />
            <h2>Shophub</h2>
        </div>
        <div className='Main-Category'>
                <select className='Category'>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </select>
            </div>
            <div className='Nav-Router'>
               <li>Home</li>
                <li>Products</li>
                <li>Cart</li>
            </div>
        </div>
    </div>
  )
}

export default Home