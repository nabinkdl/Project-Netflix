import React from 'react'
import requests from '../Requests'
import Page from '../components/Page'
import Row from '../components/Row'
function Home() {
  return (
    <div>
        <Page/>
        <Row title='Up comming' fetchURL={requests.requestUpcoming}/>
        <Row title='Popular' fetchURL={requests.requestPopular}/>
        <Row title='Treanding' fetchURL={requests.requestTrending}/>
        <Row title='Top Rated' fetchURL={requests.requestTopRated}/>
        <Row title='Horror' fetchURL={requests.requestHorror}/>


    </div>
  )
}

export default Home