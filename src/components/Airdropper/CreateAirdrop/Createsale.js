import React from 'react'
import PreviewHeader from '../../Common/PreviewHeader'
import BackArrowSVG from '../../../svgs/back_arrow'
import PreviewDetails from '../../Common/PreviewDetails'



export default function Createsale({ token, setActive, amount}) {
  
    const handleSubmit = () => {
    console.log('Submitted')
  }

  return (
    <div className="">
      <div className="flex items-center">
        <img src={token.icon} alt={token.name} className="w-[54px] h-[54px]" />

        <div className=" ml-4">
          <div className="flex items-center">
            <h3 className=" font-bold dark:text-light-text">{token.name}</h3>
          </div>

          <div className="flex items-center mt-2">
            {token.tags.map((tag) => (
              <div
                key={tag.id}
                className="bg-[#F5F1EB] dark:bg-dark-3 mr-[6px] py-[2px] px-[10px] rounded text-xs text-gray dark:text-gray-dark font-medium"
              >
                {tag.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <PreviewHeader heading={'Token address Details'} />

      <PreviewDetails name={'Name'} value={token.name} />
      <PreviewDetails name={'Symbol'} value={token.symbol} />
      <PreviewDetails name={'Decimals'} value={token.decimals} />
      <PreviewDetails name={'Total Supply'} value={token.total_supply.toLocaleString() + ' ' + token.symbol} />

      <PreviewHeader heading={"Airdrop Details"}/>
      
      <PreviewDetails name={'Amount to be airdropped'} value = {amount.toLocaleString()}/>
 
      <div className="mt-10">
        <div className="flex justify-end items-center mb-10">
          <button
            className="bg-white dark:bg-transparent mr-5 flex items-center gap-2 py-[10px] px-5"
            onClick={() => setActive('Project Details')}
          >
            <BackArrowSVG className="fill-dark-text dark:fill-light-text" />
            <span className="font-gilroy font-medium text-sm text-dark-text dark:text-light-text">Go Back</span>
          </button>

          <button
            className="bg-primary-green disabled:bg-light-text text-white font-gilroy font-bold px-8 py-3 rounded-md"
            // disabled={address.length < 5}
            onClick={handleSubmit}
          >
            Create Sale
          </button>
        </div>
      </div>
    </div>
  )
}
