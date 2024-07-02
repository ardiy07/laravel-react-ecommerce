import React, { useState } from 'react'
import IconHeader from '../atoms/IconHeader';
import { Link } from 'react-router-dom';
import LinkPageNotif from '../atoms/LinkPageNotif';
import DataNotifikasi from '../data/DataNotifikasi.json';
import { getAssetImages } from '../../../../utils/pathUtils';

function NotifikasiHeader({onClose, onOpen}) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState("Transaksi");

  const notifikasiOpen = () => {
    setIsOpen(true)
    onOpen()
  }

  const notifikasiClose = () => {
    setIsOpen(false)
    onClose()
  }

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const count = 0

  return (
    <div className='relative' onMouseEnter={notifikasiOpen} onMouseLeave={notifikasiClose}>
      <IconHeader icon='icon-notif' count={count} isOpen={isOpen} />
      {isOpen && (
        <div className='mt-1 absolute z-10 w-80 max-w-80 bg-white shadow-2xl rounded-md right-0 -mx-32 border'>
          <div className='sticky top-0 bg-white z-10 pt-1 pb-2'>
            <div className='flex justify-between shadow-md px-3 items-center'>
              <p className='font-bold'>Notifikasi</p>
              <div>
                <a href='#' className='body-icon-header'>
                  <i className="icon-setting"></i>
                </a>
              </div>
            </div>
            <div className='text-center cursor-pointer'>
              <ul className='grid grid-flow-col w-full text-gray-500'>
                <LinkPageNotif onClick={() => handleClick("Transaksi")} currentPage={currentPage} title="Transaksi" />
                <LinkPageNotif onClick={() => handleClick("Update")} currentPage={currentPage} title="Update" />
              </ul>
            </div>
          </div>
          <div className='overflow-y-auto max-h-96 costum-scroll-notf'>
            {currentPage === "Transaksi" && (
              <div className='pt-1'>
                <div className='flex justify-between px-3'>
                  <p className='font-bold text-md'>Pembelian</p>
                  <a href='#' className='text-green-600 text-sm tracking-tight font-semibold'>Lihat Semua</a>
                </div>
                <div className='py-1 flex px-1'>
                  <a className='my-auto py-1 px-2 rounded-xl text-sm font-normal hover:bg-gray-100 w-full' href='#'>
                    Menunggu Pembayaran
                  </a>
                </div>
                <div className='flex justify-around px-1 gap-x-2 my-1 border-b-8 pb-7 border-slate-100'>
                  {DataNotifikasi.map((item, index) => (
                    <div key={index} className='items-center justify-center'>
                      <Link to={item.url} className='flex flex-col items-center justify-center text-center'>
                        <img src={getAssetImages(item.image)} alt={item.image} />
                        <p className='text-xs font-normal tracking-tight'>{item.title}</p>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className='px-3 pt-4'>
                  <p className='font-bold text-md text-gray-700'>Untuk Kamu</p>
                  <div className='flex justify-center pt-9 flex-col items-center text-center'>
                    <img src={getAssetImages("4ac40a43.jpg")} alt="Belum ada notifikasi" width="55%" />
                    <p className='font-bold text-slate-600 text-base py-2'>Belum ada notifikasi</p>
                    <p className='text-sm text-gray-500 px-5 tracking-tight py-2'>Notifikasi terkait transaksi kamu bakal muncul di sini</p>
                    <div className='py-3 mb-4'>
                      <a className='text-white bg-custumGreen px-10 py-2 rounded-lg text-sm font-bold' href='#'>Mulai Belanja</a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {currentPage === "Update" && (
              <div className='flex justify-center flex-col items-center text-center min-h-96'>
                <img src={getAssetImages("4ac40a43.jpg")} alt="Belum ada notifikasi" width="55%" />
                <p className='font-bold text-slate-600 text-base py-2'>Belum ada notifikasi</p>
                <div className='py-3 mb-4'>
                  <a className='text-white bg-custumGreen px-10 py-2 rounded-lg text-sm font-bold' href='#'>Mulai Belanja</a>
                </div>
              </div>
            )}
          </div>
          <div className='flex justify-between border-t-4 py-2 px-3 border-slate-100'>
            <button className='text-green-600 tracking-tight my-auto font-semibold text-sm'>Tandai semua dibaca</button>
            <button className='text-green-600 tracking-tight my-auto font-semibold text-sm'>Lihat selengkapnya</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default NotifikasiHeader
