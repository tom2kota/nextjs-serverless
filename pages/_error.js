import React from 'react';
import Link from 'next/link';

const errorPage = () => (
    <div className="container">
        <main>
            <div className="banner error">
                <h1>Oops, something went wrong.</h1>
                <p>Back to <Link href="/"><a>Homepage</a></Link></p>
            </div>
        </main>
    </div>
);

export default errorPage;