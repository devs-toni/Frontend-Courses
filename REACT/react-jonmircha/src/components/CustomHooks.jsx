import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

export default function CustomHooks() {
    let url = 'https://pokeapi.co/api/v2/pokemon/';

    let { data, isPending, error } = useFetch(url);

    return (
        <>
            <h2>Custom Hooks</h2>
            <h3>{JSON.stringify(isPending)}</h3>
            <h3>{JSON.stringify(error)}</h3>
            <h3>
                <pre style={{whiteSpace:"pre-wrap"}}>
                    <div>
                        <code>{JSON.stringify(data)}</code>
                    </div>
                </pre>
            </h3>
        </>
    )
}