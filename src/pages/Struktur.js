import React, {useEffect} from 'react';

const Struktur = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);
  const strukturData = {
    pimpinan: [
      {
        title: "Ketua",
        name: "Dr. Ali Saman Hasan, Lc., LL.M., M.A."
      },
      {
        title: "Wakil Ketua I (Bidang Akademik)",
        name: "Muhammad Suja'i Anhar, S.Pd.I."
      },
      {
        title: "Wakil Ketua II (Bidang Administrasi Umum dan Keuangan)",
        name: "Syahrul, Lc., M.A."
      },
      {
        title: "Wakil Ketua III (Bidang Kemahasiswaan dan Kerjasama)",
        name: "Ryan Hidayat, Lc."
      }
    ],
    programStudi: [
      {
        title: "Ketua Program Studi",
        name: "Muhammad Bakri Rahimin, Lc., M.E."
      },
      {
        title: "Sekretaris Program Studi",
        name: "Abdurrahman, S.Pd."
      }
    ],
    lembaga: [
      {
        title: "Kepala Lembaga Penjaminan Mutu (LPM)",
        name: "Ahmad Muslih, Lc., M.Pd."
      },
      {
        title: "Kepala Unit Teknologi Informasi (TI)",
        name: "Taufik Abdur Rahman"
      },
      {
        title: "Kepala Biro Administrasi Akademik dan Kemahasiswaan (BAAK)",
        name: "Zikra Juninawan, S.Pd., M.E."
      },
      {
        title: "Kepala Biro Administrasi Umum dan Keuangan (BAUK)",
        name: "Juwany Anwar, S.M."
      },
      {
        title: "Kepala Divisi Marketing dan Promosi",
        name: "Suworo, S.Si., M.M."
      },
      {
        title: "Kepala Divisi Hubungan Masyarakat",
        name: "Iskandar Jayadi, S.Pd., M.A."
      },
      {
        title: "Kepala Lembaga Jurnal Ilmiah",
        name: "Dr. Ananingtyias Septin Darmarini, S.Pi., M.P."
      }
    ],
    organisasiMahasiswa: [
      {
        title: "Senat Mahasiswa dan Unit Kegiatan Mahasiswa (UKM)",
        description: "Berdiri di bawah koordinasi Wakil Ketua III Bidang Kemahasiswaan dan Kerjasama."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <section className="relative h-[50vh] bg-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80')] opacity-30 bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Struktur Organisasi
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Kepengurusan dan Tata Kelola STIT Al Wafi
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-900"></div>
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
              Struktur Organisasi
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Kepengurusan dan Tata Kelola STIT Al Wafi
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Pimpinan STIT Al Wafi */}
            <div className="group">
              <div className="flex items-center mb-8">
                <div className="h-0.5 w-16 bg-amber-900 mr-4"></div>
                <h2 className="text-2xl font-light tracking-wider text-gray-800 uppercase">
                  Pimpinan
                </h2>
              </div>
              <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100 group-hover:border-amber-900 transition-all duration-300">
                <div className="grid divide-y divide-gray-100">
                  {strukturData.pimpinan.map((item, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-3 p-6 hover:bg-gray-50 transition-colors duration-200">
                      <div className="md:col-span-1">
                        <h3 className="font-medium text-gray-900 text-lg">{item.title}</h3>
                      </div>
                      <div className="md:col-span-2 mt-2 md:mt-0">
                        <p className="text-gray-700">{item.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Program Studi */}
            <div className="group">
              <div className="flex items-center mb-8">
                <div className="h-0.5 w-16 bg-amber-900 mr-4"></div>
                <h2 className="text-2xl font-light tracking-wider text-gray-800 uppercase">
                  Program Studi
                </h2>
              </div>
              <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100 group-hover:border-amber-900 transition-all duration-300">
                <div className="grid divide-y divide-gray-100">
                  {strukturData.programStudi.map((item, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-3 p-6 hover:bg-gray-50 transition-colors duration-200">
                      <div className="md:col-span-1">
                        <h3 className="font-medium text-gray-900 text-lg">{item.title}</h3>
                      </div>
                      <div className="md:col-span-2 mt-2 md:mt-0">
                        <p className="text-gray-700">{item.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Lembaga dan Unit Pendukung */}
            <div className="group">
              <div className="flex items-center mb-8">
                <div className="h-0.5 w-16 bg-amber-900 mr-4"></div>
                <h2 className="text-2xl font-light tracking-wider text-gray-800 uppercase">
                  Lembaga Pendukung
                </h2>
              </div>
              <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100 group-hover:border-amber-900 transition-all duration-300">
                <div className="grid divide-y divide-gray-100">
                  {strukturData.lembaga.map((item, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-3 p-6 hover:bg-gray-50 transition-colors duration-200">
                      <div className="md:col-span-1">
                        <h3 className="font-medium text-gray-900 text-lg">{item.title}</h3>
                      </div>
                      <div className="md:col-span-2 mt-2 md:mt-0">
                        <p className="text-gray-700">{item.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Organisasi Kemahasiswaan */}
            <div className="group">
              <div className="flex items-center mb-8">
                <div className="h-0.5 w-16 bg-amber-900 mr-4"></div>
                <h2 className="text-2xl font-light tracking-wider text-gray-800 uppercase">
                  Kemahasiswaan
                </h2>
              </div>
              <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100 group-hover:border-amber-900 transition-all duration-300">
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="md:col-span-1">
                      <h3 className="font-medium text-gray-900 text-lg">
                        {strukturData.organisasiMahasiswa[0].title}
                      </h3>
                    </div>
                    <div className="md:col-span-2 mt-2 md:mt-0">
                      <p className="text-gray-700">
                        {strukturData.organisasiMahasiswa[0].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="border-t border-amber-900 pt-8">
              <p className="text-gray-400 text-center">
                © {new Date().getFullYear()} STIT Al Wafi - Seluruh hak cipta dilindungi
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Struktur;