import styled from 'styled-components'

export const ContainerLeft = styled.div`
  grid-area: ContainerLeft;
  background-image: url(${({ bgImg }) => bgImg});
  background-size: cover;
  padding:20px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopContent = styled.div`
display: flex;
align-itens:center;
justify-content: space-between;

  input {
      border:none;
      height:37px;
      background: #1e1d1e;
      text-align: center;
      color:#fff;
  }
  input::placeholder {
      color:#fff;
      text-align: center;
  }

  button{
        width: 100px;
        padding: 10px;
        color: #fff;
        background: #1e1d1e;
        font-weight: bold;
        letter-spacing: 1px;
        align-self: center;
        border:none;
        
        margin-left:5px;
    }
    button:hover {
        background: #444040
    }

`
export const DegreesInfo = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
padding-left: 30px;
position:relative;
    h1{
        font-size: 150px;
        margin-bottom: 100px;
        
          span{
               font-size: 50px;
            }
    }

    h1 {
        &:after {
            content: '';
             background-color: #424142;
      height: 1.5px;
      min-width: 600px;
      left:30px;
      position: absolute;
      bottom: 50px;
        }
    }

    
`