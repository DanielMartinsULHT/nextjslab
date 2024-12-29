/* app/produtos/page.tsx */ 

'use client'
import React from 'react';
import { Product } from '@/models/interface';
import useSWR from 'swr';
import ProductCard from '@/components/ProductCard/ProductCard';

export default function Municipalities() {

    const fetcher = (url: string) => fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSWR<Product[], Error>('/api/products',fetcher);

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!data) return <div>No data available</div>;

    return <>
        {data.map((products) => (
            <ProductCard 
                id={products.id}
                title={products.title}
                price={products.price}
                description={products.description}
                category={products.category}
                image={products.image}
                rating={products.rating}
            />
        ))}
    </>
}
