import PropTypes from 'prop-types';

export function Item(props) {
    const {item} = props;
    const qtClass = `item-quantity level-${
        (item.quantity<=10) ? 'low' : 
        (item.quantity>10&&item.quantity<=20) ? 'medium' :
        (item.quantity>20) ? 'high' : 'low'}`;

    const price = (item.currency_code==='USD') ? `$${item.price}` :
                     (item.currency_code==='EUR') ? `€${item.price}` :
                     `${item.price} GBP`;
    const title = (item.title.length>50) ? `${item.title.substr(0,50)}...` : item.title;

    return(
    <div className="item">
        <div className="item-image">
            <a href={item.url}>
                <img src={item.MainImage.url_570xN} alt = 'img'/>
            </a>
        </div>
        <div className="item-details">
            <p className="item-title">{title}</p>
            <p className="item-price">{price}</p>
            <p className={qtClass}>{`${item.quantity} left`}</p>
    </div>
  </div>
    )
}

Item.propTypes = {
    item: PropTypes.shape({
        listing_id: PropTypes.number,
        url: PropTypes.string,
        MainImage: PropTypes.shape({
            url_570xN: PropTypes.string
        }).isRequired,
        title: PropTypes.string,
        currency_code: PropTypes.string,
        price: PropTypes.string,
        quantity: PropTypes.number
    })
}