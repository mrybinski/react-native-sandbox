import { connect } from 'react-redux';
import ShopList from './shoplist';
import get from 'lodash/get';

function mapStateToProps(state) {
    const items = get(state, 'shoplist.items', []);
    const selection = get(state, 'shoplist.selection', {});
    return {
        items,
        selection
    };
}

export default connect(mapStateToProps)(ShopList);
