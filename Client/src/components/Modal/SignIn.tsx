import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormData } from '../../state/typeDefs';
import {
  Form,
  Input,
  Title,
  KakaoButton,
  GuestButton,
  LoginButton,
  SignUpLink,
  ErrorMessage,
} from '../../styled/modal';

const SignIn = () => {
  const [invalid, setInvalid] = useState<boolean>(true);
  const [infoCheck, setInfoCheck] = useState<string>('');

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });

  const emailPattern = {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: '이메일 형식으로 입력해주세요',
  };

  const passwordPattern = {
    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    message: '8자이상 / 영문 / 숫자 / 특수문자를 조합해주세요',
  };

  const onSubmit = () => {};

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>로그인</Title>
      <Input
        type="text"
        placeholder="Email"
        error={errors.email?.message}
        {...register('email', {
          required: '이메일을 입력해주세요',
          pattern: emailPattern,
        })}
      />
      <ErrorMessage>{errors.email?.message}</ErrorMessage>
      <Input
        type="text"
        placeholder="Password"
        error={errors.password?.message}
        {...register('password', {
          required: '비밀번호를 입력해주세요',
          pattern: passwordPattern,
        })}
      />
      {invalid ? <ErrorMessage>{errors.password?.message}</ErrorMessage> : <ErrorMessage>{infoCheck}</ErrorMessage>}
      <LoginButton>로그인</LoginButton>
      <SignUpLink>회원가입</SignUpLink>
      <KakaoButton>카카오로 로그인 </KakaoButton>
      <GuestButton>게스트로 로그인 </GuestButton>
    </Form>
  );
};
export default SignIn;