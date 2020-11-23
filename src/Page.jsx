import React from 'react';
import NotFoud from './NotFound'
import { Route,Switch } from 'react-router-dom';

import Landing from './components/main/Landing.js';
import WidePage from './components/WidePage/WidePage.js';
import MenuBar from './components/navigation/MenuBar.js';
import ContentCard from './components/contentCard/ContentCard.js';
import ReviewCard from './components/contentCard/ReviewCard.js';
import HotTrack from './components/contentCard/HotTrack.js'
import { Slider } from './components/contentCard';

const Page = () => (


    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/WidePage"component={WidePage}/>
        <Route exact path="/MenuBar"component={MenuBar}/>
        <Route exact path="/ContentCard"component={ContentCard}/>
        <Route exact path="/ReviewCard" component={ReviewCard}/>
        <Route exact path="/HotTrack" component={HotTrack}/>
        <Route exact path="/Slider" component={Slider}/>
        <Route component = {NotFoud}/>
    </Switch>

);



export default Page;