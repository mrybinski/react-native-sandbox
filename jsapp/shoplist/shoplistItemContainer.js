import { connect } from 'react-redux';
import { toggleItem, removeItem, updateItemName } from './shoplistActions';
import ShopListItem from './shoplistItem';


function mapDispatchToProps(dispatch, ownProps) {
    return {
        toggleItem() {
            dispatch(toggleItem(ownProps.id));
        },
        remove() {
            dispatch(removeItem(ownProps.id));
        },
        updateItemName(newName) {
            dispatch(updateItemName(ownProps.id, newName));
        }
    };
}

export default connect(null, mapDispatchToProps)(ShopListItem);
