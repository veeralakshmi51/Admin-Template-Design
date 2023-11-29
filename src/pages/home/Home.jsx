import React from 'react'
import './home.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Features from '../../components/featured/Features'
import Charts from '../../components/charts/Charts'
import Table from '../../components/Table/Table'
function Home() {
  return (
    <div className='home'>
    <Sidebar/>
    <div className="homecontainer">
    <Navbar/>
    <div className="widgets">
    <Widget type='users'/>
      <Widget type='orders' />
      <Widget type='earnings'/>
      <Widget type='balance'/>
    </div>
    <div className="charts">
      <Features/>
      <Charts/>
    </div>
    <div className="list">
      <div className="listTitle">Latest Transactions</div>
      <Table/>
    </div>
    </div>
    </div>
  )
}

export default Home