import React, { Children } from 'react';
import Navbar from '../components/nav'

export default function Layout({children}) {
    
    return (
        <div>
            <Navbar/>
            <div>
                {children}
            </div>
        </div>
    )
}