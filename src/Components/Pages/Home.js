import React from "react";
import UserInput from "../Shared/UserInput";

const Home = () => {
    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen">
            <h1 style={{marginLeft: "650px", marginTop: "100px"}} className="text-5xl font-bold">Welcome to GitHub</h1>
            <br/> 
             <UserInput />
        </div>
    );
};

export default Home;
