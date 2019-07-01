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
  margin-left: 15px;
`;
export const IconExit = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 5,
    rigth: 5,
    bottom: 5,
  },
})``;
export const Scroll = styled.ScrollView`
  margin: -40px 30px 0 30px;
`;

export const Content = styled.View`
  flex: 1;
`;
export const Orders = styled.View`
  background: #fff;
  border-radius: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 15px 20px;
  margin-bottom: 10px;
`;
export const Name = styled.Text`
  font-size: 16px;
  color: #0b2031;
  padding: 3px;
`;
export const Details = styled.Text`
  font-size: 12px;
  color: #666;
  padding: 3px;
`;
export const Price = styled.Text`
  font-size: 16px;
  color: #0b2031;
  font-weight: bold;
  padding: 3px;
`;
