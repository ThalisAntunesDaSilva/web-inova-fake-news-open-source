import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import New from './pages/New';


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/news" component={News} />
                <Route path="/new" component={New} />


            </Switch>
       </BrowserRouter>
);}