import React from 'react'
import styled, { css } from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/layout'
import { Link } from 'gatsby'
import CoverImage from '../components/CoverImage';

const IndexPage = ({ data }) => (
  <Layout>
    <Grid>
      <CoverImage fluid={data.desktop.childImageSharp.fluid}>
        <h1>Hi people</h1>
      </CoverImage>
      <CoverImage fluid={data.desktop.childImageSharp.fluid}>
        <p>Welcome to the <code>gatsby-background-image</code> test site.</p>
        <p>Below, you see an image rendered by <code>gatsby-background-image</code></p>
        <p>To the right, the same image rendered by <code>gatsby-image</code></p>
        <Link to="/page-2/">Go to page 2</Link>
      </CoverImage>
    </Grid>
  </Layout>
)

export default IndexPage

// Media Breakpoints
export const sizes = {
  xSmall: 414,
  small: 600,
  medium: 880,
  tablet: 1024,
  large: 1280,
  xLarge: 1440,
};

export const media = Object.keys(sizes).reduce((accumulator, size) => {
  /* Code below based off of the assumption that the body font-size is 16px */
  const emSize = sizes[size] / 16;
  const mediaSize = accumulator;
  mediaSize[size] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return mediaSize;
}, {});

const Grid = styled.div`
  h1, p, code {
    color: white;
  }
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  ${media.medium`
    grid-template-columns: 1fr;
  `}
`;

export const query = graphql`
query {
  desktop: file(relativePath: { eq: "seamless-bg-desktop.jpg" }) {
    childImageSharp {
      fluid(quality: 100, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
}
`;