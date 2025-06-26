import React, {useEffect} from 'react';

const Beasiswa = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);
  const scholarships = [
    {
      title: "Beasiswa Alumni WIIBS",
      icon: "fas fa-user-graduate",
      criteria: [
        "Beasiswa untuk Alumni Al-Wafi Islamic boarding school",
        "100% gratis biaya perkuliahan",
        "Bersedia mengikuti program beasiswa hingga selesai",
        "Memiliki prestasi akademik atau non-akademik",
        "Aktif dalam kegiatan keagamaan dan sosial"
      ],
      tag: "100% Gratis"
    },
    {
      title: "Beasiswa S1 untuk Penghafal Al Quran",
      icon: "fas fa-book-reader",
      components: [
        "Bebas biaya perkuliahan selama 4 tahun (8 semester).",
        "Program pembinaan khusus bagi mahasiswa hafizh Al-Qur’an.",
        "Kesempatan magang dan pengabdian di lembaga pendidikan Islam."
      ],
      requirements: [
        "Berusia maksimal 22 tahun pada saat pendaftaran.",
        "Memiliki hafalan minimal 20 Juz Al-Qur'an.",
        "Lulus pendidikan menengah atas (SMA/MA/pondok pesantren atau sederajat).",
        "Memiliki surat rekomendasi dari lembaga pendidikan atau pesantren tempat menghafal Al-Qur’an.",
        "Bersedia mengikuti program beasiswa hingga selesai."
      ],
      tag: "100% Gratis"
    },
    {
      title: "Beasiswa untuk Kader Pesantren",
      icon: "fas fa-user-shield",
      components: [
        "Bebas biaya perkuliahan selama 4 tahun (8 semester).",
        "Program pembinaan khusus bagi mahasiswa hafizh Al-Qur’an.",
        "Kesempatan magang dan pengabdian di lembaga pendidikan Islam."
      ],
      requirements: [
        "Muslim/muslimah usia maksimal 25 tahun.",
        "Hafal minimal 3 juz Al-Qur’an (dibuktikan dengan sertifikat atau rekomendasi).",
        "Lulusan SMA/sederajat dengan nilai rata-rata minimal 75.",
        "Memiliki rekomendasi resmi dari pesantren pengirim.",
        "Berkomitmen untuk kembali mengabdi di pesantren setelah menyelesaikan studi."
      ],
      tag: "50% Gratis"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/islamic-pattern.png')] mix-blend-overlay opacity-20 bg-repeat bg-center"></div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg')] mix-blend-overlay opacity-50 bg-cover bg-center"></div>
        </div>
        <div className="relative container mx-auto h-full flex items-center justify-center px-4">
          <div className="text-center">
            <span className="inline-block px-6 py-2 bg-yellow-500 text-white text-sm font-semibold rounded-full mb-4">
              Tahun Akademik 2025/2026
            </span>
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
              Program Beasiswa
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Raih kesempatan beasiswa kuliah gratis dan diskon biaya pendidikan hingga 75%
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro Section */}
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Beasiswa STIT Al Wafi Bogor
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              STIT Al Wafi Bogor berkomitmen untuk membantu mahasiswa berprestasi dan memiliki semangat belajar tinggi melalui program beasiswa dan bantuan pendidikan.
            </p>
          </div>

          {/* Scholarship Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {scholarships.map((scholarship, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${scholarship.title === "Beasiswa S1 untuk Penghafal Al Quran" ? "border-4 border-yellow-400" : ""}`}>
                <div className="text-center mb-6">
                  <span className="inline-block p-4 rounded-full bg-gray-100 mb-4">
                    <i className={`${scholarship.icon} text-3xl text-gray-900`}></i>
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{scholarship.title}</h3>
                </div>
                {scholarship.criteria ? (
                  <ul className="space-y-3 mb-6">
                    {scholarship.criteria.map((criterion, idx) => (
                      <li key={idx} className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-600">{criterion}</span>
                      </li>
                    ))}
                  </ul>
                ) : scholarship.description ? (
                  <p className="text-gray-600 mb-6">{scholarship.description}</p>
                ) : scholarship.components && scholarship.requirements ? (
                  <>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Komponen:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {scholarship.components.map((component, idx) => (
                          <li key={idx}>{component}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Syarat:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {scholarship.requirements.map((requirement, idx) => (
                          <li key={idx}>{requirement}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : null}
                <div className="text-center">
                  <span className="inline-block px-4 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                    {scholarship.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Daftar Sekarang
            </h3>
            <p className="text-gray-600 mb-8">
              Jangan lewatkan kesempatan untuk mendapatkan beasiswa kuliah di STIT Al Wafi Bogor. 
              Hubungi admin kami untuk informasi lebih lanjut dan bantuan pendaftaran.
            </p>
            <a
              href="https://wa.me/6281234567890?text=Assalamualaikum%2C+saya+ingin+info+beasiswa+STIT+Al+Wafi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              <i className="fab fa-whatsapp mr-2 text-xl"></i>
              Hubungi Admin via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beasiswa;
