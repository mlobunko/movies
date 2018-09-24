import styled from 'styled-components';

export const theme = {
  container: {
    position: 'relative'
  },
  input: {
    width: '100%',
    background: 'rgba(0, 0, 0, 0)',
    color: 'white',
    height: 30,
    padding: '10px 20px',
    fontSize: 16,
    border: 'none',
    borderBottom: '1px solid white'
  },
  inputFocused: {
    outline: 'none'
  },
  inputOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  suggestionsContainer: {
    display: 'none'
  },
  suggestionsContainerOpen: {
    display: 'block',
    position: 'absolute',
    width: '100%',
    background: 'rgba(0, 0, 0, 0.8)',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    zIndex: 2
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  },
  suggestion: {
    cursor: 'pointer',
    padding: '10px 20px'
  },
  suggestionHighlighted: {
    backgroundColor: '#fff',
    color: '#000'
  }
};

export const StyledContainer = styled.div`
  width: 90%;
  max-width: 480px;
  margin: 0 auto;
  padding: 1rem 0rem 4rem 0rem;
`;
StyledContainer.displayName = 'StyledContainer';
