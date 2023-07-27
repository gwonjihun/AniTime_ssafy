import React from "react";
import { styled } from "styled-components";
import { MainContainer} from "styled/styled";

export default function Missing() {
  return (
    <PageContainer>
        <MainContainer>
           <ListContainer>
           <h3>실종 동물 목록</h3>
           </ListContainer>
        <DetailViewBox>
          <h3>상세정보창</h3>
        </DetailViewBox>
      </MainContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  margin: auto;
  display:flex;
  align-items: center;
  justify-content: center;
`;

const ListContainer = styled.div`
  flex:1;
  width: 700px;
  height: 600px;
  padding: 10px;
  overflow-y: scroll;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const DetailViewBox = styled.div`
  flex: 1;
  width: 200px;
  height: 580px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 93px;
`;
