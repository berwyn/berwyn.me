import { connect } from 'react-redux';

import PaintGrid from '../../components/paints/paint-grid';

const mapStateToProps = state => {
  return {
    paints: state.selectedPaints,
  };
};

const mapDispatchToProps = () => ({});

const SelectedPaintGrid = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaintGrid);

export default SelectedPaintGrid;
