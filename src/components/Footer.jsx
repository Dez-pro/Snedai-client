import React from "react";
import { Database } from "lucide-react";

const Footer = () => {
    return (
        <footer id="Footer" className="px-6 md:px-16 lg:px-24 xl:px-32  w-full mt-10 pt-4 text-gray-500  rounded-xl hover: transition bg-gradient-to-r from-sky-100 to-[#34404c]">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                <div className="md:max-w-96">
                    {/* Logo AirData */}
                    <a href="/" className="text-2xl font-bold">
                        <div className="flex items-center">
                            <Database size={36} className="text-blue-600" />
                            <span className="text-black" translate="no">Air</span>
                            <span className="text-blue-600" translate="no">Data</span>
                        </div>
                    </a>
                    {/* Objectif du projet */}
                    <p className="text-sm md:text-base mx-auto   font-semibold  text-slate-900 max-md:px-2 mt-1 max-w-lg">
                        AirData est une plateforme dédiée à la collecte, l'analyse et la visualisation de données
                        aériennes en temps réel. Elle permet d’obtenir des insights précis pour optimiser les décisions
                        et améliorer l’efficacité opérationnelle.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5  text-slate-900" translate="no">Links</h2>
                        <ul className="text-sm space-y-2 text-white font-semibold ">
                            <li className="hover:text-slate-300 transition-all duration-300 "><a href="#hero">Accueil</a></li>
                            <li className="hover:text-slate-300 transition-all duration-300 "><a href="#service">Services</a></li>
                            <li className="hover:text-slate-300 transition-all duration-300 "><a href="#features">Fonctionnalités</a></li>
                            <li className="hover:text-slate-300 transition-all duration-300 "><a href="#about">A propos</a></li>
                            
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5  text-slate-900">Info-Plus</h2>
                        <div className="text-sm space-y-2   text-white font-semibold">
                            <p>+225-05-55-40-27-96</p>
                            <p>airdatapass@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="  pt-4 text-center text-sm md:text-sm pb-5 font-semibold  text-slate-900">
                Copyright 2025 © <a href="/">AirData</a>. All Rights Reserved.
            </p>
        </footer>
    );
};
export default  Footer;