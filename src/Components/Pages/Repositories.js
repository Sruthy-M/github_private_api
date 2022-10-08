import React from "react";
import { Circles } from "react-loader-spinner";
import Repository from "./Repository";

const Repositories = ({ repositories, pageLoading }) => {
    if (pageLoading) {
        return <Circles height={100} width={100} radius={5} color="#4fa94d" ariaLabel="Circles-loading" wrapperStyle={{ justifyContent: "center", alignItems: "center", height: "100vh" }} visible={true} />;
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
