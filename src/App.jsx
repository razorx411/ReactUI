
import { useState, useEffect } from "react";

import Header from "./components/Header";
import SummaryCard from "./components/SummaryCard";
import StudentTable from "./components/StudentTable";

function App() {
  const [mahasiswa] = useState([
    {
      NIM: "131313",
      Nama: "Hafid Fathurrohman",
      noHp: "08xxxxxxxxxx",
      Email: "hafid@gmail.com",
      Alamat: "Ketnanon",
      programStudi: "Sistem Informasi",
      tahunMasuk: "2024",
    },
    {
      NIM: "131314",
      Nama: "Zaki Wira Laksamana",
      noHp: "08xxxxxxxxxx",
      Email: "zaki@gmail.com",
      Alamat: "Krian",
      programStudi: "Sistem Informasi",
      tahunMasuk: "2024",
    },
    {
      NIM: "131315",
      Nama: "Axel Arwanov Putra",
      noHp: "08xxxxxxxxxx",
      Email: "axel@gmail.com",
      Alamat: "Bungur",
      programStudi: "Sistem Informasi",
      tahunMasuk: "2024",
    },
    {
      NIM: "131316",
      Nama: "Alya Darwanti",
      noHp: "08xxxxxxxxxx",
      Email: "alya@gmail.com",
      Alamat: "Jemursari",
      programStudi: "Sistem Informasi",
      tahunMasuk: "2024",
    },
    {
      NIM: "131317",
      Nama: "Aomee",
      noHp: "08xxxxxxxxxx",
      Email: "aome@gmail.com",
      Alamat: "Sidorejo",
      programStudi: "Sistem Informasi",
      tahunMasuk: "2024",
    },
  ]);

  const [waktu, setWaktu] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWaktu(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">

        <Header />

        <h2 className="mb-5 text-2xl font-bold text-slate-800">
          Daftar Mahasiswa
        </h2>

        <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2">

          <SummaryCard
            title="Total Mahasiswa"
            value={mahasiswa.length}
            description="Mahasiswa terdaftar"
          />

          <SummaryCard
            title="Waktu Saat Ini"
            value={waktu.toLocaleTimeString("id-ID", {
              hour12: false,
            })}
            description="Waktu lokal"
          />

        </div>

        <StudentTable mahasiswa={mahasiswa} />

      </div>
    </div>
  );
}

export default App;
