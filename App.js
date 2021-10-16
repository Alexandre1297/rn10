import React from 'react';
import styled from 'styled-components/native';
import lista from './src/lista';

const Page = styled.SafeAreaView`
  flex: 1;
`;

const Item = styled.TouchableHighlight`
  padding: 10px;
  flex-direction: row;
`;

const ItemText = styled.Text`
  font-size: 15px;
  flex: 1;
`;

const Scroll = styled.ScrollView`
  flex: 1;
`;

const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 5px solid #00F;
`;

export default () => {
  return (
    <Page>
      <Scroll>
        {lista.map((item, index)=> {
          return (
            <Item key = {index} onPress ={()=>{}} underlayColor="transparent" activeOpacity= {0.1}>
            <>
              <ItemText>{item.task}</ItemText>
              <ItemCheck></ItemCheck>
            </>
          </Item>
          );
        })}
      </Scroll>
    </Page>
  );
}