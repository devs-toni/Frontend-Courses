import React from 'react';
import '../styles/SongDetails.css';
import { SongArtist } from './SongArtist';
import { SongLyrics } from './SongLyrics';

export const SongDetails = ({ search, lyric, bio }) => {
  return (
    <div className='main'>
        <SongArtist />
        <SongLyrics />
    </div>
  )
}
