import React from 'react';
import EpisodeCard from '../Cards/EpisodeCard';
import CharacterCard from '../Cards/CharacterCard';
import LocationCard from '../Cards/LocationCard';

export interface CardFetcherProps {
	result: any;
}

const CardFetcher = ({ result }: CardFetcherProps): JSX.Element => {
    const location = window.location.pathname;

    switch (location.split('/')[1]) {
        case 'episode':

            return <EpisodeCard {...result} />;
        case 'character':

            return <CharacterCard {...result} />;
        case 'location':

            return <LocationCard {...result} />;
        default: 
            return <div>URL malformed</div>
    }
};
export default CardFetcher;
