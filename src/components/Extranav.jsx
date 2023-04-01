import React from 'react'
//icons
import { GrInstagram } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import { FaTooth, FaPhoneAlt } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Extranav = () => {
  const instagramLink = () => {
    window.open('https://icons8.com/illustrations/style--3d-casual-life', "_blank")
  };

  const email = () => {
    window.open('mailto:sonrisagodonto@gmail.com', '_blank')
  };

  return (
    <div className='flex justify-between items-center bg-gray py-3 px-10 text-sm text-darkGray'>

      {/* Num-Email-Horarios */}
      <div className='flex justify-center items-center gap-10'>
        <h2 className='flex justify-center items-center gap-1'><FaPhoneAlt className='text-blue text-xs'/>0424-7432710</h2>
        <h2 onClick={email}
        className='flex justify-center items-center gap-1 cursor-pointer'><MdEmail className='text-blue'/>sonrisagodonto@gmail.com</h2>

        <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex justify-center items-center w-full gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm 
        font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <FiClock className='text-blue'/>Horarios
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 pt-2 text-sm'
                  )}
                >
                  <p className='font-bold'>Martes - Viernes </p>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 text-sm'
                  )}
                >
                08:00am - 12:00m <br></br>
                02:00pm - 06:00pm
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 pt-2 text-sm'
                  )}
                >
                  <p className='font-bold'>Sábados</p>
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 pb-2 text-left text-sm'
                    )}
                  >
                   08:00am - 12:00m
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>


      </div>

      {/* Redes Logos */}
      <div className='flex justify-center items-center gap-2 text-grayNeutral'>
        <h2 className='cursor-pointer'
          onClick={instagramLink}><GrInstagram/></h2>
        <h2><FaTooth/></h2>
      </div>
    </div>
  )
}

export default Extranav