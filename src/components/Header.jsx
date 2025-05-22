import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <img src={logo} alt="Logo" className="h-8" />
      <div className="flex items-center space-x-4">
        <a href="#mentorship" className="text-sm text-gray-600">Mentorship</a>
        <button className="flex items-center border border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-100">
          Say Hello
        </button>
      </div>
    </header>
  );
}

export default Header;
