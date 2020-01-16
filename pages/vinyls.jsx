import React from 'react';
import Layout from './layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import FlipCard from "react-flip-cards";
import '../node_modules/react-flip-cards/build/index.css';

export default function Vinyls({ vinyls }) {
    
    return (
        <Layout>
            <h2>Vinyls Works!!</h2>
            <div>
                {
                    vinyls.map((vinyl, index) => (
                        <Link key={index} href="/vinyl/[vinyl]" as={`/vinyl/${vinyl.id}`}>
                            <a style={{ margin: "0 10px" }}>
                                {/* <FlipCard 
                                    img={vinyl.image} // all props
                                    fgColor="#ff0000" // front card background color
                                    bgColor="#00ff00" // back card background color
                                /> */}
                                {vinyl.name}
                            </a>
                        </Link>
                    ))
                }
            </div>
        </Layout>
    )
}



Vinyls.getInitialProps = async () => {
    
    const res = await fetch("https://api.myjson.com/bins/b2epm");
    const vinyls = await res.json();
    
    return { vinyls };
    
}