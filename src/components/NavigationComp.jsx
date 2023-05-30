import React from "react";
import Button from '@mui/material/Button';
import portfolio from "../assets/sample-portfolio-2.svg"

export default function NavigationComp() {
    const coreNavigationItems = [
        {id: 1, name: "Home", comp: "/"},
        {id: 2, name: "About", comp: "/about"},
        {id: 3, name: "Services", comp: "/service"},
        {id: 4, name: "Skills", comp: "/skill"},
        {id: 5, name: "Education", comp: "/education"},
        {id: 6, name: "Experience", comp: "/experience"},
        {id: 7, name: "Contact", comp: "/contact"},

    ];

    const coreNavigationButtons = coreNavigationItems.map((item) => {
        return (
            <div key={item.id}>
                <a href={item.comp}>
                <Button variant="text">{item.name}</Button>
                </a>
            </div>
        )
    })

    return (
        <div className="flex flex-col bg-slate-100 items-center w-1/5 h-screen">
            <div className="m-2">
                <img src={portfolio} className="w-48" alt="portfolio-icon" />
                <h1 className="font-semibold text-lg text-center">Aska Kauchi</h1>
            </div>
            { coreNavigationButtons }
        </div>
    )
}