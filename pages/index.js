import React, {Component} from "react";
import Link from "next/link";
import Router from "next/router";

class IndexPage extends Component {
    static getInitialProps(context) {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({appName: "Next.js App"});
            }, 1000);
        });
        return promise;
    }

    render() {
        return (
            <div className="container">
                <main>
                    <div className="banner">
                        <h1>The Main Page of {this.props.appName}</h1>
                        <p>
                            Go to{" "}
                            <Link href="/auth">
                                <a>Auth page</a>
                            </Link>
                        </p>
                        <button onClick={() => Router.push("/nextjs")}>Welcome to Next.js!</button>
                    </div>
                </main>
            </div>
        );
    }
}

export default IndexPage;
