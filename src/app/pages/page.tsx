
import Link from 'next/link'


export default function Before() {
  return (
    <main >
      <div >
        <Link href='/demo/before/target'>Click to redirect, ref='/demo/before/target', which click works but openIn new tab landed wrongly</Link>
      </div>
      <div >
        <Link href='pages/animation_css'>Click to redirect, ref='/before/target' (click won't work)</Link>
      </div>
    </main>
  )
}
