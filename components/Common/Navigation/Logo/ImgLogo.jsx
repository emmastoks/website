import React from 'react';
import PropTypes from 'prop-types';
import Img from '../../../UI/Img';

const ImgLogo = ({ handleLoad }) => {
  return (
    <Img
      onLoad={handleLoad}
      src="/img/logo/logo-osoc-21.png"
      alt="open summer of code logo, very abstract, fun, but professional"
    />
  );
};

ImgLogo.defaultProps = {
  handleLoad: null
};

ImgLogo.propTypes = {
  handleLoad: PropTypes.func
};

export default ImgLogo;
