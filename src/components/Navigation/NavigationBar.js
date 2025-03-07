import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Logo from "../../assets/logo.png";
import pic from "../../assets/pic.jpeg"; // Your portrait image

export default function NavigationBar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleSignOut = () => {
    signOut(auth).catch((err) => console.log(err));
  };

  const NavLink = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        onClick={() => setIsMobileMenuOpen(false)}
        className={`
          px-2 
          border-b-2 border-transparent 
          hover:border-[#64B5F6] 
          whitespace-nowrap
          ${isActive ? "text-[#64B5F6] border-[#64B5F6]" : "text-white"}
        `}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className="py-4 text-white">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="MoCloud Logo" className="w-12 h-12" />
          <Link to="/" className="text-2xl font-bold whitespace-nowrap">
            Mo<span className="text-[#64B5F6]">Cloud</span>
          </Link>
        </div>

        {/* Desktop Nav (only visible at ≥1024px) */}
        <div className="hidden lg:flex items-center space-x-6 text-lg font-semibold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
          <NavLink to="/self-assessment">Self Assessment</NavLink>
          <NavLink to="/resource">Resources</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>

        {/* Right side: Buttons + Mobile Toggle */}
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="relative">
              <img
                src={pic}
                alt="User Profile"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              />
              {isMobileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    View Profile
                  </Link>
                  <Link to="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    View Dashboard
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/sign-in">
                <button className="bg-[#FFD54F] text-black px-4 py-2 rounded-full hover:bg-[#FFD54F]/90">
                  Log in
                </button>
              </Link>
              <Link to="/sign-up">
                <button className="bg-[#64B5F6] text-white px-4 py-2 rounded-full hover:bg-[#64B5F6]/90">
                  Register
                </button>
              </Link>
            </>
          )}
          {/* Hamburger/Close for <1024px screens */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (shown when isMobileMenuOpen === true) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4">
          <div className="flex flex-col space-y-2 text-lg font-semibold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/tasks">Tasks</NavLink>
            <NavLink to="/self-assessment">Self Assessment</NavLink>
            <NavLink to="/resource">Resources</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
