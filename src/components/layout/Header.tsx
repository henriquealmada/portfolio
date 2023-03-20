import { useEffect, useState } from 'react'

const links = ['início', 'sobre', 'projetos', 'contato']

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  })

  return (
    <header
      className={`fixed z-[9999] w-full text-white flex justify-center ${
        navbar ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <nav className="w-full">
        {/* Menu button */}
        <div
          className="sm:hidden cursor-pointer text-center mx-auto my-2 w-[30px]"
          onClick={() => setOpenMenu(prev => !prev)}
        >
          {!openMenu ? (
            <i className="fa-solid fa-bars text-[25px]"></i>
          ) : (
            <i className="fa-solid fa-xmark text-[25px]"></i>
          )}
        </div>
        {/* Desktop menu */}
        <ul className="hidden sm:flex gap-8 justify-center py-4 text-[1.4rem]">
          {links.map((link, index) => (
            <li key={index} className="hover:text-lemon-yellow capitalize">
              <a href={`#${link}`}>{link}</a>
            </li>
          ))}
        </ul>
        {/* Mobile menu */}
        {openMenu && (
          <ul className="flex sm:hidden flex-col gap-8 p-4 text-[1.5rem] text-black bg-white w-[94%] h-[93vh] m-auto rounded-lg">
            {links.map((link, index) => (
              <li key={index} className="hover:text-lemon-yellow capitalize">
                <a href={`#${link}`} onClick={() => setOpenMenu(false)}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header
