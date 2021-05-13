import styled from 'styled-components/native';

export const BottomView = styled.View.attrs({
  elevation: 8
})`
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 53px;
  height: 56px;
  background: #FFF;
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-radius: 2px;
`;

export const BottomViewBox = styled.View`
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const Divider = styled.View`
  width: 0.1px;
  height: 16px;
  border: 1px solid rgba(151, 151, 151, 0.2);
`;

export const BottomMenuTitle = styled.Text`
  font-family: 'SFProBold';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 1px;
  color: #3F4043;
  margin-left: 10px;
`;

