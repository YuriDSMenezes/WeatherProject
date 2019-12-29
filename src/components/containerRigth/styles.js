import styled from 'styled-components'

export const PieceContainer = styled.div` 
padding: 20px;
&:nth-child(1)
 {
    line-height:40px;
 }
 div {
    display:flex;
    justify-content: space-between;
    align-itens: center;
 }

  & + div {
      margin-top: 30px;
      border-top: 1px solid #7d7d7d;

      div:nth-child(1){
          margin-top: 20px
        margin-bottom: 30px;
      }
  }

  div h3 {
      color: #7d7d7d;
      height: 40px;
  }

  li {
      list-style:none;
      color:#7d7d7d;
      &+li {
          margin-top: 20px;
      }
  }

`