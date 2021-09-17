import React from 'react';
import './Header.css';
import { GiPositionMarker } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

import { RiTicket2Line } from "react-icons/ri";

export default function Header() {
    return (
        <header>
            <div className="left-side">
                <img src="https://yata-apix-7cec2e1b-07a2-4ae2-bc7f-8554bb9930c0.lss.locawebcorp.com.br/ee581661c0af40e48cfd070de3258f72.png"
                height="40px" width="60px"
                />
                <div className="marker">
                    <div className="icon-marker">
                    <GiPositionMarker size={25}/>
                    </div>
                    <p className="first-p">Informe seu</p>
                    <p className="last-p">CEP</p>
                </div>
            </div>

            <div className="mid-side">
                <input type="text" className="search-mid" placeholder="Buscar produtos, marcas e muito mais..."/>
                <AiOutlineSearch size={20} className="search-icon"/>
                <div className="categories">
                    <div className="categories-button">
                    <p>Categorias</p>
                    <IoIosArrowDown size={10} className="categorie-icon"/>
                    </div>
                    <p>Ofertas do dia</p>
                    <p>Histórico</p>
                    <p>Supermercado</p>
                    <p>Moda</p>
                    <p>Vender</p>
                    <p>Contato</p>
                </div>
            </div>
            <div className="right-side">
                <div className="up-right">
                    <RiTicket2Line size={35} className="ticket-icon"/>
                    <p>Descontaço com até 70% OFF</p>
                </div>
                <div className="down-right">
                    <p>Crie sua conta</p>
                    <p>Entre</p>
                    <p>Compras</p>
                    <AiOutlineShoppingCart size={25} className="cart-icon"/>
                </div>
            </div>
        </header>
    )
}
