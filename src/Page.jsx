import React from 'react';
import NotFoud from './NotFound'
import { Route,Switch } from 'react-router-dom';

import Landing from './components/main/Landing.js';
import BigCategory from './components/BigCatePage/BigCategory.js'
import WidePage from './components/WidePage/WidePage.js';
import MenuBar from './components/navigation/MenuBar';
import ContentCard from './components/contentCard/ContentCard';

const Page = () => (


    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/BigCategory" component={BigCategory}/>
        <Route exact path="/WidePage"component={WidePage}/>
        <Route exact path="/MenuBar"component={MenuBar}/>
        <Route exact path="/ContentCard"component={ContentCard}/>

        <Route component = {NotFoud}/>
        {/* <Route exact path="/Slide" component={Slide}/> */}
    </Switch>

);



export default Page;