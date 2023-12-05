import { useEffect, useState } from "react";
import categories from "../../mocks/categories";
import productsByCategory from "../../mocks/products";
import brandsByProduct from "../../mocks/brand";

export default function Section({ onSelect }) {
    const [category, setCategory] = useState(null);
    const [product, setProduct] = useState(null);
    const [brand, setBrand] = useState(null);
    
  
    useEffect(() => {
      onSelect({ category, product, brand });
    }, [category, product, brand, onSelect]);
  
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
        <div>
          <label>
            Categoria:
            <select
              value={category || ''}
              onChange={handleCategoryChange}
            >
              <option value="">Categoria</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
  
          <label>
            Produto:
            <select
              value={product || ''}
              onChange={handleProductChange}
            >
              <option value="">Produto</option>
              {category !== null && productsByCategory[category]?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
  
          <label>
            Marca:
            <select
              value={brand || ''}
              onChange={handleBrandChange}
            >
              <option value="">Marca</option>
              {product !== null && brandsByProduct[product]?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
      </>
    );
  }