import React from 'react'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import Banner from '../../components/Banner/Banner'
import RowList from '../../components/Rows/RowList/RowLIst'

const home = () => {
  return (
    <div>
            <Header />
            <Banner />
            <RowList />
            <Footer />
    </div>
  )
}

export default home