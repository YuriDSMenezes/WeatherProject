import styled from 'styled-components'

export const ContainerRight = styled.div`
  grid-area: ContainerRight;
  padding:20px;
`;

export const  TitleContent = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
padding-bottom: 20px;
border-bottom: 1px solid #7d7d7d;

div {
    display: flex;
    align-items:center;
}
`
export const  MainContent = styled.div`
margin-top: 50px;
margin-bottom: 20px;
div:first-child {
    margin-bottom: 30px;
}

li {
    list-style: none;
    margin-bottom: 20px;
}

div {
    display:flex;
    justify-content: space-between;
}

`
export const  GraphicContent = styled.div`
padding-top: 30px;
border-top: 1px solid #999;
`