
import Link from 'next/link'
import '../styles/animation.css'
export default function Transaction() {

    return (
      <body>
        <div className='container'>
        <h1 className='text-4xl text-sky-500'>CSS Transactions</h1>
        <p>Css Transactions allows you to change property values smoothly, over a given duration.</p>
         <div>
          <h1 className="title">
              <Link href="pages/animation_css/transactions/timing">Transactions timing</Link>
          </h1>
          <h1 className="title">
              <Link href="pages/animation_css/transactions/property">Transactions Property</Link>
          </h1>
          </div>
      </div>
      </body>

    )
  }