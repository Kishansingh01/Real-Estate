import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { useAuth } from '../context/AuthContext';
import { logout } from '../utils/api';
import { toast } from 'react-toastify';
import Login from './Login';
import Signup from './Signup';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, setUser, isAuthenticated } = useAuth();

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  const handleLogout = async () => {
    const data = await logout();
    if (data.success) {
      setUser(null);
      toast.success('Logged out successfully');
      setShowUserMenu(false);
    } else {
      toast.error('Logout failed');
    }
  };

  const openLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const openSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
          <img src={assets.logo} alt="" />
          <ul className="hidden md:flex gap-7 text-white">
            <a href="#Header" className="cursor-pointer hover:text-gray-400 transition-colors">
              Home
            </a>
            <a href="#about" className="cursor-pointer hover:text-gray-400 transition-colors">
              About
            </a>
            <a href="#projects" className="cursor-pointer hover:text-gray-400 transition-colors">
              Projects
            </a>
            <a href="#testimonials" className="cursor-pointer hover:text-gray-400 transition-colors">
              Testimonials
            </a>
          </ul>

          {/* Desktop Auth Buttons */}
          {isAuthenticated ? (
            <div className="hidden md:block relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 bg-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
                <span className="font-medium">{user?.name}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${showUserMenu ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* User Dropdown */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl py-2 animate-fadeIn">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                    <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={openSignup}
              className="hidden md:block bg-white px-8 py-2 rounded-full hover:shadow-lg transition-all font-medium"
            >
              Sign up
            </button>
          )}

          <img
            onClick={() => setShowMobileMenu(true)}
            src={assets.menu_icon}
            className="md:hidden w-7 cursor-pointer"
            alt=""
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            showMobileMenu ? 'fixed w-full' : 'h-0 w-0'
          } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all z-50`}
        >
          <div className="flex justify-end p-6 cursor-pointer">
            <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} className="w-6" alt="" />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Header"
              className="px-4 py-2 rounded-full inline-block"
            >
              Home
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#About"
              className="px-4 py-2 rounded-full inline-block"
            >
              About
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Projects"
              className="px-4 py-2 rounded-full inline-block"
            >
              Projects
            </a>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Testimonials"
              className="px-4 py-2 rounded-full inline-block"
            >
              Testimonials
            </a>

            {/* Mobile Auth */}
            {isAuthenticated ? (
              <div className="mt-4 space-y-2 w-full px-4">
                <div className="text-center py-3 bg-gray-100 rounded-lg">
                  <p className="font-semibold">{user?.name}</p>
                  <p className="text-sm text-gray-600">{user?.email}</p>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setShowMobileMenu(false);
                  }}
                  className="w-full bg-red-500 text-white py-2 rounded-full font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setShowMobileMenu(false);
                  openSignup();
                }}
                className="mt-4 bg-blue-600 text-white px-8 py-2 rounded-full font-medium"
              >
                Sign up
              </button>
            )}
          </ul>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && <Login onClose={() => setShowLogin(false)} onSwitchToSignup={openSignup} />}

      {/* Signup Modal */}
      {showSignup && <Signup onClose={() => setShowSignup(false)} onSwitchToLogin={openLogin} />}
    </>
  );
};

export default Navbar; 