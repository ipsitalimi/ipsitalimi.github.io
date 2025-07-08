import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    path: '/',
    label: 'Home'
  }, {
    path: '/about',
    label: 'About'
  }, {
    path: '/services',
    label: 'Services'
  }, {
    path: '/gallery',
    label: 'Gallery'
  }, {
    path: '/reviews',
    label: 'Reviews'
  }, {
    path: '/contact',
    label: 'Contact'
  }];
  const toggleMenu = () => setIsOpen(!isOpen);
  return <>
      <nav className="fixed top-0 w-full z-40 bg-dark-bg/90 backdrop-blur-md border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              
              <span className="text-2xl font-bold text-gold">CoatsbyCole</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => <Link key={item.path} to={item.path} className={`text-sm font-medium transition-colors duration-200 hover:text-gold ${location.pathname === item.path ? 'text-gold border-b border-gold' : 'text-white/90'}`}>
                  {item.label}
                </Link>)}
            </div>

            {/* Mobile menu button */}
            <button onClick={toggleMenu} className="md:hidden text-white hover:text-gold transition-colors duration-200">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && <div className="mobile-nav md:hidden">
          <div className="flex flex-col space-y-6">
            {navItems.map(item => <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={`text-xl font-medium transition-colors duration-200 hover:text-gold ${location.pathname === item.path ? 'text-gold' : 'text-white'}`}>
                {item.label}
              </Link>)}
          </div>
        </div>}
    </>;
};
export default Navigation;