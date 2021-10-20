import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  color: white;
  background: ${palette.gray[8]};
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  outline: none;
  cursor: pointer;
  &:hover {
    background: ${palette.gray[6]};
    transition: background 0.2s;
  }
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
