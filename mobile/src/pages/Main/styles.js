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
`;
export const Cart = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 5,
    rigth: 5,
    bottom: 5,
  },
})`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #e5293e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const Scroll = styled.ScrollView`
  margin: -40px 30px 0 30px;
`;

export const Content = styled.View`
  flex: 1;
`;
export const Product = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
`;
export const Image = styled.Image`
  width: 78px;
  height: 78px;
`;
export const Infos = styled.View`
  flex: 1;
  align-self: stretch;
  padding: 5px 10px;
  justify-content: space-between;
`;
export const Name = styled.Text``;
export const Details = styled.Text`
  font-size: 11px;
  color: #666;
`;
export const Time = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const InfoTime = styled.Text`
  font-size: 11px;
  color: #666;
  padding-left: 5px;
`;
export const Qtd = styled.Text`
  color: #fff;
  font-weight: bold;
`;
