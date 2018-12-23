import { connect } from 'react-redux';

import Header from './component';

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {};

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
