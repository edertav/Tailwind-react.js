import React from "react";
import Logo from "../../assets/logo.jpg";

function Header () {
    return (
        <header className="h-90 flex justify-around items-center bg-black">
            <img src={Logo} className="w-36 h-auto"/>
            <nav className="w-3/5">
                <ul className="flex w-full justify-between">
                    <li className="list-none text-aliceblue cursor-pointer text-custom-19 transition duration-500 font-Kdam hover:text-customRed">Home</li>
                    <li className="list-none text-aliceblue cursor-pointer text-custom-19 transition duration-500 font-Kdam hover:text-customRed">Contato</li>
                    <li className="list-none text-aliceblue cursor-pointer text-custom-19 transition duration-500 font-Kdam hover:text-customRed">Fotos</li>
                    <li className="list-none text-aliceblue cursor-pointer text-custom-19 transition duration-500 font-Kdam hover:text-customRed">Comentários</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;