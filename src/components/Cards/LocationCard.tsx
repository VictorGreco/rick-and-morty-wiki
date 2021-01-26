import React from 'react';
import './Cards.css';
import { Link } from "react-router-dom";
import { getDate, getEndpoint } from '../../helper';
import axios from 'axios';

interface LocationCardState {
    data: any[];
}

export interface LocationCardProps {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    created: string;
    url: string;
}

class LocationCard extends React.Component<LocationCardProps, LocationCardState> {
    constructor(props: LocationCardProps) {
        super(props);

        this.state = {
            data: []
        };
    }

    async componentDidMount() {
        if (this.props.residents) {

            return await axios.all(this.props.residents.map((url: string) => axios.get(url)))
                .then(resp => this.setState({ data: resp }));
        }
    }

    render() {
        return (
            <article className="Card">
                <h1>
                    <Link className="title" to={`/${getEndpoint(this.props.url)}`} target="_self">
                        {this.props.name} - {this.props.type}
                    </Link>
                </h1>

                <h2>{this.props.dimension}</h2>
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
            </article >
        );
    }
}

export default LocationCard;
