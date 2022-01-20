import React from 'react'
import Header from './Header'
import Main from './Main'
import Grid from './Grid'
import Our from './Our'
import Live from './Live'
import Lastone from './Lastone'
import Flow from './Flow'
import Nas from './Nas'
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Nas/>
            <Main></Main>
            <Grid></Grid>
            <Our></Our>
            <Live></Live>
            <Lastone></Lastone>
            <Flow></Flow>
        </div>
    )
}

export default Home
