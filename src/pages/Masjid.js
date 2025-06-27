import React, {useEffect} from 'react';

const Masjid = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);
  const features = [
    {
      icon: "fas fa-moon",
      title: "Shalat 5 Waktu Berjamaah",
      description: "Fasilitas utama untuk melaksanakan shalat 5 waktu secara berjamaah bagi seluruh civitas akademika"
    },
    {
      icon: "fas fa-book-quran",
      title: "Kajian Rutin",
      description: "Kajian ilmu keislaman rutin yang diisi oleh para asatidz yang berkompeten di bidangnya"
    },
    {
      icon: "fas fa-microphone-alt",
      title: "Sound System Modern",
      description: "Dilengkapi dengan sistem audio berkualitas tinggi untuk kenyamanan dalam ibadah"
    },
    {
      icon: "fas fa-wind",
      title: "Sistem Pendingin",
      description: "AC dan ventilasi yang memadai untuk kenyamanan jamaah dalam beribadah"
    },
    {
      icon: "fas fa-faucet",
      title: "Tempat Wudhu",
      description: "Fasilitas tempat wudhu yang bersih dan terpisah untuk ikhwan dan akhwat"
    },
    {
      icon: "fas fa-box",
      title: "Lemari Penyimpanan",
      description: "Tersedia lemari untuk penyimpanan Al-Qur'an, buku-buku, dan perlengkapan ibadah"
    }
  ];

  const activities = [
    {
      title: "Kajian Ba'da Subuh",
      schedule: "Setiap hari, Ba'da Subuh",
      description: "Kajian tafsir dan hadits untuk meningkatkan pemahaman keislaman"
    },
    {
      title: "Tahsin Al-Qur'an",
      schedule: "Senin & Kamis, 16:00 WIB",
      description: "Program perbaikan bacaan Al-Qur'an dengan metode yang sistematis"
    },
    {
      title: "Kajian Fiqih",
      schedule: "Jumat, Ba'da Ashar",
      description: "Pembelajaran hukum-hukum Islam praktis dalam kehidupan sehari-hari"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {/* <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/2869318/pexels-photo-2869318.jpeg"
            alt="Masjid"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative container mx-auto h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
              Masjid STIT Al Wafi
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Pusat Ibadah dan Pembinaan Rohani Civitas Akademika
            </p>
          </div>
        </div>
      </section> */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <img 
            src="/images/background_stit_1.jpeg"
            alt="Ruang Kelas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
              Masjid STIT Al Wafi
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Pusat Ibadah dan Pembinaan Rohani Civitas Akademika
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Fasilitas Masjid
            </h2>
            <p className="text-lg text-gray-600">
              Masjid STIT Al Wafi dilengkapi dengan berbagai fasilitas modern untuk mendukung 
              kegiatan ibadah dan pembelajaran agama Islam.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <span className="inline-block p-4 rounded-full bg-gray-100 mb-4">
                    <i className={`${feature.icon} text-3xl text-gray-900`}></i>
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Mari Makmurkan Masjid
            </h3>
            <p className="text-gray-600 mb-8">
              Bergabunglah dalam kegiatan-kegiatan keagamaan di Masjid STIT Al Wafi untuk 
              meningkatkan kualitas spiritual dan keilmuan Islam.
            </p>
            <div className="inline-block px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg">
              <i className="fas fa-mosque mr-2"></i>
              Jadwal Shalat & Kegiatan
            </div>
          </div>

          {/* Activities Section */}
          <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Kegiatan Rutin
            </h3>
            <div className="space-y-6">
              {activities.map((activity, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start gap-6 p-6 bg-gray-50 rounded-lg">
                  <div className="md:w-1/4">
                    <h4 className="font-bold text-gray-900">{activity.title}</h4>
                    <p className="text-sm text-gray-600">{activity.schedule}</p>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-gray-700">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Masjid;
