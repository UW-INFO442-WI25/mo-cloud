import { Link } from "react-router-dom";
import NavigationBar from "../Navigation/NavigationBar";
import StyledFirebaseAuth from "../../StyledFirebaseAuth"; // Import FirebaseUI component

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-400">
      <NavigationBar />
      <div className="container mx-auto px-4 mt-12 flex flex-wrap items-start justify-center gap-8">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-4xl font-bold text-[#20184e] mb-4">Welcome Back</h2>
          <p className="text-gray-600 mb-8">Sign in using Google or Email.</p>

          {/* Firebase Authentication UI */}
          <StyledFirebaseAuth />

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/sign-up" className="text-[#4f9cf9] hover:underline">
                Sign up
              </Link>
            </p>
            <Link to="/forgot-password" className="text-[#4f9cf9] hover:underline text-sm">
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
