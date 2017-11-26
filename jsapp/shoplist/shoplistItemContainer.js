import { connect } from 'react-redux';
import { toggleItem } from './shoplistActions';
import ShopListItem from './shoplistItem';

function mapStateToProps(state, ownProps) {
    const selected = state.shoplist.getIn(['selection', ownProps.id]) || false;
    return {
        selected: selected
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        toggleItem() {
            dispatch(toggleItem(ownProps.id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopListItem);
