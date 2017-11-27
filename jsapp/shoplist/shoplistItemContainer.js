import { connect } from 'react-redux';
import { toggleItem, removeItem } from './shoplistActions';
import ShopListItem from './shoplistItem';


function mapDispatchToProps(dispatch, ownProps) {
    return {
        toggleItem() {
            dispatch(toggleItem(ownProps.id));
        },
        remove() {
            dispatch(removeItem(ownProps.id));
        }
    };
}

export default connect(null, mapDispatchToProps)(ShopListItem);
