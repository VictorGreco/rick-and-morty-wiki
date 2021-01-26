import React from 'react';
import './Cards.css';
import { Link } from "react-router-dom";
import { getDate, getEndpoint } from '../../helper';
import axios from 'axios';

interface EpisodeCardState {
    data: any[];
}

export interface EpisodeCardProps {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}

class EpisodeCard extends React.Component<EpisodeCardProps, EpisodeCardState> {
    constructor(props: EpisodeCardProps) {
        super(props);

        this.state = {
            data: []
        };
    }

    async componentDidMount() {
        if (this.props.characters) {

            return await axios.all(this.props.characters.map((url: string) => axios.get(url)))
                .then(resp => this.setState({ data: resp }));
        }
    }

    render() {
        return (
            <article className="Card">
                <h1 className="title">
                    <Link className="title" to={`/${getEndpoint(this.props.url)}`} target="_self">
                        Episode {this.props.id} - {this.props.name}
                    </Link>
                </h1>
                <p>
                    Air Date: {this.props.air_date}
                </p>
                <p>
                    Created on {getDate(this.props.created)}
                </p>
                <div className="slider">
                    {this.state.data.map(({ data }: any, index: number) => {
                        const { name, image, url } = data;
                        return (
                            <div key={index} className="slider-item">
                                <img src={image} alt="character" height="200" width="200" />
                                <p>
                                    <Link className="" to={`/${getEndpoint(url)}`} target="_self">{name}</Link>
                                </p>
                            </div>
                        );
                    })}
                </div>
            </article>
        );
    }
}

export default EpisodeCard;
