import React from 'react';
import { Navbaris } from './components/navbaris';
import './designs/About.css'
import { Appy } from './components/SelectCountry';

export const Select: React.FC = () => {
    return (
        <>
        <Navbaris />
        <Appy/>
        </>
    )
}