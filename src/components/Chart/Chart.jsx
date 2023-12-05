import styled from "styled-components";
import salesData from "../../mocks/salesData";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


//importado o mock de dados das vendas relacionada a produto

export default function Chart(selectedBrand) {

    const brandData = salesData[selectedBrand.selectedBrand]; //recebe a marca escolhida por parametro e procura no mock

    //organiza os dados para apresentar no gráfico

    const data = brandData ? brandData.map(b => ({
        mes: b.mes,
        vendas: b.valor,
    })) : [];

    return (
        <>
            <CenteredGraphContainer>
                <GraphContainer>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="mes" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="vendas" fill="#0678a6" activeBar={<Rectangle fill="red" stroke="blue" />} />

                        </BarChart>
                    </ResponsiveContainer>
                </GraphContainer>
            </CenteredGraphContainer>
        </>
    )
}

const CenteredGraphContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px; 
`;


const GraphContainer = styled.div`
  width: 80%;
  height: 400px;
`;