import { useState } from "react";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";


export default function App() {

  const [selectedBrand, setSelectedBrand] = useState(null);
  console.log(selectedBrand)

  return (
    <>
    <Header />
    <Section 
    onSelect={(data) => setSelectedBrand(data.brand)}
    />
    
    </>
  )
}
