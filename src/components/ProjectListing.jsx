import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Swiper from 'react-id-swiper';
import Img from 'gatsby-image';
import sample from 'lodash/sample';
import { Container } from 'components';
import { overlay } from '../../config/theme';
import '../swiper.css';

const Wrapper = styled.div`
  width: 100%;
`;

const Item = styled.div`
  position: relative;
  width: 16rem;
  background-color: #1b2429;
  border-radius: 0.5rem;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  height: 525px;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const Content = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  a {
    color: #fff;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
      color: #fff;
      opacity: 1;
      text-decoration: none;
    }
  }
`;

const ImageWrapper = styled.div`
  > div {
    height: 100%;
    left: 0;
    position: absolute !important;
    top: 0;
    width: 100%;

    > div {
      position: static !important;
    }
  }
`;

const Overlay = styled.div`
  background-color: ${props => props.theme.brand.primary};
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`;

const params = {
  slidesPerView: 'auto',
  spaceBetween: 40,
  breakpoints: {
    460: {
      slidesPerView: 1,
    },
  },
};

const ProjectListing = ({ projectEdges }) => (
  <Container>
    <Wrapper>
      <Swiper {...params}>
        {projectEdges.map(project => {
          const overlayColor = sample(overlay);
          return (
            <Item key={project.node.fields.slug}>
              <Content>
                <ImageWrapper>
                  <Img fluid={project.node.frontmatter.cover.childImageSharp.fluid} />
                </ImageWrapper>
                <Link to={project.node.fields.slug}>
                  <Overlay style={{ backgroundColor: overlayColor }} />
                  <h2>{project.node.frontmatter.client}</h2>
                  <div>{project.node.frontmatter.service}</div>
                </Link>
              </Content>
            </Item>
          );
        })}
      </Swiper>
    </Wrapper>
  </Container>
);

export default ProjectListing;

ProjectListing.propTypes = {
  projectEdges: PropTypes.array.isRequired,
};
