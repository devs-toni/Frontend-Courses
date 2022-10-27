import React, { useState, useEffect } from 'react';
import { SongDetails } from './SongDetails';
import { SongForm } from './SongForm';
import { Loader } from './Loader';
import { http } from '../helpers/http';
import '../styles/SongSearch.css';

export const SongSearch = () => {
    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [biography, setBiography] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (search === null) return;
        const fetchData = async () => {
            const {artist, song} = search;
            let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
            let songUrl = `https://pokeapi.co/api/v2/berry-firmness/2/`;
            setLoading(true);


            const [artistResponse, songResponse] = Promise.all([http().get(artistUrl), http().get(songUrl)]);
          
            console.log(artistResponse);
            console.log(songResponse);

            setBiography(artistResponse);
            setLyric(songResponse);
            setLoading(false);

        }

        fetchData();
    }, [search])
    
    const handleSearch = (data) => {
        setSearch(data);
    }

    return (
        <div className='content'>
            <SongForm handler={handleSearch} />
            {loading && <Loader />}
            <SongDetails search={search} lyric={lyric} bio={biography} />
        </div>
    )
}