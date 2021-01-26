import React from 'react';
import './Cards.css';
import { Link } from "react-router-dom";
import { getDate, getEndpoint } from '../../helper';
import axios from 'axios';

interface CharacterCardPropsState {
    data: any[];
}

interface CharacterOriginProps {
    name: string;
    url: string;
}

export interface CharacterCardProps {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: CharacterOriginProps;
    location: CharacterOriginProps;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

class CharacterCard extends React.Component<CharacterCardProps, CharacterCardPropsState> {
    constructor(props: CharacterCardProps) {
        super(props);

        this.state = {
            data: []
        };
    }

    async componentDidMount() {
        if (this.props?.episode) {

            return await axios.all(this.props.episode.map((url: string) => axios.get(url)))
                .then(resp => this.setState({ data: resp }));
        }
    }

    render() {

        return (
            <article className="Card CharacterCard">
                <img src={this.props.image} alt="avatar" />

                <h1 className="title">
                    <Link to={`/${getEndpoint(this.props.url)}`} target="_self">
                        {this.props.name} - {this.props.status}
                    </Link>
                </h1>

                <h2>
                    {this.props.species} - {this.props.gender}
                </h2>
                <h3>
                    <Link to={`/${getEndpoint(this.props.origin?.url)}`} target="_self">{this.props.origin?.name}</Link>
                </h3>

                <p>
                    Created: {getDate(this.props.created)}
                </p>

                <div className="slider">
                    {this.state.data.map(({ data }: any, index: number) => {
                        const { id, url } = data;
                        return (
                            <div key={index} className="slider-item button">
                                <Link className="button" to={`/${getEndpoint(url)}`} target="_self">Episode {id}</Link>
                            </div>
                        );
                    })}
                </div>
            </article>
        );
    }
}

export default CharacterCard;
