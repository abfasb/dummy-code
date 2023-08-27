import React from 'react'
import '../src/App.css'

const Home = () => {
  return (
    <div className='main-div'>
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
                <li>Product</li>
                <li>Cart</li>
            </div>
            <div className='Parent-Signup'>
                <button>Sign in</button>
            </div>
        </div>
        <div className='bg-photo'>
            <img src="../src/Images/Home-Bg.png" alt="" />
        </div>
        <div className='bg-content'>
            <div className='category-content'>
                <button className='first-child'>All Categories</button>
                <button>Technology</button>
                <button>Fashion</button>
                <button>Skincare</button>
                <button>Vouchers</button>
            </div>
            <div className='Input-Search'>
            <input type="search" name="" id="" placeholder='Search Items'/>
            <input type="button" value="Search" />
        </div>
        </div>
    </div>
  )
}

export default Home