import { useEffect, useState } from "react";
import categories from "../../mocks/categories";
import productsByCategory from "../../mocks/products";
import brandsByProduct from "../../mocks/brand";
import styled from "styled-components";

//importado os mocks de categoria, produtos e marca

export default function Section({ onSelect }) {
  //onSelect como paramêtro pra selecionar a marca escolhida e retornar para o app

  const [category, setCategory] = useState(null);
  const [product, setProduct] = useState(null);
  const [brand, setBrand] = useState(null);

  //função de efeito acionada sempre que ocorrem mudanças em category, product, brand ou onSelect

  useEffect(() => {
    onSelect({ category, product, brand });
  }, [category, product, brand, onSelect]);

  //Handles para obter as opçoẽs escolhidas nos selects

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    setProduct(null);
    setBrand(null);
  };

  const handleProductChange = (e) => {
    const selectedProduct = e.target.value;
    setProduct(selectedProduct);
    setBrand(null);
  };

  const handleBrandChange = (e) => {
    const selectedBrand = e.target.value;
    setBrand(selectedBrand);
  };

  return (
    <>
  
        <SelectContainer>

          <SelectWrapper>
            <StyledLabel>
              <p>Categoria: </p>
              <StyledSelect
                value={category || ''}
                onChange={handleCategoryChange}
              >
                <option value="">Categoria</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </StyledSelect>
            </StyledLabel>
          </SelectWrapper>

          <SelectWrapper>
            <StyledLabel>
              <p>Produto: </p>
              <StyledSelect
                value={product || ''}
                onChange={handleProductChange}
              >
                <option value="">Produto</option>
                {category !== null && productsByCategory[category]?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </StyledSelect>
            </StyledLabel>
          </SelectWrapper>

          <SelectWrapper>
            <StyledLabel>
              <p>Marca: </p>
              <StyledSelect
                value={brand || ''}
                onChange={handleBrandChange}
              >
                <option value="">Marca</option>
                {product !== null && brandsByProduct[product]?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </StyledSelect>
            </StyledLabel>
          </SelectWrapper>
        </SelectContainer>
    </>
  );
}

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px; 

  @media screen and (max-width: 770px) {
    display: flex;
    flex-direction: column;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;  
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 8px;
  p {
    
  font-family: "Montserrat";
    font-size: 18px;
  }
`;

const StyledSelect = styled.select`
  width: 150px;  
  padding: 8px;
  font-size: 18px;
`;

