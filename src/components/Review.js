import React from 'react';
import { BsFillChatQuoteFill } from "react-icons/bs";

const Review = ({ index, reviews }) => {

  const { name, job, image, text, color } = reviews[index];
  function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for (var i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(" ");
  }
  return (
    <div className='review-box'>
      <div className="author-info">
        <div className="image-container">
        <BsFillChatQuoteFill className='img-quote'></BsFillChatQuoteFill>
          <img src={image} alt={name} style={{backgroundColor : color}}/>
        </div>
        <h4>{name.toUpperCase()}</h4>
        <h5>{titleCase(job)}</h5>
      </div>
      <p className='author-text'>{text}</p>
    </div>
  )
}

export default Review