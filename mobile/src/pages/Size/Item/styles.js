import styled from 'styled-components/native';

export const SizeProduct = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background: #fff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  width: 150px;
  height: 190px;
`;
export const ImageSize = styled.Image``;

export const Name = styled.Text`
  font-size: 16px;
  color: #0b2031;
  font-weight: bold;
`;
export const Price = styled.Text`
  font-size: 16px;
  color: #0b2031;
  opacity: 0.6;
  font-weight: bold;
`;

export const BoxImage = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Details = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
