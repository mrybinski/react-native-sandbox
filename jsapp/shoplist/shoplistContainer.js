import { connect } from 'react-redux';
import ShopList from './shoplist';
import get from 'lodash/get';
import { addItem } from './shoplistActions';

function mapStateToProps(state) {
    const items = get(state, 'shoplist.items', []);
    const selection = get(state, 'shoplist.selection', {});
    return {
        items,
        selection
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addItem() {
            dispatch(addItem(''));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopList);
