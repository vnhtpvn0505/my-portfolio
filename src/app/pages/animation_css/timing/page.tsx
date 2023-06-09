
import Link from 'next/link'
import '../styles/animation.css'
export default function Timing() {

    return (
      <body>
        <div className='container'>
        <h1 className='text-4xl text-sky-500'>CSS Animations Timing</h1>
        <h3 className='text-base' >transaction -timing-function: How the change in property wil occur </h3>
        <p className='text-sm '><strong>ease:</strong>  the change starts slow them go faster them finishes slow(chậm => nhanh hơn =>chậm)</p>
        <div id='ease' className='move bg-red-500'></div>
        <p className='text-sm '><strong>linear:</strong>  the change occurs at the same rate (không thay đổi tốc độ)</p>
        <div id='linear'  className='move bg-orange-500'></div>
        <p className='text-sm '><strong>ease-in:</strong>  the change starts slow then go faster berfore the end (chậm => nhanh dần)</p>
        <div id='ease-in'  className='move bg-green-500'></div>
        <p className='text-sm '><strong>ease-out:</strong>  the change starts fast then slows down  berfore the end (nhanh => chậm dần)</p>
        <div id='ease-out'  className='move bg-blue-500'></div>
        <p className='text-sm '><strong>ease-in-out:</strong>  the change starts fast then slows down bthen go faster then finishes slow (nhanh => chậm dần=> nhanh =>  chậm dần)</p>
        <div id='ease-in-out'  className='move bg-yellow-500'></div>
      </div>
      </body>

    )
  }