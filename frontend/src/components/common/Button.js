import styled, { css } from 'styled-components';
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

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `}
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
