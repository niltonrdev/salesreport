import { useState } from "react";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Chart from "./components/Chart/Chart";


export default function App() {

  const [selectedBrand, setSelectedBrand] = useState(null);

  return (
    <>
    <Header />
    <Section 
    onSelect={(data) => setSelectedBrand(data.brand)}
    />
    <Chart 
    selectedBrand={selectedBrand}/>
    </>
  )
}
