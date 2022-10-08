import React from "react";
import UserInput from "../Shared/UserInput";

const Home = () => {
    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen">
            <h1 className="text-5xl, text-color='white', font-bold">Welcome to GitHub API</h1>
            
            <UserInput />
        </div>
    );
};

export default Home;
