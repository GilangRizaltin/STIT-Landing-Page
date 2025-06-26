import React, {useEffect} from 'react';

const Kelas = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);
  const facilities = [
    {
      icon: "fas fa-tv",
      title: "Smart TV Interaktif",
      description: "Setiap ruang kelas dilengkapi dengan Smart TV 65 inch untuk mendukung pembelajaran interaktif"
    },
    {
      icon: "fas fa-wind",
      title: "AC & Ventilasi",
      description: "Sistem pendingin ruangan dan ventilasi yang optimal untuk kenyamanan belajar"
    },
    {
      icon: "fas fa-wifi",
      title: "Koneksi Internet",
      description: "Akses internet berkecepatan tinggi untuk mendukung pembelajaran digital"
    },
    {
      icon: "fas fa-chair",
      title: "Furnitur Ergonomis",
      description: "Meja dan kursi yang dirancang ergonomis untuk kenyamanan belajar jangka panjang"
    },
    {
      icon: "fas fa-chalkboard",
      title: "Papan Tulis Premium",
      description: "Whiteboard berkualitas tinggi dengan pencahayaan yang optimal"
    },
    {
      icon: "fas fa-lightbulb",
      title: "Pencahayaan LED",
      description: "Sistem pencahayaan LED yang ramah mata untuk aktivitas pembelajaran"
    }
  ];

  const features = [
    {
      title: "Kapasitas Optimal",
      description: "Setiap ruang kelas dapat menampung 30-35 mahasiswa dengan jarak yang ideal antar tempat duduk",
      image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg"
    },
    {
      title: "Desain Modern",
      description: "Interior ruang kelas didesain dengan konsep modern yang mendukung berbagai metode pembelajaran",
      image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg"
    },
    {
      title: "Multimedia Ready",
      description: "Dilengkapi dengan sistem audio-visual dan konektivitas untuk presentasi dan pembelajaran digital",
      image: "https://images.pexels.com/photos/373488/pexels-photo-373488.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg"
            alt="Ruang Kelas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
              Ruang Kelas Modern
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Fasilitas pembelajaran yang nyaman dan dilengkapi teknologi modern untuk mendukung proses belajar mengajar
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fasilitas Ruang Kelas
            </h2>
            <p className="text-lg text-gray-600">
              Setiap ruang kelas dirancang untuk memberikan pengalaman belajar yang optimal dengan fasilitas modern
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="p-3 bg-gray-100 rounded-lg">
                    <i className={`${facility.icon} text-2xl text-gray-900`}></i>
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{facility.title}</h3>
                </div>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">12+</div>
              <div className="text-gray-400">Ruang Kelas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">35</div>
              <div className="text-gray-400">Kapasitas per Kelas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400">Smart Classroom</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 mb-16 last:mb-0`}>
                <div className="lg:w-1/2">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-lg text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Kelas;
