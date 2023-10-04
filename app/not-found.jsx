// import Link from 'next/link'
// "use client"
// import { useRouter } from 'next/router'
 
export default function NotFound() {
//   const router = useRouter();
    return (
    <div className='container w-full mt-[5.5rem]'>
      <h1>404 : Page Not Found</h1>
      {/* <p>Could not find requested resource</p> */}
      {/* <button className='black_btn' onClick={() => router.push("/")} >Return Home</button> */}
      {/* <Link href="/" className='black_btn'>Return Home</Link> */}
    </div>
  )
}