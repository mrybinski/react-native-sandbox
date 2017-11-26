import { connect } from 'react-redux';
import ShopList from './shoplist';

function mapStateToProps(state) {
    const items = state.shoplist.get('items') || [];
    return {
        items
    };
}

export default connect(mapStateToProps)(ShopList);
