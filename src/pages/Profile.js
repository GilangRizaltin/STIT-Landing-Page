import React, {useEffect} from 'react';

const Profile = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {/* <div className="relative bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600"
            alt="Kampus STIT Al Wafi"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Profil STIT Al Wafi
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Mewujudkan Pendidikan Islam yang Berkualitas dan Berkarakter
            </p>
          </div>
        </div>
      </div> */}
      {/* Header Section with Background Image */}
      <div className="relative h-[50vh] bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600"
          // src='https://al-wafi.sch.id/src/images/wp/wafi-img-data=gedung_default.png'
          alt="Campus Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Profil STIT Al Wafi
              </h1>
              <p className="text-xl text-white/90">
              Mewujudkan Pendidikan Islam yang Berkualitas dan Berkarakter
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Pembina Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="md:flex">
            {/* Pembina Photo */}
            <div className="md:w-1/3 p-8 bg-blue-50 flex flex-col items-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                <img
                  src="https://alwafi.ac.id/img/webp/pp-data0=ust_ali.webp"
                  alt="Dr. Ali Saman Hasan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Ali Saman Hasan, Lc., LL.M., M.A.</h3>
                <p className="text-blue-600 font-medium">Pembina Yayasan Al Sudais Indonesia</p>
              </div>
            </div>
            
            {/* Pembina Message */}
            <div className="md:w-2/3 p-8 md:p-12">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900">
                  <span className="border-b-4 border-blue-500 pb-2">Sambutan Pembina</span>
                </h2>
              </div>
              
              <div className="prose prose-lg text-gray-600 max-w-none">
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-800 font-medium text-xl mb-8">
                  "Bismillahirrahmanirrahim"
                </blockquote>
                
                <p className="mb-6">
                  Segala puji dan syukur kami panjatkan kepada Allah Subhanahu wa Ta'ala atas rahmat dan 
                  karunia-Nya sehingga Sekolah Tinggi Ilmu Tarbiyah (STIT) Al Wafi Bogor dapat terus 
                  berperan aktif dalam mewujudkan pendidikan Islam yang berkualitas. Kehadiran STIT Al 
                  Wafi Bogor merupakan wujud dari cita-cita luhur untuk mencetak tenaga pendidik yang 
                  tidak hanya unggul dalam keilmuan, tetapi juga berkarakter Islami yang kuat, siap 
                  menghadapi tantangan global, dan mampu menjadi teladan di tengah masyarakat.
                </p>

                <p className="mb-6">
                  STIT Al Wafi Bogor berkomitmen untuk menjadi institusi pendidikan yang berintegritas 
                  dan berkualitas melalui kurikulum yang terintegrasi antara ilmu pengetahuan modern 
                  dan nilai-nilai keislaman. Program unggulan kami, Program Studi Manajemen Pendidikan 
                  Islam (MPI), dirancang untuk menghasilkan tenaga pendidik yang kompeten dan profesional. 
                  Didukung oleh kegiatan pembelajaran praktis, penelitian, serta pengabdian masyarakat, 
                  kami berharap dapat membentuk lulusan yang tidak hanya ahli dalam bidangnya tetapi 
                  juga memiliki kepedulian sosial dan spiritualitas yang tinggi.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <p className="font-semibold text-blue-800 mb-2">Visi STIT Al Wafi:</p>
                  <p className="text-blue-900">
                    "Terwujudnya Sekolah Tinggi Ilmu Tarbiyah Al Wafi Bogor yang unggul dan profesional serta kompetitif secara global di tahun 2034."
                  </p>
                </div>

                <p className="mb-6">
                  Kami mengucapkan terima kasih kepada seluruh jajaran pengurus Yayasan Al Sudais 
                  Indonesia, para dosen, tenaga kependidikan, serta pihak-pihak terkait lainnya yang 
                  telah mendukung dan berkontribusi pada perkembangan STIT Al Wafi Bogor. Semoga dengan 
                  kerja sama ini, STIT Al Wafi dapat terus berkembang menjadi lembaga pendidikan Islam 
                  yang terpercaya dan berkontribusi bagi kemajuan pendidikan di Indonesia.
                </p>

                <div className="mt-12 pt-6 border-t border-gray-200">
                  <blockquote className="text-right italic text-gray-800 font-medium text-xl">
                    "Wassalamualaikum warahmatullahi wabarakatuh"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Institution Profile Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                <span className="border-b-4 border-blue-500 pb-2">Profil Institusi</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tentang STIT Al Wafi</h3>
                <p className="text-gray-600 mb-6">
                  Sekolah Tinggi Ilmu Tarbiyah (STIT) Al Wafi adalah lembaga pendidikan tinggi yang berfokus pada pengembangan ilmu pendidikan Islam. Dengan izin operasional yang dikeluarkan oleh Kementerian Agama Republik Indonesia No. 1044 Tahun 2024, STIT Al Wafi bertujuan untuk mencetak lulusan yang memiliki kompetensi dalam bidang tarbiyah, khususnya pendidikan Islam, dengan standar akademis yang sesuai dengan kebutuhan masyarakat modern.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Keunggulan</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Tenaga pengajar profesional dan para masyaikh</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Terbuka untuk ikhwan dan akhwat</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Dosen S2, S3 alumni luar negeri dan dalam negeri</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Perpaduan Islamic Studies dan kurikulum pemerintah</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Kerjasama internasional</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Legalitas</h3>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <p className="font-semibold text-blue-800">Izin Operasional:</p>
                  <p className="text-blue-900">Kementerian Agama Republik Indonesia No. 1044 Tahun 2024</p>
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Program Studi</h3>
                <div className="bg-white border border-blue-200 rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-blue-600 px-4 py-3">
                    <h4 className="text-white font-semibold">Manajemen Pendidikan Islam (MPI)</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 mb-3">Program studi yang mempersiapkan tenaga pendidik profesional dengan penguasaan manajemen pendidikan berbasis nilai-nilai Islam.</p>
                    <div className="flex items-center text-sm text-blue-600">
                      <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span>Gelar: Sarjana Pendidikan Islam (S.Pd.I)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Faculty Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Masyaikh Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-blue-600 px-6 py-4">
              <h3 className="text-xl font-bold text-white">Para Masyaikh</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: "Mogahid Idris, M.I.B.A", image: "https://alwafi.ac.id/img/masyaikh/mogahid.jpg" },
                  { name: "Dr. Talal Ahmed, E.E., M.A.", image: "https://alwafi.ac.id/img/masyaikh/talal.jpg" },
                  { name: "Dr. Aboelgasim Muhammad, S.M.A.", image: "https://alwafi.ac.id/img/masyaikh/aboelgasim.jpg" },
                  { name: "Magdi Yahya Ahmed, B.A", image: "https://alwafi.ac.id/img/masyaikh/magdi.jpg" },
                  { name: "Zakarya Mohammed Raweh", image: "https://alwafi.ac.id/img/masyaikh/zakarya.jpg" },
                ].map((teacher, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-200 mb-3">
                      <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-sm font-medium text-gray-800">{teacher.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Dosen Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-blue-600 px-6 py-4">
              <h3 className="text-xl font-bold text-white">Tenaga Pengajar</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {[
                  "Prof. Mohd. Zambri bin Jaafar - Manajemen Pendidikan",
                  "Prof. Maila Dinia Husni Rahiem, M.A., Ph.D. - Manajemen PAUD",
                  "Dr. Ali Saman Hasan, Lc., LL.M., M.A. - Manajemen Pondok Pesantren",
                  "Dr. Marullah Marzuq, M.Ag., LL.M. - Metodologi Pembelajaran PAUD",
                  "Kartiko Adi Pramono, Dipl.Ing.HTL.ACMC - Teknologi Pendidikan",
                  "Eri Kusmar, S.H., M.Env. Mgmt - Manajemen Lingkungan dan Sumber Daya",
                  "Muhammad Bakri Rahimin, Lc., M.E - Ekonomi Syariah",
                  "Suworo, M.M - Manajemen",
                  "Muhammad Asadullah, B.A., M.H. - Syariah",
                  "Dr.(c) Fortin Sri Haryani, M.Pd. - Manajemen Pendidikan",
                  "Sri Kartini, S.Pd., M.Pd. - Pengembangan Kurikulum"
                ].map((teacher, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">{teacher}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;