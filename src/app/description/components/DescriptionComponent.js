import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledDescription,
  StyledTagline,
  StyledLabel,
  StyledList,
  StyledRow,
  StyledRowRight,
  StyledRowLeft
} from './styles';

export const DescriptionComponent = ({
  title,
  tagline,
  overview,
  genres,
  productionCompanies,
  releaseDate,
  runtime,
  revenue,
  voteAvarage
}) => (
  <StyledDescription>
    <br />
    <h2>{title}</h2>
    <StyledTagline>{tagline}</StyledTagline>
    <p>{overview}</p>
    <br />
    <StyledList>
      <StyledLabel>Genres:</StyledLabel> {genres}
    </StyledList>
    <StyledList>
      <StyledLabel>Production Companies:</StyledLabel> {productionCompanies}
    </StyledList>
    <StyledRow>
      <StyledRowLeft>
        <div>
          <StyledLabel>Release Date:</StyledLabel>
        </div>
        <div>{releaseDate}</div>
      </StyledRowLeft>
      <StyledRowRight>
        <div>
          <StyledLabel>Runtime:</StyledLabel>
        </div>
        <div>{runtime} mins</div>
      </StyledRowRight>
    </StyledRow>
    <StyledRow>
      <StyledRowLeft>
        <div>
          <StyledLabel>Revenue:</StyledLabel>
        </div>
        <div>${revenue}</div>
      </StyledRowLeft>
      <StyledRowRight>
        <div>
          <StyledLabel>Vote Avarage:</StyledLabel>
        </div>
        <div>
          {voteAvarage}
          /10
        </div>
      </StyledRowRight>
    </StyledRow>
    <br />
    <br />
    <br />
  </StyledDescription>
);

DescriptionComponent.displayName = 'DescriptionComponent';

export default DescriptionComponent;

DescriptionComponent.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.string,
  productionCompanies: PropTypes.string,
  releaseDate: PropTypes.string,
  runtime: PropTypes.string,
  revenue: PropTypes.string,
  voteAvarage: PropTypes.string
};
