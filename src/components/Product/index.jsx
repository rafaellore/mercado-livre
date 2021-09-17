import React from 'react';
import './Product.css';
import { IoIosArrowForward } from "react-icons/io";

export default function Product() {
    return (
        <section className="product">
            <div className="product-up">
                <p className="product-up-item-first">Voltar à lista</p> <p className="broke">|</p>
                <p className="product-up-item">Instrumentos Músicais</p><IoIosArrowForward size={10} className="product-up-icon"/>
                <p className="product-up-item">Instrumentos de Corda</p><IoIosArrowForward size={10} className="product-up-icon"/>
                <p className="product-up-item">Guitarra</p><IoIosArrowForward size={10} className="product-up-icon"/>
                <p className="product-up-item">Kits Guitarras y Amplificador</p>
                <div className="product-up-right">
                    <p className="product-up-item">Compartilhar</p>    
                    <p className="broke">|</p>
                    <p className="product-up-item">Vender um igual</p>
                </div>
            </div>
            <div className="product-mid">
                <div className="left-images">
                    <div className="left-image"></div>
                    <div className="left-image"></div>
                    <div className="left-image"></div>
                    <div className="left-image"></div>
                </div>
                <div className="active-image"></div>
            </div>
        </section>
    )
}
