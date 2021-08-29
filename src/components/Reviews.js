import React, {useState} from 'react'
import { reviewsData } from '../data'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Button } from 'antd';

const Reviews = () => {
    
    const [reviews, setReviews ] = useState(0)
    const {name, title, description, image} = reviewsData[reviews]

    const endOfReviews = (review) => {
    if (review > reviewsData.length - 1) {
      return 0;
    }
    if (review < 0) {
      return reviewsData.length - 1;
    }
    return review;
  };
  const nextReview = () => {
    setReviews((reviews) => {
      let newReview = reviews + 1;
      return endOfReviews(newReview);
    });
  };
  const previousReview = () => {
    setReviews((reviews) => {
      let newReview = reviews - 1;
      return endOfReviews(newReview);
    });
  };
    return (
        <section className="reviews container">
            <h2>This is what our Customers say</h2>
            <div className="review__item">
                <div className="review__item--img">
                        <img src={image} alt={name} />
                </div>
                <div className="review__text">
                    <h4 >{name}</h4>
            <p className='page__lead'>{title}</p>
            <p className='page__lead'>" {description} "</p>
                </div>
             <div className="review__buttons">
                 <Button onClick={previousReview} >
                      <FaChevronLeft />
                 </Button>
                <Button onClick={nextReview} >
                      <FaChevronRight />
                 </Button>
                
               
               
            </div>
            </div>
           
        </section>
    )
}

export default Reviews
