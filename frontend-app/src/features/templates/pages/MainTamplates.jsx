import React, { useState } from 'react'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'

function MainTamplates(props) {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const handleOverlayOpen = () => setIsOverlayVisible(true);
  const handleOverlayClose = () => setIsOverlayVisible(false);
  return (
    <>
      <Header onOverlayOpen={handleOverlayOpen} onOverlayClose={handleOverlayClose} />
      {props.children}
      <Footer />
      {isOverlayVisible && (
        <div className="fixed inset-0 bg-slate-700 bg-opacity-50 z-20"></div>
      )}
    </>
  )
}

export default MainTamplates
