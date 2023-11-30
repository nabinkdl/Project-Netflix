import React from 'react'
import requests from '../Requests'
import Page from '../components/Page'
import Row from '../components/Row'
function Home() {
  return (
    <div>
        <Page/>
        <Row rowID="1" title='Up comming' fetchURL={requests.requestUpcoming}/>
        <Row rowID="2" title='Popular' fetchURL={requests.requestPopular}/>
        <Row rowID="3" title='Treanding' fetchURL={requests.requestTrending}/>
        <Row rowID="4" title='Top Rated' fetchURL={requests.requestTopRated}/>
        <Row rowID="5" title='Horror' fetchURL={requests.requestHorror}/>


    </div>
  )
}

export default Home