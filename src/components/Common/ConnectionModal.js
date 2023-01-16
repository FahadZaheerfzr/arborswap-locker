import React, { useContext } from 'react'
import { wallets } from '../../data/wallets'
import { ConnectionContext } from '../../context/ConnectionContext/GlobalProvider'

export default function ConnectionModal({ showModal }) {
  const { setUpConnection } = useContext(ConnectionContext)

  const handleConnection = () => {
    setUpConnection()
    showModal(false)
  }

  return (
    <div className="p-9 w-[90%] max-w-[520px] bg-white dark:bg-dark-1 rounded-[10px]">
      <div className="flex justify-between items-center  ">
        <span className="text-dark-text dark:text-light-text font-gilroy font-semibold text-lg">Connect Wallet</span>

        <div className="flex items-center cursor-pointer" onClick={() => showModal(false)}>
          <span className="text-sm font-gilroy font-semibold text-dark-text dark:text-light-text mr-2">Close</span>
          <div className="flex justify-center items-center bg-[#E56060] text-[#E56060] bg-opacity-10 rounded-full w-[15px] h-[15px]">
            &#10005;
          </div>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-8" onDoubleClick={handleConnection}>
        {wallets.map((wallet) => (
          <button
            className="flex focus:outline outline-primary-green py-4 px-4 flex-col items-center justify-center"
            key={wallet.id}
          >
            <img src={wallet.image} alt={wallet.name} className="w-[50px] h-[50px] mb-4" />
            <span className="font-gilroy font-semibold text-dark-text dark:text-light-text">{wallet.name}</span>
          </button>
        ))}
        {wallets.map((wallet) => (
          <button
            className="flex flex-col items-center focus:outline outline-primary-green py-4 px-4 justify-center cursor-pointer"
            key={wallet.id}
            onDoubleClick={handleConnection}
          >
            <img src={wallet.image} alt={wallet.name} className="w-[50px] h-[50px] mb-4" />
            <span className="font-gilroy font-semibold text-dark-text dark:text-light-text">{wallet.name}</span>
          </button>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <span className="text-gray dark:text-gray-dark font-semibold font-gilroy">
          Haven’t got a crypto wallet yet?
        </span>
      </div>

      <div className="flex justify-center mt-5">
        <span className="text-primary-green font-semibold font-gilroy">Learn how to connect</span>
      </div>
    </div>
  )
}
