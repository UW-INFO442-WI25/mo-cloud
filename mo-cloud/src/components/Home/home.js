import Element from "../../assets/Element.png"
import Illustration from "../../assets/Illustration.png"

const Home = () => {
  return (
    <div className="min-h-screen bg-[#002B5C]">
      {/* Navigation */}
      <nav className="py-8">
        <div className="container mx-auto px-8 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-white">
            Mo<span className="text-[#64B5F6]">Cloud</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-[#64B5F6]">
              Home
            </a>
            <a href="/tasks" className="text-white hover:text-[#64B5F6]">
              Tasks
            </a>
            <a href="/self-assessment" className="text-white hover:text-[#64B5F6]">
              Self Assessment
            </a>
            <a href="/resources" className="text-white hover:text-[#64B5F6]">
              Resources
            </a>
            <a href="/contact" className="text-white hover:text-[#64B5F6]">
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-[#FFD54F] text-black px-6 py-2 rounded-full hover:bg-[#FFD54F]/90">
              Login /Register
            </button>
            <button className="bg-[#64B5F6] text-white px-6 py-2 rounded-full hover:bg-[#64B5F6]/90">
              One Time User →
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="relative">
              <h1 className="text-6xl font-bold text-white leading-tight relative z-10">
                Make the
                <br />
                Invisible Visible
                <img
                  src={Element || "/placeholder.svg"}
                  alt=""
                  className="absolute -bottom-4 left-0 w-[300px] z-0"
                  aria-hidden="true"
                />
              </h1>
            </div>
            <p className="text-gray-300 text-lg max-w-lg">
              MoCloud helps new parents recognize, track, and balance the unseen work that keeps your household running.
              Build stronger relationships through awareness and shared responsibility.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#64B5F6] text-white px-8 py-3 rounded-full hover:bg-[#64B5F6]/90">
                Get started now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10">
                See how it works
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={Illustration || "/placeholder.svg"}
              alt="MoCloud App Interface"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Why do we <span className="text-[#E57373]">exist?</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We believe that recognizing and balancing invisible labor leads to stronger, happier families and more
                equitable partnerships. By making invisible work visible, we aim to address the disproportionate burden
                often placed on women in households. We provide tools and insights to help new parents navigate the
                challenges of household management and childcare together.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="text-5xl font-bold text-[#E57373] mb-4">75%</div>
                <p className="text-gray-600">of unpaid care work is done by women globally</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="text-5xl font-bold text-[#FFB74D] mb-4">42%</div>
                <p className="text-gray-600">of mothers reduced work hours for family care</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="text-5xl font-bold text-[#4FC3F7] mb-4">51%</div>
                <p className="text-gray-600">gender earnings gap over a 15-year period</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="text-5xl font-bold text-[#81C784] mb-4">22%</div>
                <p className="text-gray-600">of unpaid caregivers report declined health</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002B5C] text-white py-16">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <a href="/" className="text-2xl font-bold">
                Mo<span className="text-[#64B5F6]">Cloud</span>
              </a>
            </div>
            <div>
              <h3 className="font-bold mb-4">Home</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/overview" className="hover:text-[#64B5F6]">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-[#64B5F6]">
                    About us
                  </a>
                </li>
                <li>
                  <a href="/stories" className="hover:text-[#64B5F6]">
                    Customer stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/blog" className="hover:text-[#64B5F6]">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/guides" className="hover:text-[#64B5F6]">
                    Guides & tutorials
                  </a>
                </li>
                <li>
                  <a href="/help" className="hover:text-[#64B5F6]">
                    Help center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Try It Today</h3>
              <button className="bg-[#64B5F6] text-white px-6 py-2 rounded-full hover:bg-[#64B5F6]/90">
                Start today →
              </button>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-6">
              <button className="text-sm hover:text-[#64B5F6]">
                <span className="flex items-center">
                  <span className="mr-2">🌐</span> English
                </span>
              </button>
              <a href="/terms" className="text-sm hover:text-[#64B5F6]">
                Terms & privacy
              </a>
              <a href="/security" className="text-sm hover:text-[#64B5F6]">
                Security
              </a>
              <a href="/status" className="text-sm hover:text-[#64B5F6]">
                Status
              </a>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-[#64B5F6]">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="hover:text-[#64B5F6]">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="hover:text-[#64B5F6]">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home

