import { useState } from 'react';
import starIcon from './assets/images/icon-star.svg'
import thankYouImage from './assets/images/illustration-thank-you.svg'

const Card = () => {
  const [rating, setRating] = useState(null);
  const [status, setStatus] = useState(false);

  const handleClickRating = (e) => {
    e.preventDefault();
    const ratingNumber = e.target.dataset.rating
    setRating(ratingNumber);
  }

  const handleClick = () => {
    if (rating === null) return;
    setStatus(!status);
  }

  return (
    <>
      <div className={`card ${status ? "thankyou" : ""}`}>
        <div className="rating-section">
          <div className="star">
            <img src={starIcon} alt="star icon" />
          </div>
          <h1>How did we do?</h1>
          <p>Please let us know how we did with your support
            request. All feedback is appreciated to help us improve our
            offering!</p>
          <div className="ratings">
            {
              ["1", "2", "3", "4", "5"].map(([name], index) => (
                <a key={name} href="#" onClick={e => handleClickRating(e)} data-rating={name} className={`rating${rating == name ? " active" : ""}`}>{name}</a>
              ))
            }
          </div>
          <button onClick={() => handleClick()} >Submit</button>
        </div>
        <div className="thankyou-section">
          <img className='thankyou' src={thankYouImage} alt="Thank You Illustration" />
          <div className='rating-display'>You selected {rating ? rating : "0"} out of 5</div>
          <h1>Thank you!</h1>
          <p>We appreciate you taking the time to give a rating. If you ever
            need more support, don’t hesitate to get in touch!</p>
        </div>
      </div>
    </>
  )
}

export default Card;
