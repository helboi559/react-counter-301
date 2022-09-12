import React from 'react'
import { useState } from 'react'


const Counter = () => {
    const [count,setCount] = useState(0)
    let [imgCount,setImgCount] = useState([])
    
const increaseByOne = () => {

    if(count >= 0) {
      
      setCount(count + 1)
      setImgCount([...imgCount,{
          src:"https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg",
          width:"50px"
        }])
    }
    
  }
  const decreaseByOne = () => {

    if(count > 0) {
      setCount(count - 1)
      setImgCount(imgCount.filter((ele,index) => index !==0))
        
    }
    
  }
  
    return (
    <div className='game-container'>
        <div className='game-control'>
            <button onClick={()=> {
            increaseByOne()
            }}>+</button>
            <span>{count}</span>
            <button onClick={()=> {
            decreaseByOne()
            }}>-</button>
        </div>
         <div className='stars-display'>
        
        {imgCount.length >=1 && (
          imgCount.map((ele)=> {
            return (
              <img src={ele.src} width={ele.width}/>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Counter