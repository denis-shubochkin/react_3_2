import {Item} from './Item';
import PropTypes from 'prop-types';


export function Listing(props) {
    const {items} = props;
    return(
        <div className="item-list">
        {items.map((el)=> <Item item={el} key={el.listing_id} />)}
</div>
    )
}

Listing.defaultProps = {
    items: []
}

Listing.propTypes = {
    items: PropTypes.arrayOf(Object)
}