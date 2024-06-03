"use client";

import React from "react";
import { Grid } from "react-loader-spinner";

const BoxLoader = ({ loading }) => {
    return (
        <div
            className={`box ${loading ? "loading" : ""}`}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                zIndex: "999",
                opacity: loading ? 1 : 0, // Set opacity based on loading state
                transition: "opacity 0.5s ease-in-out", // Apply a smooth transition on opacity
            }}
        >
            <Grid
                height='80'
                width='80'
                color='#efb0b0'
                ariaLabel='grid-loading'
                radius='12.5'
                wrapperStyle={{}}
                wrapperClass=''
                visible={true}
            />
        </div>
    );
};

export default BoxLoader;
