import React, { useState, useContext } from 'react'
import { ConnectionContext } from '../../context/ConnectionContext/GlobalProvider'
import NotificationSVG from '../../svgs/notification'
import WalletSVG from '../../svgs/Topbar/empty_wallet'

export default function Topbar({
  setSideBarMobile,
  sideBarMobile,
  title,
  title_img,
  subpage,
  page_name,
  page_description,
  showModal,
  admin,
  setAdminMode,
}) {
  const { connected } = useContext(ConnectionContext)

  const [tempfixed, setTempFixed] = useState(false)

  const handleTempFixed = () => {
    setTempFixed(!tempfixed)
    setAdminMode(!tempfixed)
  }
  return (
    <div className="h-[110px] flex items-center justify-between pl-[4%] pr-[5%] ">
      <div className="flex items-center">
        <div
          className="flex md:hidden flex-col h-10 w-10 bg-[#F5F6F7] dark:bg-dark-1 hamburger justify-center items-center"
          onClick={() => setSideBarMobile(!sideBarMobile)}
        >
          <div
            className={`${sideBarMobile ? 'hidden' : 'block'
              } h-0 w-5 border mb-1 border-dark-text dark:border-light-text`}
          />
          <div
            className={`${sideBarMobile ? 'hidden' : 'block'
              } h-0 w-5 border mb-1 border-dark-text dark:border-light-text`}
          />
          <div
            className={`${sideBarMobile ? 'hidden' : 'block'} h-0 w-5 border border-dark-text dark:border-light-text`}
          />
          <span className={`${sideBarMobile ? 'block' : 'hidden'} dark:text-light-text`}>&#x2715;</span>
        </div>
        {subpage ? (
          <div className="flex items-center">
            <span className="font-medium text-dim-text text-xl capitalize">{page_name}</span>

            <div className="w-3 h-3 mx-2 -rotate-45 border-b-2 border-r-2 border-dark-text dark:border-light-text rounded" />

            <span className="font-gilroy font-medium text-dark-text text-xl">{title}</span>
          </div>
        ) : (
          <div className="flex flex-col justify-center ml-4 md:ml-0">
            <div className="flex items-center">
              {title_img}
              <span className="hidden md:inline-block font-gilroy font-bold text-gray dark:text-gray-dark text-3xl">
                {title}
              </span>

              <img className="mx-2" src="/images/topbar/separator.svg" alt="separator" />

              <span className="font-gilroy font-medium text-primary-green md:text-2xl">{page_name}</span>
            </div>
            <div className="flex items-center">
              <span className="font-gilroy font-medium text-dark dark:text-light text-xs md:text-base">
                {page_description || 'Lock your assets for proof of lock.'}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center user-div">
        {
          admin &&
          <div className="hidden md:flex mr-7 py-4 px-5 rounded-md bg-white dark:bg-dark-1">
            <span className="font-gilroy mr-[10px] font-medium text-dark-text dark:text-light-text text-base">
              Admin Mode
            </span>
            <label htmlFor="admin-toggle" className="inline-flex relative items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                checked={tempfixed}
                id="admin-toggle"
                className="sr-only peer"
                onChange={handleTempFixed}
              />
              <div className="w-9 h-5 bg-dim-text dark:bg-dim-text-dark dark:bg-opacity-20 bg-opacity-20 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px]  after:left-[2px] after:bg-dim-text after:dark:bg-dim-text-dark  after:rounded-full after:h-4 after:w-4 after:transition-all border-[#F5F1EB] peer-checked:after:bg-primary-green dark:peer-checked:after:bg-[#1B8552]" />
            </label>
          </div>
        }
        {connected && (
          <div className="hidden w-10 h-10 lg:w-12 lg:h-12 bg-[#F5F6F7] dark:bg-dark-1 rounded-md md:flex items-center justify-center">
            <NotificationSVG className="hidden md:block fill-slate-700 dark:fill-white" />
          </div>
        )}
        {connected && (
          <div className="flex md:hidden w-10 h-10 justify-center border-2 rounded-md border-primary-green border-opacity-50 items-center ml-4">
            <WalletSVG className="fill-dark-text" />
          </div>
        )}
        {connected ? (
          <div className="hidden md:flex h-10 lg:h-12 border-2 rounded-md border-primary-green border-opacity-50 items-center justify-between bg-white dark:bg-dark-1 ml-8">
            <img className="ml-5" src="/images/topbar/wallets/metamask.svg" alt="metamask" />

            <span className=" font-gilroy font-medium ml-2 dark:text-light">0xdd....ahs4</span>

            <div className="flex ml-3 mr-6">
              <div className="w-1 h-1 rounded-full bg-primary-green mr-[2px]" />
              <div className="w-1 h-1 rounded-full bg-primary-green mr-[2px]" />
              <div className="w-1 h-1 rounded-full bg-primary-green" />
            </div>
          </div>
        ) : (
          <button
            className="py-2 md:py-3 px-3 md:px-5 bg-primary-green rounded-md flex items-center focus:outline-none"
            onClick={() => showModal(true)}
          >
            <WalletSVG className="fill-white mr-2 md:mr-[10px]" />
            <span className="font-gilroy font-semibold text-[#FAF8F5]">
              Connect <span className="hidden md:inline-block">Wallet</span>
            </span>
          </button>
        )}
      </div>
    </div>
  )
}
