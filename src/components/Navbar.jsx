// import logoLight from '../assets/icons/logo-light.svg';
import PropTypes from 'prop-types';
import logoDark from '../assets/icons/logo-dark.svg';
import iconBoardNormal from '../assets/icons/icon-board-normal.svg'
import iconBoardWhite from '../assets/icons/icon-board-white.svg'
import iconBoardMainColor from '../assets/icons/icon-board-main-color.svg'
import lightThemeIcon from '../assets/icons/icon-light-theme.svg';
import darkThemeIcon from '../assets/icons/icon-dark-theme.svg';

const Navbar = ({ data }) => {
  return (
  <nav className="border-2 border-sky-500 w-1/5 h-screen">
    <header className="p-8">
      <img className="cursor-pointer" src={logoDark} alt="logo-light-theme" />
    </header>
    {/* Boards */}
    <section className="w-11/12">
      <h5 className="py-5 uppercase text-dark-color-5 text-xs pl-8 tracking-widest">All Boards (3)</h5>
      <div>
        <ul>
          {data.boards.map((board) => {
            return(
              <li key={board.name}  className="flex items-center py-3.5 pl-8 rounded-r-full hover:bg-primary-color hover:text-light-color-1 cursor-pointer">
                <img src={iconBoardNormal} alt="board-icon" />
                <span className="dark-color-5 ml-4">{board.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
      
      <div className="flex items-center py-3.5 pl-8 cursor-pointer">
        <img className="color" src={iconBoardMainColor} alt="board-icon" />
        <span className="text-primary-color ml-4 font-bold">+ Create New Board</span>
      </div>
    </section>
    {/* light/dark theme */}
    <section className="border mx-6 w-100">
      <label className=" inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <img src={lightThemeIcon} alt="light-theme-icon" />
        <div className="mx-5 relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <img src={darkThemeIcon} alt="dark-theme-icon" />
      </label>
    </section>
    {/* Hide sidebar toggler */}
    <section>
      Hide Sidebar
    </section>
  </nav>
  )
}

Navbar.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Navbar;
