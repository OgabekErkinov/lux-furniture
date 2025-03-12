import React from 'react'
import Navbar from '../components/Navbar'
import '../../src/translator/configTranslator'
import MenuBar from '../components/MenuBar'
import { Outlet } from 'react-router-dom'
import DownloadCatalog from '../components/DownloadCatalog'
import Collection from '../components/Collection'
import Partners from '../components/Partners'
import Quality from '../components/Quality'
import Delivery from '../components/Delivery'
import Questions from '../components/Questions'
import GiveQuestion from '../components/GiveQuestion'
import Footer from '../components/Footer'
import GiveQuestionModal from '../modals/GiveQuestionModal'
import Toast from '../modals/Toast'

const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <MenuBar/>
    <Outlet/>
    <Collection/>
    <DownloadCatalog/>
    <Partners/>
    <Quality/>
    <Delivery/>
    <Questions/>
    <GiveQuestion/>
    <Footer/>
    <GiveQuestionModal/>
    <Toast/>
    </>
  )
}

export default MainLayout
