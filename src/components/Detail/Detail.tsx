import React from 'react';
import './Detail.css';
import CardFetcher from '../Cards/CardFetcher';
import { Link } from 'react-router-dom';
import TransitionSpinner from '../TransitionSpinner/TransitionSpinner';
import Header from '../Header/Header';
import axios from 'axios';

interface DetailState {
    data: any;
}

export interface DetailProps {
    location: any;
}

const basePath = 'https://rickandmortyapi.com/api';

class Detail extends React.Component<DetailProps, DetailState> {
    constructor(props: DetailProps) {
        super(props);

        this.state = {
            data: {}
        };
    }

    async componentDidMount() {
        const { location } = this.props;

        await axios.get(`${basePath}${location.pathname}${location.search}`).then(resp => this.setState({
            data: resp.data
        }));
    }

    render() {
        const location = window.location.pathname.split('/')[1];
        return (
            <div>
                <TransitionSpinner />
                <div className="Detail">
                    <Header />
                    <CardFetcher result={this.state.data} />
                    <Link className="button" to={`/${location}`} target="_self">&#8592;</Link>
                </div>
            </div>

        );
    }
}

export default Detail;
