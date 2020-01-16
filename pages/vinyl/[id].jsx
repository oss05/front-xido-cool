import React from 'react'; 
import Router , { useRouter } from 'next/router';

export default function Vinyl() {
    const router = useRouter()
    const { id } = router.query

    console.log(router);
    

    const redirectVinyls = () => {
        Router.push("/vinyls")
    }

    return (
        <div>
            <p>Estás escuchando: {id}</p>
            <div>
                <button onClick={redirectVinyls}>See more vinyls</button>
            </div>
        </div>
    )
}