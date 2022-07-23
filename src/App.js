import React from 'react';
import Review from './components/Review';
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import {reviews} from './data';


const App = () => {
  const [index, setIndex] = React.useState(0);
  const prevBtn = () =>{

    if(index === 0){
      setIndex(reviews.length-1);

    }else{
      setIndex((index)=>index-1);
    }
  }
  const nextBtn = () =>{

    if(index === (reviews.length-1)){
      setIndex(0);

    }else{
      setIndex((index)=>index+1);
    }
  }
  const randomHandler = () =>{
    setIndex(()=>{
      let randomNum = Math.trunc(Math.random()*reviews.length);
      return randomNum;
    })
  }
  return (
    <>
    <div className="heading">
      <h3>Reviews :</h3>
      <hr />
    </div>
    <div className="container">
      {/* <h1>REVIEWS</h1> */}
      <button className='nav-btn' onClick={prevBtn}><AiFillLeftCircle className='icon'></AiFillLeftCircle></button>
      <Review index={index} reviews={reviews}></Review>
      <button className='nav-btn' onClick={nextBtn}><AiFillRightCircle className='icon'></AiFillRightCircle></button>
    </div>
    <button className='random-btn' onClick={randomHandler}>Random Review</button>
    </>

  )
}

export default App