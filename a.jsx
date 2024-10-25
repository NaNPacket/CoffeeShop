import React, { useState } from 'react';
import { CircleDot, Heart, Share2 } from 'lucide-react';

// Ana Layout Komponenti
const Layout = ({ children, currentPage, setCurrentPage }) => {
  return (
    <div className="bg-black text-white min-h-screen p-4">
      {/* Header */}
      <header className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <div className="bg-gray-700 w-full h-full flex items-center justify-center">
              <CircleDot className="w-8 h-8" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">COFFEE SHOP</h1>
            <p className="text-gray-400">Janji Jiwa Grage Mall Cirebon, West Java.</p>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex rounded-full overflow-hidden border border-white">
          <button 
            onClick={() => setCurrentPage('home')}
            className={`flex-1 py-2 ${currentPage === 'home' ? 'bg-white text-black' : 'bg-black hover:bg-gray-800'}`}
          >
            HOME
          </button>
          <button 
            onClick={() => setCurrentPage('about')}
            className={`flex-1 py-2 ${currentPage === 'about' ? 'bg-white text-black' : 'bg-black hover:bg-gray-800'}`}
          >
            ABOUT COFFE
          </button>
          <button 
            onClick={() => setCurrentPage('exit')}
            className={`flex-1 py-2 ${currentPage === 'exit' ? 'bg-white text-black' : 'bg-black hover:bg-gray-800'}`}
          >
            EXIT
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto">
        {children}
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-8 py-4 text-center text-sm text-gray-400">
        <p>picture by pin & me</p>
        <p>©2023-Sa'adah. All Right Reserved.</p>
      </footer>
    </div>
  );
};

// Home Sayfası
const HomePage = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <section className="bg-gray-900 p-8 rounded-lg text-center">
        <CircleDot className="w-16 h-16 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Welcome to Our Coffee Haven</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Discover a place where every cup tells a story. Our carefully curated selection of coffee 
          beans and artisanal brewing methods promises an unforgettable experience.
        </p>
      </section>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Today's Specials</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex justify-between">
              <span>Signature Latte</span>
              <span>Rp 35.000</span>
            </li>
            <li className="flex justify-between">
              <span>Pour Over</span>
              <span>Rp 28.000</span>
            </li>
            <li className="flex justify-between">
              <span>Cold Brew</span>
              <span>Rp 32.000</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Opening Hours</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex justify-between">
              <span>Mon - Fri</span>
              <span>7:00 - 22:00</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span>8:00 - 23:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span>8:00 - 21:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <img 
          src="/api/placeholder/300/200" 
          alt="Coffee ambiance" 
          className="w-full h-48 object-cover rounded-lg"
        />
        <img 
          src="/api/placeholder/300/200" 
          alt="Coffee preparation" 
          className="w-full h-48 object-cover rounded-lg"
        />
        <img 
          src="/api/placeholder/300/200" 
          alt="Coffee art" 
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

// Exit Sayfası
const ExitPage = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <section className="bg-gray-900 p-8 rounded-lg text-center">
        <Share2 className="w-16 h-16 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Thank You for Visiting</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          We hope you enjoyed your time with us. Follow us on social media to stay updated 
          with our latest offerings and events.
        </p>
        <div className="flex justify-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
            <Heart className="w-5 h-5" />
            Follow Us
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-400 rounded-lg hover:bg-blue-500">
            <Share2 className="w-5 h-5" />
            Share
          </button>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Visit Us Again</h3>
          <p className="text-gray-300">
            Don't forget to try our seasonal specials on your next visit. 
            Every week brings new exciting flavors!
          </p>
          <button className="mt-4 flex items-center gap-2 text-blue-400 hover:text-blue-300">
            View Menu <Share2 className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Feedback</h3>
          <p className="text-gray-300">
            We value your opinion! Share your experience with us and help us 
            serve you better.
          </p>
          <button className="mt-4 flex items-center gap-2 text-blue-400 hover:text-blue-300">
            Leave Feedback <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// About Coffee sayfası (önceki ana sayfa içeriği)
const AboutCoffePage = () => {
  return (
    <div className="space-y-8">
      {/* Mood Booster Section */}
      <section className="bg-gray-900 rounded-lg overflow-hidden">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4">
            <img 
              src="/api/placeholder/400/300"
              alt="Coffee shop interior"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-400 mb-2">Mood Booster With Coffee >></p>
            <h2 className="text-2xl font-serif mb-4">MOOD BOOSTER?</h2>
            <p className="text-gray-300 text-sm">
              Tetap maksa minum, walau terkadang setelahnya lambung pasti memberontak, hahaha. But, 
              I like it. Kecuali kopi pahit. Ada yang sama seperti saya?
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="grid grid-cols-4 gap-4">
        <div className="aspect-square bg-gray-900 rounded-lg overflow-hidden">
          <img 
            src="/api/placeholder/200/200"
            alt="Vibes Today"
            className="w-full h-full object-cover"
          />
          <p className="text-sm p-2">Vibes Today</p>
        </div>
        <div className="aspect-square bg-gray-900 rounded-lg overflow-hidden">
          <img 
            src="/api/placeholder/200/200"
            alt="Hand and Coffe"
            className="w-full h-full object-cover"
          />
          <p className="text-sm p-2">Hand and Coffe</p>
        </div>
        <div className="aspect-square bg-gray-900 rounded-lg overflow-hidden">
          <img 
            src="/api/placeholder/200/200"
            alt="Coffee Espresso"
            className="w-full h-full object-cover"
          />
          <p className="text-sm p-2">Coffee Espresso</p>
        </div>
        <div className="aspect-square bg-gray-900 rounded-lg overflow-hidden">
          <img 
            src="/api/placeholder/200/200"
            alt="Random Picture"
            className="w-full h-full object-cover"
          />
          <p className="text-sm p-2">Random Picture</p>
        </div>
      </section>

      {/* Break Time Section */}
      <section className="bg-gray-900 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-2">Break Time</h2>
        <p className="text-sm text-gray-400 mb-2">Mengambil jeda sejenak.</p>
        <p className="text-gray-300">
          Istirahatla jiwa-jiwa yang kuat. Kita butuh break time, jeda sejenak 
          dari penatnya bekerja. Jangan terlalu memforsir. Ngopi dulu, kuy.
        </p>
      </section>
    </div>
  );
};

// Ana App Komponenti
const CoffeeShop = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutCoffePage />}
      {currentPage === 'exit' && <ExitPage />}
    </Layout>
  );
};

export default CoffeeShop;
