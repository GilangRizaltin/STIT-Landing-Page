import React, {useEffect} from 'react';

const VisiMisi = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section with Background Image */}
      <div className="relative h-[50vh] bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600"
          alt="Campus Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Visi dan Misi STIT Al Wafi
              </h1>
              <p className="text-xl text-white/90">
                "Mewujudkan Pendidikan Islam yang Berkualitas"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Sidebar and Content Section */}
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-12">
                <div className="w-full md:w-64 flex-shrink-0">
                  <div className="sticky top-24">
                    <div className="bg-white p-4 rounded-xl shadow-lg">
                      <img
                        src="/images/stit_bareng.JPG"
                        alt="Vision and Mission"
                        className="w-full rounded-lg shadow-md mb-6"
                      />
                      <div className="text-center">
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">STIT Al Wafi Bogor</h3>
                        <p className="text-sm text-gray-600">Visi dan Misi Institusi</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-grow space-y-8 text-gray-600 leading-relaxed">
                  <section>
                    <div className='w-full md:h-10 mb-6'/>
                    <p className='text-3xl font-bold text-center text-gray-900 mb-6'>VISI</p>
                    <p className="text-justify">
                      "Menjadi Sekolah Tinggi terkemuka dan tepercaya dalam mencetak tenaga pendidik yang profesional dan berkarakter Islami guna mendukung penyelenggaraan pendidikan yang berkualitas pada tahun 2045."
                    </p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">MISI</h2>
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Menjadi sekolah tinggi unggulan yang menghasilkan tenaga pendidik profesional dan kompeten di bidang manajemen pendidikan berbasis nilai-nilai Islam.</li>
                      <li>Membangun reputasi sebagai pusat pendidikan yang tepercaya dalam pengembangan ilmu manajemen pendidikan yang integratif antara nilai-nilai agama, teknologi, dan keilmuan modern.</li>
                      <li>Membentuk lulusan yang berkarakter Islami, inovatif, dan mampu memberikan solusi atas berbagai tantangan pendidikan di tingkat nasional maupun global.</li>
                      <li>Mengembangkan lingkungan akademik yang mendukung penelitian dan inovasi dalam pendidikan Islam berbasis teknologi.</li>
                      <li>Mendorong pengabdian kepada masyarakat yang berorientasi pada pemberdayaan dan peningkatan kualitas pendidikan Islam di berbagai lapisan masyarakat.</li>
                    </ol>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">VISI PROGRAM STUDI</h2>
                    <p className="text-justify">
                      "Menjadi pusat pengembangan manajemen pendidikan Islam yang berlandaskan kesadaran agama yang tinggi serta bersikap positif terhadap arus globalisasi, dengan menjadikan Nabi Muhammad Shallallahu ‘alaihi wasallam, para sahabat, dan ulama Ahlusunnah sebagai teladan, guna mendukung penyelenggaraan pendidikan yang berkualitas pada tahun 2045."
                    </p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">MISI PROGRAM STUDI</h2>
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Melaksanakan pendidikan yang profesional dan berstandar internasional (world-class), berdasarkan Al-Qur’an dan Sunnah sesuai dengan pemahaman ulama Ahlusunnah.</li>
                      <li>Mengembangkan riset di bidang manajemen pendidikan Islam yang integratif, berbasis akhlakul karimah, bermuamalah dengan lingkungan, dan berprinsip leaderpreneurship.</li>
                      <li>Menyelenggarakan pengabdian kepada masyarakat (Community Engagement Program) yang berorientasi pada pemberdayaan dan peningkatan kualitas pendidikan Islam yang unggul dalam menyikapi perubahan global, berdasarkan Al-Qur’an dan Sunnah sesuai dengan pemahaman ulama Ahlusunnah.</li>
                      <li>Meningkatkan kolaborasi yang berkelanjutan dengan berbagai pihak di tingkat nasional maupun internasional dalam bidang manajemen pendidikan Islam, sesuai dengan Al-Qur’an dan Sunnah.</li>
                    </ol>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;
