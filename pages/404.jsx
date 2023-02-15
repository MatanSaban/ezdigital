import Link from 'next/link'
import React from 'react'

function Page404() {
  return (
    <div className="page404Wrapper">
        <h1>שגיאה 404</h1>
        <h2 >ורדים הם <span className="red">אדומים,</span> סיגליות הן <span className="blue">כחולות,</span><br/>ואת העמוד הזה לצערינו, לא תוכלו לראות!<br/>(כי הוא לא קיים וזה..)</h2>
        <Link href={'/'}><button className='btn'>בחזרה לעמוד הבית</button></Link>
    </div>
  )
}

export default Page404
