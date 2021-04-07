import React from 'react';
import { createPortal } from 'react-dom';

const portalRoot = document.getElementById('portal');

class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount = () => {
    portalRoot.appendChild(this.el);
  };

  componentWillUnmount = () => {
    portalRoot.removeChild(this.el);
  };

  render() {
    const { children } = this.props;
    return createPortal(children, this.el);
  }
}

export default Portal;
