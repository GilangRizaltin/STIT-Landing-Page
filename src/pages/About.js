import React, {useEffect} from 'react';

const About = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top on component mount
    }, []);
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      {/* <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Tentang STIT Al Wafi</h1>
          <p className="text-xl text-gray-200">
            Membangun Generasi Pendidik Islam yang Berkualitas dan Berakhlak Mulia
          </p>
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
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Tentang STIT Al Wafi
              </h1>
              <p className="text-xl text-white/90">
              Membangun Generasi Pendidik Islam yang Berkualitas dan Berakhlak Mulia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-blue-900">Visi</h2>
              <p className="text-gray-600 leading-relaxed">
                Menjadi pusat unggulan pendidikan tinggi Islam yang menghasilkan pendidik profesional, 
                berakhlak mulia, dan berwawasan global pada tahun 2030.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-blue-900">Misi</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Menyelenggarakan pendidikan tinggi yang berkualitas dalam bidang pendidikan Islam
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Mengembangkan penelitian yang inovatif dan bermanfaat bagi masyarakat
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Melaksanakan pengabdian masyarakat berbasis nilai-nilai Islam
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Membangun kerjasama dengan berbagai institusi pendidikan dalam dan luar negeri
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Sejarah STIT Al Wafi</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                STIT Al Wafi didirikan pada tahun 2010 sebagai respons terhadap kebutuhan akan 
                lembaga pendidikan tinggi Islam yang berkualitas di wilayah Bogor dan sekitarnya.
              </p>
              <p className="mb-4">
                Berawal dari sebuah yayasan pendidikan Islam yang telah berpengalaman mengelola 
                pendidikan dasar dan menengah, STIT Al Wafi hadir untuk melengkapi rantai 
                pendidikan Islam yang berkualitas.
              </p>
              <p>
                Dalam perjalanannya, STIT Al Wafi terus berkembang dan meningkatkan kualitas 
                pendidikannya melalui berbagai program unggulan dan kerjasama dengan berbagai 
                institusi pendidikan baik dalam maupun luar negeri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-900 mb-4">
                <i className="fas fa-book-reader text-4xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Keislaman</h3>
              <p className="text-gray-600">
                Menjunjung tinggi nilai-nilai Islam dalam setiap aspek pendidikan
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-900 mb-4">
                <i className="fas fa-award text-4xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Profesionalisme</h3>
              <p className="text-gray-600">
                Mengutamakan kualitas dan kompetensi dalam pendidikan
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-900 mb-4">
                <i className="fas fa-hands-helping text-4xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pengabdian</h3>
              <p className="text-gray-600">
                Berkomitmen untuk memberikan manfaat bagi masyarakat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Fasilitas Kampus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Perpustakaan Digital</h3>
              <p className="text-gray-600">
                Koleksi buku dan jurnal digital yang lengkap
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Laboratorium</h3>
              <p className="text-gray-600">
                Lab komputer dan microteaching modern
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Masjid Kampus</h3>
              <p className="text-gray-600">
                Pusat kegiatan ibadah dan kajian Islam
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Area Olahraga</h3>
              <p className="text-gray-600">
                Fasilitas olahraga lengkap untuk mahasiswa
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
