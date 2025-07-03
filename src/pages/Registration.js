import React, { useState, useEffect } from 'react';

const Registration = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top on component mount
    }, []);
  const [formData, setFormData] = useState({
    program: '',
    nama: '',
    email: '',
    telepon: '',
    alamat: '',
    pendidikanTerakhir: '',
    sekolahAsal: '',
    tahunLulus: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Terima kasih telah mendaftar! Kami akan menghubungi Anda segera.');
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      {/* <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Pendaftaran Mahasiswa Baru</h1>
          <p className="text-xl text-gray-200">
            Mulai perjalanan pendidikan Anda di STIT Al Wafi
          </p>
        </div>
      </section> */}

      <div className="relative h-[50vh] bg-gray-900">
        <img
          src="/images/background_stit_1.jpeg"
          // src='https://al-wafi.sch.id/src/images/wp/wafi-img-data=gedung_default.png'
          alt="Campus Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Pendaftaran Mahasiswa Baru
              </h1>
              <p className="text-xl text-white/90">
              Mulai perjalanan pendidikan Anda di STIT Al Wafi
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Program Selection */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Program Studi*
                </label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Pilih Program Studi</option>
                  <option value="pai">Pendidikan Agama Islam (S1)</option>
                  <option value="pgmi">Pendidikan Guru MI (S1)</option>
                </select>
              </div>

              {/* Personal Information */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Nama Lengkap*
                </label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nomor Telepon*
                  </label>
                  <input
                    type="tel"
                    name="telepon"
                    value={formData.telepon}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Alamat*
                </label>
                <textarea
                  name="alamat"
                  value={formData.alamat}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              {/* Educational Background */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Pendidikan Terakhir*
                </label>
                <select
                  name="pendidikanTerakhir"
                  value={formData.pendidikanTerakhir}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Pilih Pendidikan Terakhir</option>
                  <option value="sma">SMA/MA</option>
                  <option value="smk">SMK</option>
                  <option value="pesantren">Pesantren</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Sekolah Asal*
                  </label>
                  <input
                    type="text"
                    name="sekolahAsal"
                    value={formData.sekolahAsal}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Tahun Lulus*
                  </label>
                  <input
                    type="number"
                    name="tahunLulus"
                    value={formData.tahunLulus}
                    onChange={handleChange}
                    required
                    min="2000"
                    max={new Date().getFullYear()}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Kirim Pendaftaran
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Persyaratan Pendaftaran</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Fotokopi ijazah terakhir
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Fotokopi nilai UN/transkrip
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Fotokopi KTP
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Pas foto terbaru
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Surat keterangan sehat
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Informasi Tambahan</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Pendaftaran dapat dilakukan secara online atau langsung ke kampus
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Biaya pendaftaran dapat dibayarkan melalui transfer bank
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Tersedia program beasiswa untuk mahasiswa berprestasi
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Proses seleksi meliputi tes tertulis dan wawancara
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
