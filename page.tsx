"use client";

import React from "react";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      <header className="bg-blue-700 text-white p-4 flex justify-between items-center shadow">
        <h1 className="text-lg font-bold">Dashboard Guru - SMK TELKOM</h1>
        <span className="text-sm font-semibold">Oktavianto</span>
      </header>

      <main className="flex flex-1 p-4 gap-4">
        <div className="flex-1 space-y-4">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4 border-b pb-3">
              <h2 className="font-semibold text-gray-700">Jurnal Mengajar</h2>
              <div className="flex gap-2">
                <select className="border text-sm rounded-md p-1">
                  <option>XI RPL 1</option>
                  <option>XI RPL 2</option>
                  <option>XI RPL 3</option>
                  <option>XI RPL 4</option>
                </select>

                <input
                  type="date"
                  defaultValue="2025-09-29"
                  className="border text-sm rounded-md p-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Hadir", value: 0 },
                { label: "Tidak Hadir", value: 0 },
                { label: "Belum", value: 0 },
                { label: "Simpan", value: 0 },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-100 p-3 rounded-md text-center shadow-sm"
                >
                  <p className="text-xl font-bold text-gray-800">
                    {item.value}
                  </p>
                  <p className="text-sm text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="font-semibold text-gray-700 mb-3">Menu Aplikasi</h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {["Jurnal", "Nilai", "Akademik", "Presensi", "Rapor"].map(
                (item, i) => (
                  <div
                    key={i}
                    className="bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg p-4 text-center cursor-pointer text-sm font-semibold"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="font-semibold text-gray-700 mb-3">To Do List</h2>
            <ul className="list-disc text-gray-700 text-sm pl-5 space-y-1">
              <li>Isi jurnal mengajar</li>
              <li>Input nilai ujian</li>
              <li>Rekap presensi kelas</li>
            </ul>
          </div>
        </div>

        <div className="w-72 space-y-4">
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <h2 className="font-semibold text-gray-700 mb-2">Guru Terbaik</h2>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
              className="w-14 h-14 mx-auto mb-1"
              alt="Guru"
            />
            <p className="text-gray-500 text-sm">Belum ada guru terbaik</p>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="font-semibold text-gray-700 mb-2">Berita</h2>

            <Image
              src="/Assets/bakekok.png"
              width={400}
              height={200}
              className="w-full h-28 object-cover rounded-lg mb-2"
              alt="News"
            />

            <div className="bg-blue-100 rounded-lg p-3">
              <h3 className="font-bold text-gray-800">Aplikasi Cuti 3.0</h3>
              <p className="text-gray-600 text-sm">
                Aplikasi cuti telah diperbarui menyesuaikan kebijakan terbaru.
              </p>
              <p className="text-xs text-gray-400 mt-1">6 hari yang lalu</p>
            </div>
          </div>
        </div>

        <aside className="w-72 bg-white rounded-lg shadow p-4 flex flex-col">
          <h2 className="font-semibold text-gray-700 mb-2">Sapa Guru</h2>

          <div className="flex-1 overflow-auto space-y-2 text-sm">
            <div className="bg-gray-100 p-2 rounded">
              <p className="font-semibold">Daniel</p>
              <p>tabe, ada yang lihat kunci motorku?</p>
            </div>

            <div className="bg-gray-100 p-2 rounded">
              <p className="font-semibold">Ananda</p>
              <p>Keren sekali aplikasinya :)</p>
            </div>

            <div className="bg-gray-100 p-2 rounded">
              <p className="font-semibold">Risa</p>
              <p>Semangat bapak/ibu guru semua!</p>
            </div>
          </div>

          <input
            type="text"
            placeholder="Ketik pesan..."
            className="border rounded-md p-2 text-sm mt-3"
          />
        </aside>
      </main>
    </div>
  );
}
