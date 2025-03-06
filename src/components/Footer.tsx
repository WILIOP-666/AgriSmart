import { Link } from 'react-router-dom';
import { Facebook, Instagram, Leaf, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="ml-2 text-xl font-bold">AgriTech Indonesia</span>
            </div>
            <p className="text-green-100 mb-4">
              Memajukan pertanian Indonesia melalui teknologi dan praktik berkelanjutan untuk masa depan yang lebih baik.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-200 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-green-200 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-green-200 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-green-200 hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-200 hover:text-white">Beranda</Link>
              </li>
              <li>
                <Link to="/about" className="text-green-200 hover:text-white">Tentang Kami</Link>
              </li>
              <li>
                <Link to="/services" className="text-green-200 hover:text-white">Layanan</Link>
              </li>
              <li>
                <Link to="/products" className="text-green-200 hover:text-white">Produk</Link>
              </li>
              <li>
                <Link to="/contact" className="text-green-200 hover:text-white">Kontak</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan Kami</h3>
            <ul className="space-y-2">
              <li className="text-green-200 hover:text-white">Konsultasi Pertanian</li>
              <li className="text-green-200 hover:text-white">Pelatihan Petani</li>
              <li className="text-green-200 hover:text-white">Pertanian Organik</li>
              <li className="text-green-200 hover:text-white">Teknologi Smart Farming</li>
              <li className="text-green-200 hover:text-white">Distribusi Hasil Panen</li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Jl. Pertanian No. 123, Jakarta Selatan, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-green-400" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-green-400" />
                <span>info@agritech-indonesia.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-6 text-center text-green-200">
          <p>&copy; {new Date().getFullYear()} AgriTech Indonesia. Seluruh Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
