import styled from "styled-components";
import { BiMenu, BiUser } from "react-icons/bi";
import Swal from "sweetalert2";

export default function Header() {
  //Header fixo
  return (
    <>
      <HeaderContainer>
        <MenuContainer>
          <MenuIcon />
          <Title>SalesReport</Title>
          <Acess onClick={() => {
            Swal.fire({
              title: 'Cadastro e Login',
              text: 'Disponível em breve!',
              icon: 'info',
              confirmButtonText: 'OK'
            });
          }}>
            <p>Faça <span>LOGIN </span>ou <br />crie seu <span>CADASTRO</span></p>
          </Acess>
          <AcessIcon>
            <UserIcon />
          </AcessIcon>
        </MenuContainer>
      </HeaderContainer >

    </>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px;
  height: 120px;
  background-color: #0678a6;
  padding-left: 45px;
  `;

const Title = styled.h1`
  font-size: 55px;
  font-weight: 600;
  font-family: "Montserrat";
  margin-left: auto;  
  margin-right: auto;  
  color: #ffffff;
  cursor: pointer;
`;

const MenuIcon = styled(BiMenu)`
  color: #ffffff;

  width: 30px;
  height: 30px;

  @media screen and (max-width: 530px) {
    display: none;
  }
`;

const Acess = styled.div`
  display: "flex";
  align-items: center;
  p {
    font-family: "Montserrat";
    font-weight: 400;
    margin-right: 10px;
    margin-left: 20px;
    color: white;
  }
  span {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
  }
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

const AcessIcon = styled.div`
  display: flex;

  @media screen and (max-width: 470px) {
    display: none;
  }
`

const UserIcon = styled(BiUser)`
  color: #ffffff;
  width: 30px;
  height: 30px;
`;