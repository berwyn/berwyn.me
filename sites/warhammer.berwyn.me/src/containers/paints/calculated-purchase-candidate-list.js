import { connect } from 'react-redux';
import PurchaseCandidateList from '../../components/paints/purchase-candidate-list';

const mapStateToProps = state => ({
  candidates: state.purchaseCandidates,
});

const mapDispatchToProps = dispatch => ({});

const CalculatedPurchaseCandidateList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseCandidateList);

export default CalculatedPurchaseCandidateList;
