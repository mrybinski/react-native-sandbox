import { connect } from 'react-redux';
import { toggleItem, removeItem } from './shoplistActions';
import ShopListItem from './shoplistItem';
import get from 'lodash/get';

function mapStateToProps(state, ownProps) {
    const selected = get(state, `shoplist.selection[${ownProps.item.id}]`, false);
    return {
        selected: selected
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        toggleItem() {
            dispatch(toggleItem(ownProps.item.id));
        },
        remove() {
            dispatch(removeItem(ownProps.item.id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopListItem);
