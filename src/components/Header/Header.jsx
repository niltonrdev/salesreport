import styled from "styled-components";
import { BiMenu } from "react-icons/bi";

export default function Header() {
    return (
        <>
            <HeaderContainer>
                <MenuContainer>
                    <MenuIcon />
                    <Title>SalesReport</Title>
                    <Acess>
                        <p>Faça <span>LOGIN </span>ou <br />
                            crie seu <span>CADASTRO</span></p>
                    </Acess>
                </MenuContainer>
            </HeaderContainer>

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
  height: 55px;
  padding: 35px;
  height: 120px;
  background-color: #0678a6;
  `;

const Title = styled.h1`
  font-size: 55px;
  font-weight: 600;
  font-family: "Montserrat";

  color: #ffffff;

  margin-right: 200px;

  cursor: pointer;
`;

const MenuIcon = styled(BiMenu)`
  color: #ffffff;

  width: 30px;
  height: 30px;
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
`;