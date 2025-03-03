import { Link, useNavigate, useLocation } from "react-router-dom";
import UserProfileIcon from "../Userprofile/UserIcon";
import Logo from "../../assets/logo.png";

export default function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="py-8">
      <div className="container mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center space-x-2">
        <img src={Logo} alt="MoCloud Logo" className="w-12 h-12" />
          <Link to="/" className="text-2xl font-bold text-white">
            Mo<span className="text-[#64B5F6]">Cloud</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`${location.pathname === '/' ? 'text-[#64B5F6]' : 'text-white hover:text-[#64B5F6]'}`}
          >
            Home
          </Link>
          <Link 
            to="/tasks" 
            className={`${location.pathname === '/tasks' ? 'text-[#64B5F6]' : 'text-white hover:text-[#64B5F6]'}`}
          >
            Tasks
          </Link>
          <Link 
            to="/self-assessment" 
            className={`${location.pathname === '/self-assessment' ? 'text-[#64B5F6]' : 'text-white hover:text-[#64B5F6]'}`}
          >
            Self Assessment
          </Link>
          <Link 
            to="/resource" 
            className={`${location.pathname === '/resource' ? 'text-[#64B5F6]' : 'text-white hover:text-[#64B5F6]'}`}
          >
            Resources
          </Link>
          <Link 
            to="/about" 
            className={`${location.pathname === '/about' ? 'text-[#64B5F6]' : 'text-white hover:text-[#64B5F6]'}`}
          >
            About
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/sign-in">
            <button className="bg-[#FFD54F] text-black px-6 py-2 rounded-full hover:bg-[#FFD54F]/90">
              Log in
            </button>
          </Link>
          <Link to="/sign-up">
            <button className="bg-[#64B5F6] text-white px-6 py-2 rounded-full hover:bg-[#64B5F6]/90">
              Register
            </button>
          </Link>
          <UserProfileIcon />
        </div>
      </div>
    </nav>
  );
}