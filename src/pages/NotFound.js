import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-6xl font-extrabold text-gray-900">404</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900">Halaman Tidak Ditemukan</p>
          <p className="mt-2 text-sm text-gray-600">
            Maaf, halaman yang Anda cari tidak dapat ditemukan.
          </p>
        </div>
        <div>
          <Link
            to="/"
            className="btn-primary inline-flex items-center"
          >
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
