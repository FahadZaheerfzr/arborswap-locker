import React, {useState} from 'react'
import { Token_details } from '../../../data/sale'
import BackArrowSVG from '../../../svgs/back_arrow'
import PreviewDetails from '../../Common/PreviewDetails'
import PreviewHeader from '../../Common/PreviewHeader'
import HeadingTags from '../../TokenLocker/Subcomponents/HeadingTags'
import AmountModal from 'components/TokenLocker/Subcomponents/AmountModal'
import InputField from './InputField'

export default function Infopage({ setActive, next, amount, setAmount, setPage, Private }) {
  const [address, setAddress] = React.useState('')
  const [popup, showPopup] = React.useState(false)
  const [numberofclaims, setNumberofclaims] = useState("")
  const [sizeofclaims, setSizeofclaims] = useState("")
  

  const handleChange = (e) => {
    setAddress(e.target.value)
  }
  return (
    <div className="w-full">

      {popup && (
        <div className="fixed z-50  top-0 left-0">
          <AmountModal amount={amount} showPopup={showPopup} setAmount={setAmount} />
        </div>
      )}
      <HeadingTags name={'Token Address'} required />

      <input
        className="bg-transparent mt-5 w-full px-5 py-4 font-gilroy placeholder:font-medium placeholder:text-dim-text font-semibold text-dark-text dark:text-light-text focus:outline-none border-[1.5px] rounded-lg border-dim-text border-opacity-50"
        type={'text'}
        placeholder="0xc197033c129839ED4740c29919Bd88fD42bbde"
        onChange={(e) => {
          handleChange(e)
        }}
      />

      <PreviewHeader heading={'Token address Details'} />
      {address.length > 4 && (
        <div className="mt-5">
          {Token_details.map((item) => (
            <PreviewDetails key={item.id} name={item.name} value={item.value} icon={item.icon} />
          ))}
        </div>

        
      )}

      {(!Private && address.length > 4) && (
     <div className='w-full flex flex-col lg:flex-row'>
                        <div className='mt-10 w-full'>
                            <InputField 
                                heading={"Number of Claims"}
                                value={numberofclaims}
                                changeState={setNumberofclaims}
                                placeholder={""}
                            />
                        </div>
                        <div className='mt-10 w-full flex justify-end'>
                            <InputField 
                                heading={"Size of Claims"}
                                value={sizeofclaims}
                                changeState={setSizeofclaims}
                                placeholder={""}
                            />
                        </div>
                    </div>
      )}

      {/*address.length > 4 && (
        <div className="mt-10">
        <div className="">
          <div className='flex items-center'>
            <HeadingTags name={'Amount to be airdropped'} required />
            <img src="/images/lists/question.svg" alt="info" className="ml-2" />
          </div>
          <div className="mt-5 flex items-center justify-between gap-5 cursor-pointer">
            <div className="flex items-center justify-between bg-[#FAF8F5] dark:bg-dark-2 px-5 py-4 rounded-md w-[75%]">
              <span className="font-bold text-dark-text dark:text-light-text">{amount.toLocaleString()}</span>

              <span className="text-gray dark:text-gray-dark font-bold">SXP</span>
            </div>

            <button
              className="bg-primary-green bg-opacity-[0.08] font-bold text-primary-green py-4 w-[25%] rounded-md"
              onClick={() => showPopup(true)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      )*/}

      <div className="mt-10">
        <div className="flex justify-end items-center mb-10">
          <button
            className="bg-white dark:bg-transparent mr-5 flex items-center gap-2 py-[10px] px-5"
            onClick={() => setPage(1)}
          >
            <BackArrowSVG className="fill-dark-text dark:fill-light-text" />
            <span className="font-gilroy font-medium text-sm text-dark-text dark:text-light-text">Go Back</span>
          </button>

          <button
            className="bg-primary-green disabled:bg-dim-text disabled:dark:bg-dim-text-dark text-white font-gilroy font-bold px-8 py-3 rounded-md"
            disabled={address.length < 5}
            onClick={() => setActive(next)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
