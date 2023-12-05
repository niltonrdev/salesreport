import styled from "styled-components";
import salesData from "../../mocks/salesData";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart(selectedBrand) {

    const brandData = salesData[selectedBrand.selectedBrand];
    
    const data = brandData ? brandData.map(b => ({
        mes: b.mes,
        valor: b.valor,
    })) : [] ;

    console.log(data)
    return (
        <>
        <GraficoContainer>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
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
                    <YAxis  />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="valor" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
            </GraficoContainer>
        </>
    )
}

const GraficoContainer = styled.div`
    width: 830px;
    height: 450px;
`