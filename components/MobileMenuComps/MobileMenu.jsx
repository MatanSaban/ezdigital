import React from 'react'
import MainMenu from '../MainMenu'

function MobileMenu(props) {
  return (
    <ul className={`ms_MobileMenu m-t-0 txt-center column aligned-center ${props.classes}`}>
        <MainMenu menuToggle={props.menuToggle} subMenuToggle={props.subMenuToggle} navMenu={props.navMenu} mobileView={props.mobileView} tabletView={props.tabletView}/>
    </ul>
  )
}

export default MobileMenu
