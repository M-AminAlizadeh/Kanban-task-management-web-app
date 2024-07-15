import logoLight from '../assets/icons/logo-light.svg';
import logoDark from '../assets/icons/logo-dark.svg';
import iconBoard from '../assets/icons/icon-board.svg'

const Navbar = () => {
  return (
  <nav className="border-2 border-sky-500 w-1/5 ">
    <header className="p-8">
      <img src={logoDark} alt="logo-light-theme" />
    </header>
    {/* Boards */}
    <section className=" w-11/12">
      <h5 className="border-4 border-black py-5 uppercase text-dark-color-5 text-xs pl-8 tracking-widest">All Boards (3)</h5>

      <div className="border-2 border-red-900">
        <ul>
          <li className="flex items-center py-3.5 pl-8 rounded-r-full hover:bg-primary-color hover:text-light-color-1 cursor-pointer">
            <img className="light-color-1" src={iconBoard} alt="board-icon" />
            <span className="dark-color-5 ml-4">Platform Launch</span>
          </li>
        </ul>
      </div>
      
    </section>
  </nav>
  )
}

export default Navbar;
