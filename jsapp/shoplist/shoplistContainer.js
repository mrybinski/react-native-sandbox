import { connect } from 'react-redux';
import ShopList from './shoplist';
import get from 'lodash/get';

function mapStateToProps(state) {
    const items = get(state, 'shoplist.items', []);
    return {
        items
    };
}

export default connect(mapStateToProps)(ShopList);
