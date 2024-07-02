import React from "react";
import './styles.css'
import Logo from "../../assets/logo.jpg";

function Footer () {
    return (
        <> 
        <footer>
            <img src={Logo} className="w-36 h-auto"/>
            <span>Todos os direitos reservados</span>
            <span>Desenvolvido por: Eder Tavares</span>
        </footer>
        </>
    )
}

export default Footer;