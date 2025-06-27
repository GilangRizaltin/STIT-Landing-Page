import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const Sejarah = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="relative h-[60vh]">
        <img 
          src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg" 
          alt="Campus Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60">
          <div className="container mx-auto h-full flex items-center justify-center px-4">
            <h1 className="text-4xl md:text-6xl text-white font-bold text-center">
              Sejarah Yayasan Al Sudais Indonesia
            </h1>
          </div>
        </div>
      </section> */}
      <div className="relative h-[50vh] bg-gray-900">
        <img
          src="/images/background_stit_3.jpeg"
          // src='https://al-wafi.sch.id/src/images/wp/wafi-img-data=gedung_default.png'
          alt="Campus Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sejarah Yayasan Al Sudais Indonesia
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className=" mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Yayasan Al Sudais Indonesia</h2>
                <p className="text-gray-700 leading-relaxed">
                  Yayasan ini sudah tercatat pada Kementrian Hukum dan Hak Asasi Manusia dan dikuatkan dengan surat no. AHU- 0046994.AH.01.04. Tahun 2016, yang memutuskan yayasan ini terdaftar dengan nomor AHU-0051122.AH.01.12. Tahun 2016 tertanggal 28 Desember 2016.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Lokasi Strategis</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yayasan Al Sudais Indonesia Pesantren Al Wafi dibangun di atas lahan seluas ± 4Ha, dengan area yang relatif dekat Jakarta, BSD – Tangerang, Depok.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Perjalanan Al Wafi</h3>
                <p className="text-gray-700 leading-relaxed">
                  Selama 7 tahun, Al Wafi International Islamic Boarding School telah berhasil meluluskan banyak santri yang kemudian melanjutkan pendidikan mereka ke berbagai Perguruan Tinggi Negeri bergengsi serta kampus-kampus di Timur Tengah dan luar negeri.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Pendirian STIT Al Wafi</h3>
                <p className="text-gray-700 leading-relaxed">
                  Melihat kesuksesan tersebut, Yayasan Al Sudais Indonesia berkomitmen untuk mengembangkan lembaga pendidikan dengan mendirikan Sekolah Tinggi Ilmu Tarbiyah (STIT) Al Wafi. Langkah ini diambil untuk mencetak para pengajar profesional pesantren yang akan melanjutkan misi dakwah dan pendidikan Islam.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Visi Pendidikan</h3>
                <p className="text-gray-700 leading-relaxed">
                  STIT Al Wafi bertujuan untuk mencetak lulusan yang memiliki kompetensi unggul dalam bidang tarbiyah, khususnya pendidikan Islam. Para lulusan diharapkan memiliki standar akademis yang sesuai dengan kebutuhan masyarakat modern, sehingga dapat mengintegrasikan nilai-nilai Islam dengan perkembangan zaman.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link 
                to="/" 
                className="inline-block px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sejarah;
