import React, { useState, useEffect } from 'react';

function Pokemon({ name, avatar }) {
    return(
    <figure>
        <img src={avatar} alt={name} />
        <figcaption>{name}</figcaption>
    </figure>
    );
}

export default function AjaxHooks() {
    const [pok, setPok] = useState([]);
    const [poki, setPoki] = useState([])

    useEffect(() => {
        let url = 'https://pokeapi.co/api/v2/pokemon/';
        fetch(url)
            .then(res => res.json())
            .then(json => {
                json.results.forEach(p => {
                    fetch(p.url)
                        .then(res => res.json())
                        .then(json => {
                            let pokemon = {
                                id: json.id,
                                name: json.name,
                                avatar: json.sprites.front_default
                            };
                            setPok((pokemons) => [...pokemons, pokemon]);

                        });
                });
            });

        return () => {
            console.log(pok.length);
        }
    }, []);

    useEffect(() => {
      const getPokemons = async (url) => {
        let resp = await fetch (url), json = await resp.json();
        json.results.forEach(async (p) => {
          let res = await fetch (p.url), jsson = await res.json(); 
          let pokemon = {
            id: jsson.id,
            name: jsson.name,
            avatar: jsson.sprites.front_default
          };
          setPoki((pokemons) => [...pokemons, pokemon]);
        });
    };

      getPokemons('https://pokeapi.co/api/v2/pokemon/');
      return () => {
        
      }
    }, [])
    

    return (
        <>
            <h2>Peticiones Asíncronas en Componentes de Clase</h2>
            {poki.length === 0 ? <h3>Cargando . . .</h3> : poki.map((p, index) => <Pokemon key={index} name={p.name} avatar={p.avatar} />)}
        </>
    )
}
