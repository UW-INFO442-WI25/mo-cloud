import { Link, useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();

  return (
    <nav className="py-8">
      <div className="container mx-auto px-8 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white">
          Mo<span className="text-[#64B5F6]">Cloud</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-[#64B5F6]">
            Home
          </Link>
          <Link to="/tasks" className="text-[#64B5F6]">
            Tasks
          </Link>
          <Link to="/self-assessment" className="text-white hover:text-[#64B5F6]">
            Self Assessment
          </Link>
          <Link to="/resources" className="text-white hover:text-[#64B5F6]">
            Resources
          </Link>
          <Link to="/about" className="text-white hover:text-[#64B5F6]">
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
        </div>
      </div>
    </nav>
  );
}

