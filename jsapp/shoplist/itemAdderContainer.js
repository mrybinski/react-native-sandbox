import { connect } from 'react-redux';
import { addItem } from './shoplistActions';
import ItemAdder from './itemAdder';

function mapDispatchToProps(dispatch) {
    return {
        addItem(text) {
            dispatch(addItem(text));
        }
    };
}

export default connect(null, mapDispatchToProps)(ItemAdder);
