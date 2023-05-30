import React from "react";
import Button from '@mui/material/Button';
 

export default function HomeView() {
    return (
        <div className="w-full flex flex-col justify-center h-screen p-4">
           <p className="mb-2">WELCOME TO MY SPACE</p>
           <h1 className="font-bold text-5xl mb-2">Hi, I'm Aska Kauchi a Developer</h1>
           <p className="text-xl mb-2">I'm a Kenyan based Frontend Developer focused on crafting clean and user friendly expriences.</p>
           <Button variant="contained" className="w-fit">Download CV</Button>
        </div>
    )
} 