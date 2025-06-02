import Link from "next/link"

const Header = () => {
  return (
    <header className="flex justify-between  items-center p-3 bg-emerald-600">
      <div className="bold text-blue-500">LOGO</div>
      <nav>
         <menu className="flex gap-3">
            <li>
               <Link className="hover:text-red-500 underline" href='/' >Home</Link>
            </li>
            <li>
               <Link className="hover:text-red-500 underline" href='/about'>About</Link>
            </li>
            <li>
               <Link className="hover:text-red-500 underline" href='services'>Services</Link>
            </li>
            <li>
               <Link className="hover:text-red-500 underline" href='contact'>Contact</Link>
            </li>
         </menu>
      </nav>
    </header>
  )
}

export default Header