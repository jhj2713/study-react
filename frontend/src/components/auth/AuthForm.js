import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const StyledAuthForm = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;
const Fotter = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;
const StyledButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const textMap = {
  login: '로그인',
  register: '회원가입',
};

function AuthForm({ type, form, onChange, onSubmit, error }) {
  const text = textMap[type];
  return (
    <StyledAuthForm>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          valye={form.username}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          valye={form.password}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            valye={form.passwordConfirm}
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <StyledButtonWithMarginTop cyan fullWidth>
          {text}
        </StyledButtonWithMarginTop>
      </form>
      <Fotter>
        {type === 'register' ? (
          <Link to="/login">로그인</Link>
        ) : (
          <Link to="/register">회원가입</Link>
        )}
      </Fotter>
    </StyledAuthForm>
  );
}

export default AuthForm;
