import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const ProgramStudi = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="relative h-[50vh] bg-gray-900">
        <img
          src="/images/background_stit_1.jpeg"
          alt="Education Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60">
          <div className="max-w-7xl sm:px-6 lg:px-8 mx-auto h-full flex items-center px-4 pt-20">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Program Studi
              </h1>
              <p className="text-xl text-white/90">
                Manajemen Pendidikan Islam
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-20 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Program Overview */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Manajemen Pendidikan Islam
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    // src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800"
                    src='https://jurnaldepok.id/wp-content/uploads/2024/06/unnamed-file-1.jpg'
                    alt="Islamic Education Management"
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>
                
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    Program Studi Manajemen Pendidikan Islam (MPI) didirikan untuk menghasilkan lulusan 
                    sarjana (S1) dengan gelar S.Pd. (Sarjana Pendidikan) yang kompeten dalam mengelola 
                    pendidikan berbasis nilai-nilai keislaman.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed">
                    Kurikulum program studi ini dirancang secara integratif, menggabungkan aspek agama, 
                    pendidikan, dan teknologi informasi. Pendekatan ini bertujuan mencetak lulusan dengan 
                    karakter C5U, yaitu <strong>Credible, Capable, Confidence, Communicative, Creative</strong>, 
                    dan menjadi teladan (<strong>Uswah</strong>) di masyarakat.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed">
                    Kami membantu mencetak pendidik yang berakhlak mulia dengan dukungan ilmu, pelatihan, 
                    dan bimbingan sesuai dengan nilai-nilai Islam.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link 
                      to="/daftar" 
                      className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-center"
                    >
                      Daftar Sekarang
                    </Link>
                    <Link 
                      to="/tentang" 
                      className="px-6 py-3 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors text-center"
                    >
                      Lihat Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision and Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Visi Program Studi
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Menjadi program studi terkemuka dan terpercaya dalam mencetak tenaga pendidik yang 
                profesional dan berkarakter Islami, guna mendukung penyelenggaraan pendidikan 
                berkualitas pada tahun 2035.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/daftar" 
                  className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-center"
                >
                  Daftar Sekarang
                </Link>
                <Link 
                  to="/tentang" 
                  className="px-6 py-3 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors text-center"
                >
                  Lihat Selengkapnya
                </Link>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Misi Program Studi
              </h3>
              <ul className="space-y-4 text-gray-600 leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Menjadi program studi unggulan yang menghasilkan tenaga pendidik profesional dan 
                  kompeten di bidang manajemen pendidikan berbasis nilai-nilai Islam.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Membangun reputasi sebagai pusat pendidikan yang terpercaya dalam pengembangan 
                  ilmu manajemen pendidikan yang integratif antara nilai agama, teknologi, dan 
                  keilmuan modern.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Membentuk lulusan yang berkarakter Islami, inovatif, dan mampu memberikan solusi 
                  untuk tantangan pendidikan di tingkat nasional maupun global.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mengembangkan lingkungan akademik yang mendukung penelitian dan inovasi dalam 
                  pendidikan Islami berbasis teknologi.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mendorong pengabdian masyarakat yang berorientasi pada pemberdayaan dan peningkatan 
                  kualitas pendidikan Islami di berbagai lapisan masyarakat.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramStudi;
