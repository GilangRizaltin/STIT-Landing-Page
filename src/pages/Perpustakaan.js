import React from 'react';

const Perpustakaan = () => {
  const facilities = [
    {
      icon: "fas fa-book",
      title: "Koleksi Buku",
      description: "Ribuan koleksi buku akademik, referensi, dan literatur Islam"
    },
    {
      icon: "fas fa-wifi",
      title: "E-Library",
      description: "Akses ke perpustakaan digital dan jurnal internasional"
    },
    {
      icon: "fas fa-desktop",
      title: "Komputer Penelitian",
      description: "Workstation untuk mengakses database dan penelitian online"
    },
    {
      icon: "fas fa-couch",
      title: "Ruang Baca Nyaman",
      description: "Area baca yang tenang dengan furniture ergonomis"
    },
    {
      icon: "fas fa-users",
      title: "Ruang Diskusi",
      description: "Ruang khusus untuk diskusi kelompok dan kolaborasi"
    },
    {
      icon: "fas fa-print",
      title: "Layanan Printing",
      description: "Fasilitas print, scan, dan fotokopi untuk keperluan akademik"
    }
  ];

  const collections = [
    {
      title: "Koleksi Islam",
      items: [
        "Al-Qur'an dan Tafsir",
        "Hadits dan Ilmu Hadits",
        "Fiqih dan Ushul Fiqih",
        "Sejarah Islam",
        "Pendidikan Islam"
      ]
    },
    {
      title: "Koleksi Akademik",
      items: [
        "Manajemen Pendidikan",
        "Psikologi Pendidikan",
        "Metodologi Penelitian",
        "Teknologi Pendidikan",
        "Kurikulum dan Pembelajaran"
      ]
    },
    {
      title: "Koleksi Digital",
      items: [
        "E-Book Internasional",
        "Jurnal Terakreditasi",
        "Repository Skripsi",
        "Video Pembelajaran",
        "Materi Perkuliahan"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
