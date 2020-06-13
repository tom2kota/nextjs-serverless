import React from 'react';
import Router from "next/router";

const User = (props) => (
    <div>
        <h1>{props.name}</h1>
        <p># {props.age}</p>
        <button onClick={() => Router.push("/")}>HOMEPAGE</button>
        <style jsx>{`
            div {
                border: 1px solid #eee;
                box-shadow: 0 2p 3px #ccc;
                padding: 20px;
                text-align: center;
            }
        `}</style>
    </div>
);

export default User;