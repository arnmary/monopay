import Image from "next/image"
import Link from "next/link"
import GettingButton from "../ui/GettingButton"
export default function Header() {
  return (
    <header className='w-full mx-auto md:px-10 pt-10 pb-5'>
      <nav className="flex items-center">
           <Image src="/logo.svg" alt="Logo Monopay App"width={40} height={40} className=""></Image> 
        <div className="flex flex-row justify-between">

          <Link href="#" className="">Features</Link>
          <div className="flex flex-row items-center ">
            <Link href="#">Blog</Link>
            <Link href="#">Company</Link>
            <Link href="#">More</Link>
          </div>
        <Link href="#">Contact</Link>
        </div>
<GettingButton/>
      </nav>
    </header>
  )
}
