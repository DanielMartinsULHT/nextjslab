/* app/produtos/page.tsx */ 

'use client'
import { Product } from '@/models/interface';
import useSWR from 'swr';
import ProductCard from '@/components/ProductCard/ProductCard';
import { useState, useEffect } from 'react';

export default function Municipalities() {

    const fetcher = (url: string) => fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSWR<Product[], Error>('/api/products',fetcher);
    //hook useState
    const [search, setSearch] = useState("")
    const [filteredData, setFilteredData] = useState<Product[]>([])

    //hook useEffect
    useEffect(() => {
        //verificar se data está vazio ou não
        if(!data) return;

        const newFilteredData = data.filter((product) => {
            return product.title.toLowerCase().includes(search.toLowerCase())
        })
        setFilteredData(newFilteredData)

    }, [search, data])

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!data) return <div>No data available</div>;

    return (
        <div style={{ 
          padding: '20px', 
          background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)', 
          minHeight: '100vh' 
        }}>
          <input
            type="text"
            placeholder="Pesquisar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              display: 'block',
              margin: '0 auto 20px',
              padding: '10px',
              width: '300px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '20px',
            marginTop: '20px'
          }}>
            {filteredData.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
      );
}
