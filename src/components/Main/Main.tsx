import axios from 'axios';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';

export interface MainProps {
    data: any;
    setData: Function;
}

const test = (props: any) => {
    return (<div>{JSON.stringify(props.location.pathname.substr(1))}</div>);
}

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/:something' component={test}/>
        </Switch>
    </main>
);
export default Main;