import React from "react";

import User from "../../components/User";

const authIndexPage = (props) => (
    <div className="text-center">
        <h1>{props.appName}</h1>
        <User name="Tom Kota" age={10}/>
    </div>
);

authIndexPage.getInitialProps = context => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({appName: "Auth page"});
        }, 1000);
    });
    return promise;
};

export default authIndexPage;
