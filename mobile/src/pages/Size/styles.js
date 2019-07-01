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
