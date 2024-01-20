import { useDispatch } from 'react-redux';
import {addToCart} from '../Reducer/cartSlice'


import { BsFillBagFill } from "react-icons/bs";
import { generateUniqueId } from '../utils/utils';

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {

const dispatch=useDispatch()

const handleClick = ()=>{
  dispatch(addToCart({title,newPrice,img,id:generateUniqueId()}))
}
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="ratings-star">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>  
          </section>
          
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill onClick={handleClick} className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;