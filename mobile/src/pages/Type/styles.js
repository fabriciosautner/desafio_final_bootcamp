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
  align-items: center;
  padding: 0 30px;
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

export const Scroll = styled.ScrollView`
  margin: -40px 30px 0 30px;
`;
export const Content = styled.View`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  align-content: flex-start;
  flex-direction: row;
`;
export const TypeProduct = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background: #fff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
`;
export const Image = styled.Image`
  width: 130px;
  height: 126px;
`;

export const Name = styled.Text`
  font-size: 16px;
  color: #0b2031;
  font-weight: bold;
  padding: 20px 0 10px 0;
`;
