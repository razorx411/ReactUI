function StudentTable({ mahasiswa }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-5">
        <h2 className="text-xl font-bold text-slate-800">
          Data Mahasiswa
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-225 text-left">
          <thead className="bg-blue-50">
            <tr>
              {[
                "NIM",
                "Nama",
                "No HP",
                "Email",
                "Alamat",
                "Program Studi",
                "Tahun Masuk",
              ].map((judul) => (
                <th key={judul} className="px-5 py-4 text-sm text-blue-900">
                  {judul}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {mahasiswa.map((mhs) => (
              <tr key={mhs.NIM} className="hover:bg-blue-50">
                <td className="px-5 py-4">{mhs.NIM}</td>
                <td className="px-5 py-4">{mhs.Nama}</td>
                <td className="px-5 py-4">{mhs.noHp}</td>
                <td className="px-5 py-4">{mhs.Email}</td>
                <td className="px-5 py-4">{mhs.Alamat}</td>
                <td className="px-5 py-4">{mhs.programStudi}</td>
                <td className="px-5 py-4">{mhs.tahunMasuk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">
        <p className="text-sm text-slate-500">
          Menampilkan {mahasiswa.length} data mahasiswa
        </p>
      </div>
    </div>
  );
}

export default StudentTable;