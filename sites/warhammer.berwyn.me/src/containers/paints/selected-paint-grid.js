import { connect } from 'react-redux';

import PaintGrid from '../../components/paints/paint-grid';
import DeselectingPaintCard from './deselecting-paint-card';

const mapStateToProps = state => {
  return {
    paints: state.selectedPaints,
    itemComponent: DeselectingPaintCard,
  };
};

const mapDispatchToProps = () => ({});

const SelectedPaintGrid = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaintGrid);

export default SelectedPaintGrid;
