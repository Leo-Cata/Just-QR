import { useState, ChangeEvent } from 'react'
import { QRCodeSVG } from "qrcode.react"



const Input = () => {
  const [text, setText] = useState('')

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    setText(e.target.value)
  }

  return (
    <div className="bg-gray-100 w-screen h-screen p-2 flex justify-center items-center">
      <div className='flex flex-col justify-evenly items-center h-full bg-[#213555] rounded-3xl drop-shadow-2xl shadow-md shadow-slate-500 px-4 md:h-3/4 md:w-1/3 space-y-10'>
        <input value={text} type="text" placeholder="Type URL" onChange={handleText} className='h-10 rounded-lg w-full bg-[#4F709C] pl-1 text-white text-lg font-semibold md:w-1/2' />
        <QRCodeSVG value={text} size={300} bgColor='#213555' fgColor='#ffffff' />
      </div>
    </div>
  )
}

export default Input