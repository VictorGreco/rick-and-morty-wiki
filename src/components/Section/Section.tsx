import React from 'react';
import Pagination from '../Pagination/Pagination';
import SwipeCard from '../Cards/SwipeCard';
import CardFetcher from '../Cards/CardFetcher';
import Header from '../Header/Header';
import axios from 'axios';
import TransitionSpinner from '../TransitionSpinner/TransitionSpinner';

interface SectionState {
    data: any;
}

export interface SectionProps {
    location: any;
}

const basePath = 'https://rickandmortyapi.com/api';

class Section extends React.Component<SectionProps, SectionState> {
    constructor(props: SectionProps) {
        super(props);

        this.state = {
            data: {}
        };
    }

    componentDidMount() {
        const { location } = this.props;

        axios.get(`${basePath}${location.pathname}${location.search}`).then(resp => this.setState({
            data: resp.data
        }));
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        const getPath = ({ pathname, search }: any): string => `${pathname}${search}`;
        const currentPath = getPath(this.props.location);
        const prevPath = getPath(prevProps.location);

        if (currentPath !== prevPath) {
            axios.get(`${basePath}${currentPath}`).then(resp => this.setState({ data: resp.data }));
        };
    }
    

    render() {

        return (
            <div>
                <TransitionSpinner />
                <Header/>
                <main>
                    {this.state?.data?.results?.map((result: any, index: number) => {
                        return <CardFetcher key={index} result={result} />
                    })}
                    <SwipeCard>
                        <Pagination next={this.state?.data?.info?.next} prev={this.state?.data?.info?.prev} />

                    </SwipeCard>
                </main>
            </div>
        );
    }
}

export default Section;
