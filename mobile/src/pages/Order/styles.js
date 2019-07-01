import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #d9d9d9;
`;

export const BackgroundTop = styled.ImageBackground``;
export const Header = styled.View`
  height: ${getStatusBarHeight() + 120}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;
export const Left = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const IconBack = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 5,
    rigth: 5,
    bottom: 5,
  },
})``;
export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  padding-left: 15px;
`;
export const Amount = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
export const Scroll = styled.ScrollView`
  margin: -40px 30px 0 30px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
`;
export const ButtonCheckout = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background: #e5293e;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;
  border-radius: 25px;
`;
export const TextCheckout = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  margin-right: 10px;
  font-size: 16px;
`;
export const Note = styled.TextInput`
  background: #fff;
  color: #999999;
  font-size: 16px;
  width: 100%;
  height: 150px;
  padding: 5px 20px;
  border-radius: 10px;
`;
export const Cep = styled.TextInput`
  background: #fff;
  color: #999999;
  font-size: 16px;
  width: 100%;
  height: 40px;
  padding: 5px 20px;
  border-radius: 10px;
  margin-top: 10px;
`;
export const Line = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;
export const Street = styled.TextInput`
  background: #fff;
  color: #999999;
  font-size: 16px;
  width: 70%;
  height: 40px;
  padding: 5px 20px;
  border-radius: 10px;
  margin-right: 10px;
`;
export const Number = styled.TextInput`
  background: #fff;
  color: #999999;
  font-size: 16px;
  width: 25%;
  height: 40px;
  padding: 5px 20px;
  border-radius: 10px;
`;
export const District = styled.TextInput`
  background: #fff;
  color: #999999;
  font-size: 16px;
  width: 100%;
  height: 40px;
  padding: 5px 20px;
  border-radius: 10px;
  margin-top: 10px;
`;
