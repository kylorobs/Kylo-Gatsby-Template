import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import styled, { keyframes } from "styled-components";

const slideRight = keyframes`
  0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const SlideIn = styled.div`
  position: absolute;
  width: 150px;
  opacity: 0;
  top: 0;
  right: 5px;
  animation: ${slideRight} 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0s forwards;
  
  @media (max-width: 1000px){
    width: 100px;
    right: 5px;
  }
`

const CCTV = props => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "cctv.svg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
        extension
        publicURL
      }
    }
  `)

  return (
    <SlideIn>
        <img src={data.placeholderImage.publicURL} alt="CCTV" />
    </SlideIn>
  )
}

export default CCTV;

