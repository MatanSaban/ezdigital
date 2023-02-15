import Link from 'next/link'
import React from 'react'

function ServicesPopup(props) {
  return (
    <div className={`servicesPopup ${props.classes}`} >
      <button onClick={props.subMenuToggle}>
        חזרה לתפריט הראשי
      </button>
      <ul>
        {
          props?.servicesNavMenu?.children?.map((navItem) => {
            return (
              <li className='m-t-20 ' key={navItem.id}>
                <Link onClick={props.menuToggle} className='f-size-r-2 txt-primary-color f-weight-800 f-weight-bolder' href={`${props.servicesNavMenu.url}${navItem.url}`}>{navItem.title}</Link>
                {navItem.children ?
                  <ul>
                    {navItem?.children?.map((subNavItem) => {
                      return (
                        <li className='m-t-10' key={subNavItem.id}>
                          <Link onClick={props.menuToggle} className='f-size-r-1-5 txt-white f-weight-100' href={`${props.servicesNavMenu.url}${navItem.url}${subNavItem.url}`}>{subNavItem.title}</Link>
                        </li>
                      )
                    })}
                  </ul> 
                : null}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ServicesPopup
