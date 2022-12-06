import React from 'react';
import SongBar from './SongBar';

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,
}) => (
  <div className="flex flex-col">
    <h1 className="text-white text-3xl font-bold">Related Songs</h1>
    <div className="mt-6 w-full flex flex-col">
      {data?.map((song, index) => (
        <SongBar
          key={`${song.key}-${artistId}`}
          song={song}
          i={index}
          isPlaying={isPlaying}
          artistId={artistId}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
