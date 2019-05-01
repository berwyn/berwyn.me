import { connect } from 'react-redux';

import PaintCard from '../../components/paints/paint-card';
import { selectPaint } from '../../actions/selected-paint';

const mapStateToProps = (state, ownProps) => {
  return {
    paint: ownProps.paint,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(selectPaint(ownProps.paint)),
  };
};

const SelectPaintCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaintCard);

export default SelectPaintCard;
