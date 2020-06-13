import React from "react";
import Router from "next/router";

export default function Custom404() {
    return (
        <div className="container">
            <main>
                <div className="banner error">
                    <h1>404 - Page Not Found</h1>
                    <button onClick={() => Router.push("/")}>HOMEPAGE</button>
                </div>
            </main>
        </div>
    )
}