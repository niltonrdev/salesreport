import { useState } from "react";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Chart from "./components/Chart/Chart";
import styled from "styled-components";

export default function App() {

  const [selectedBrand, setSelectedBrand] = useState(null);

  //Renderização dos componentes de cabeçalho, sessão onde fica os selects e apresentação do gráfico.

  return (
    <>
      <Header />
      <Section onSelect={(data) => setSelectedBrand(data.brand)} />
      <InfoText>
        <p>Sales By Month for: {selectedBrand || 'Sem marca escolhida'}</p>
      </InfoText>

      <Chart selectedBrand={selectedBrand} />
    </>
  )
}

const InfoText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px; 
  margin-top: 20px;
  p {
    font-family: 'Montserrat';
    text-align: 'center';
  }
`;