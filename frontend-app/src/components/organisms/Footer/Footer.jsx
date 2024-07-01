import React from 'react'
import data1 from './Footer1.json'
import data2 from './Footer2.json'
import { getAssetIcons, getAssetImages } from '../../../utils/pathUtils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='px-16 py-10 border-t-2 h-[35rem] flex w-full gap-7'>
      <nav className='flex flex-col gap-1'>
        <p className='font-bold text-lg'>Tokopedia</p>
        <ul className=' tracking-tight'>
          {data1.map((item, index) => (
            <li key={index} className='my-1'>
              <a href={item.href} className='text-gray-500 text-base hover:text-green-600'>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className='flex flex-col gap-3'>
        {data2.map((item, index) => (
          <nav className='flex flex-col' key={index}>
            <p className='font-bold text-lg'>{item.title}</p>
            <ul className=' tracking-tight'>
              {item.children.map((child, index) => (
                <li key={index} className='my-1'>
                  <a href={child.href} className='text-gray-500 text-base hover:text-green-600'>
                    {child.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className='flex flex-col justify-start gap-7 w-auto'>
        <nav className='flex flex-col gap-2'>
          <p className='font-bold text-lg'>Keamanan & Privasi</p>
          <ul className='flex gap-5'>
            <li className='max-w-fit'>
              <a href="#">
                <img src={getAssetImages('footer/icon_pci_license.webp')} className='w-16' />
              </a>
            </li>
            <li className='border rounded max-w-fit p-1'>
              <a href="#" className='text-gray-500 text-base hover:text-green-600'>
                <img src={getAssetImages('footer/icon_bsi_license_hd.png')} className='w-16' />

              </a>
            </li>
            <li className='border rounded max-w-fit p-1'>
              <a href="#" className='text-gray-500 text-base hover:text-green-600'>
                <img src={getAssetImages('footer/icon_bsi_license_hd_2.png')} className='w-16' />

              </a>
            </li>
          </ul>
        </nav>
        <nav className='flex flex-col'>
          <p className='font-bold text-lg'>Ikuti Kami</p>
          <ul className='flex gap-3 pt-2'>
            <li className='max-w-fit'>
              <a href="#" className='flex items-center'>
                <img src={getAssetIcons('facebook.svg')} />
              </a>
            </li>
            <li className='max-w-fit'>
              <a href="#" className='flex items-center'>
                <img src={getAssetIcons('twitter.svg')} />
              </a>
            </li>
            <li className='max-w-fit'>
              <a href="#" className='flex items-center'>
                <img src={getAssetIcons('pinterest.svg')} />
              </a>
            </li>
            <li className='max-w-fit'>
              <a href="#" className=' flex items-center'>
                <img src={getAssetIcons('instagram.svg')} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className='w-auto flex items-center flex-col'>
        <div className='w-[30rem]'>
          <img src={getAssetImages('footer/il_footer_hd_v2.png')} className='' />
        </div>
        <div className='flex my-5 items-center justify-center gap-5'>
          <a href=''>
            <img src={getAssetIcons('icon-download-android.svg')} />
          </a>
          <a href=''>
            <img src={getAssetIcons('icon-download-ios.svg')} />
          </a>
          <a href=''>
            <img src={getAssetIcons('icon-download-huawei.svg')} />
          </a>
        </div>
        <p className='text-gray-500 font-semibold'>© 2009 - 2024, PT. Tokopedia.</p>
        <div className='mt-5'>
          <ul className='flex gap-3 border bg-gray-200 px-2 py-1 rounded-lg items-center'>
            <li className='bg-green-600 font-bold text-white px-3 py-1 rounded-lg text-sm tracking-tight'>
              Indonesia
            </li>
            <li className=' font-bold text-gray-500 px-3 py-1 rounded-lg text-sm tracking-tight'>
              English
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer