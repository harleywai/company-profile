import { PricingEmailData } from "../data/PricingEmailData";
const PricingEmail = () => {
  return (
    <div className="price-cards">
      {PricingEmailData.map((item) => <div key={item.id} className='price-card'>
        <h4>{item.title}</h4>
        <div className='plan-price'>{item.price}</div>
        <ul className="plan-details">
          {item.features.map((i, key) => <li key={key}>{i}</li>)}
        </ul>
        <div><a className='button' href={item.link}>Order Now</a></div>
      </div>)}
    </div>
  )
}
export default PricingEmail;