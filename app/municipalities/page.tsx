/* app/municipalities/page.tsx */ 

'use client'
import React from 'react';
import { Municipality } from '@/models/interface';
import useSWR from 'swr';
import MunicipalityCard from '@/components/MunicipalityCard/MunicipalityCard';

export default function Municipalities() {

    const fetcher = (url: string) => fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSWR<Municipality[], Error>('/api/products',fetcher);

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!data) return <div>No data available</div>;

    return <>
        {data.map((municipality) => (
            <MunicipalityCard 
                key={municipality.id} 
                id={municipality.id}
                name={municipality.name}
                district_name={municipality.district_name}
            />
        ))}
    </>
}
