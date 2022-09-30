import React from "react";
import { Circles } from "react-loader-spinner";
import Repository from "./Repository";

const Repositories = ({ repositories, pageLoading }) => {
    if (pageLoading) {
        return <Circles height={70} width={70} radius={4} color="#4fa94d" ariaLabel="ball-triangle-loading" wrapperStyle={{ justifyContent: "center", alignItems: "center", height: "100vh" }} visible={true} />;
    }
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-5">
                {repositories.map((repository) => (
                    <Repository key={repository.id} repository={repository} />
                ))}
            </div>
        </div>
    );
};

export default Repositories;
