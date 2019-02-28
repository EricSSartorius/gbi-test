import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';

export const CoverImage = ({
  children,
  fluid,
  backgroundColor,
  backgroundPosition,
}) => (
    <BGImage
      Tag="div"
      fluid={fluid}
      backgroundColor={backgroundColor}
      backgroundPosition={backgroundPosition}
    >
      <Content>
        {children}
      </Content>
    </BGImage>
  );

const BGImage = styled(BackgroundImage)`
  &:after {
    z-index: 0 !important;
    background-position: ${({ backgroundPosition }) => backgroundPosition};
  }
`;

const Content = styled('div')`
  display: flex; /* Must be display flex or grid to work with a positive z-index value */
  flex-direction: column;
  padding: 50px;
  * {
    z-index: 1;
  }
`;

export default CoverImage;

CoverImage.propTypes = {
  fluid: PropTypes.string,
  alt: PropTypes.string,
  backgroundColor: PropTypes.string,
  overlay: PropTypes.string,
  smallOverlay: PropTypes.string,
  children: PropTypes.shape.isRequired,
  backgroundPosition: PropTypes.string,
};

CoverImage.defaultProps = {
  overlay: '',
  smallOverlay: '',
  fluid: '',
  alt: '',
  backgroundColor: '',
  backgroundPosition: 'center center',
};