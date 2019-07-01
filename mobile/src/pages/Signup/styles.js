import styled from 'styled-components/native';
// import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #999999;
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  align-items: center;
  width: 100%;
  padding: 20px;
`;

export const Logo = styled.Image`
  width: 72px;
  height: 72px;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: #fff;
  font-size: 18px;
  padding: 0 20px;
  margin: 0 0 10px 0;
`;

export const InputPass = styled.TextInput`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: #fff;
  font-size: 18px;
  padding: 0 20px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: #e5293e;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const SignUp = styled.TouchableOpacity`
  margin-top: 30px;
`;

export const TextSignUp = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
export const TextError = styled.Text`
  margin-top: 5px;
  color: #fff;
`;
