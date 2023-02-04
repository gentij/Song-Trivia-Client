import React from 'react';

interface GenreCardProps {
  name: string;
  artists: string[];
}

const GenreCard: React.FC<GenreCardProps> = ({ name, artists }) => {
  return (
    <div className='flex h-[100px] w-[200px] flex-col justify-between rounded-xl bg-amber-400 p-1'>
      <h4 className='text-center text-xl font-bold text-primary-500'>{name}</h4>
      <p className='text-sm font-bold text-secondary-500'>
        {artists.map(
          (artist, index) =>
            `${artist}${index === artists.length - 1 ? ' and more' : ', '}`
        )}
      </p>
    </div>
  );
};

export default GenreCard;
