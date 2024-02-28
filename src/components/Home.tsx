import { useState } from 'react'
import data from '../assets/data.json'
import bannerDesktop from '/banners/desktop-1.jpg'

function Home({ isOpenHeader, setIsOpenHeader }: any) {
  const [cars, setCars] = useState(data)

  return (
    <main onClick={() => setIsOpenHeader(false)} className={`flex flex-col justify-center items-center z-0 max-[599px]:w-full`}>
      {
        isOpenHeader &&
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40 pointer-events-none"></div>
      }

      <section className='w-full flex justify-center relative z-20 max-[599px]:mt-[120px] max-[599px]:w-[360px]'>
        <img src={bannerDesktop} className='w-full object-contain z-10 max-[599px]:w-[360px]' alt="" />
        { 
          !isOpenHeader &&
          <section className='absolute hidden lg-[500px]:flex flex-col min-w-[255px] min-h-[478px] scale-y-75 scale-x-75 xl:scale-y-100 xl:scale-x-100 top-8 right-[20vw] xl:min-w-[255px] xl:w-[15vw] xl:h-[478px] bg-white justify-around items-center z-30'>
            <div className='flex items-center justify-center gap-3'>
              <svg className='w-[23px] h-[23px] fill-[#1C69D4]' id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path id="Caminho_126" data-name="Caminho 126" d="M21.45,9.26l-1.57.33L22,11.19v7.23a1.13,1.13,0,0,1-1.11,1.1H19.23a1.12,1.12,0,0,1-1.11-1.11v-.55H5.88v.55a1.12,1.12,0,0,1-1.11,1.11H3.11A1.11,1.11,0,0,1,2,18.41V11.18l2.12-1.6L2.56,9.25a.73.73,0,0,1-.46-.32A1,1,0,0,1,2,8.47.65.65,0,0,1,2.16,8a.59.59,0,0,1,.49-.2H4.77a14.19,14.19,0,0,1,1.94-2.5,3.7,3.7,0,0,1,2.62-.83h5.34a3.7,3.7,0,0,1,2.62.83,14.19,14.19,0,0,1,1.94,2.5h2.12a.59.59,0,0,1,.49.2.65.65,0,0,1,.16.45,1,1,0,0,1-.1.46A.79.79,0,0,1,21.45,9.26ZM7,14.5V14a1.66,1.66,0,0,0-1.66-1.66H2.55v.55A1.49,1.49,0,0,0,3.17,14a2.11,2.11,0,0,0,1.34.48ZM5.88,9H18.12A12.31,12.31,0,0,0,17,6.64a2.22,2.22,0,0,0-2-1H9a2.21,2.21,0,0,0-2,1A11.74,11.74,0,0,0,5.88,9ZM12,12.84c0-.15-.1-.28-.31-.39a1.26,1.26,0,0,0-.54-.16H8.61a1,1,0,0,0-.52.15.44.44,0,0,0-.26.4A1.47,1.47,0,0,0,8.4,14.1a1.87,1.87,0,0,0,1.09.4h1.66a1.13,1.13,0,0,0,.54-.16c.21-.11.31-.24.31-.39Zm2.51,1.66a1.87,1.87,0,0,0,1.09-.4,1.44,1.44,0,0,0,.57-1.26.44.44,0,0,0-.26-.4,1,1,0,0,0-.52-.15H12.85a1.26,1.26,0,0,0-.54.16c-.21.11-.31.24-.31.39V14c0,.15.1.28.31.39a1.13,1.13,0,0,0,.54.16Zm4.17-2.21A1.66,1.66,0,0,0,17,14v.55h2.47A1.17,1.17,0,0,0,20.55,14a2.06,2.06,0,0,0,.34-1.18v-.55Z" /></svg>
              <p className='text-xl'>Solicitar cotação</p>
            </div>

            <div className="relative h-11  w-3/4">
              <input placeholder=""
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 hover:border-b-2" />
              <label
                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100  peer-focus:after:border-[#1C69D4] hover:border-[#BBBBBB] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Nome
              </label>
            </div>

            <div className="relative h-11  w-3/4">
              <input placeholder=""
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 hover:border-b-2" />
              <label
                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-[#1C69D4] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                E-mail
              </label>
            </div>

            <div className="relative h-11  w-3/4">
              <input placeholder=""
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 hover:border-b-2" />
              <label
                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-[#1C69D4] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Telefone
              </label>
            </div>

            <div className="relative h-11 w-3/4">
              <label htmlFor="underline_select" className="sr-only w-full">Underline select</label>
              <select id="underline_select" className="cursor-pointer w-full block py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0  peer peer-focus:after:border-[#1C69D4] border-t-0 border-r-0 border-l-0 border-b-[1px] hover:border-b-2 focus:border-[#1C69D4] peer-focus:after:scale-x-100 ">
                <option defaultValue={'Modelo'} className='mt-2'>Modelo</option>
                <option value="">BMW Série 1</option>
                <option value="">BMW M3 Competition</option>
                <option value="">BMW M5</option>
                <option value="">BMW X2</option>
                <option value="">BMW Série 4</option>
                <option value="">BMW Série 3</option>
                <option value="">BMW Z4</option>
                <option value="">BMW Série 2</option>
              </select>
            </div>

            <div className="relative h-11  w-3/4">
              <input placeholder=""
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 hover:border-b-2" />
              <label
                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-[#1C69D4] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Mensagem
              </label>
            </div>

            <label className='text-xs flex cursor-pointer w-[3/4]' htmlFor="">
              <input className='text-[#666666] cursor-pointer' type="checkbox" placeholder='Mensagem' />
              <p className='ml-3 text-[#666666] hover:text-[#1C69D4] cursor-pointer'>Aceito a <span className='font-bold'>Política de Privacidade</span></p>
            </label>

            <button className='text-sm w-3/4 border-none h-[45px] font-bold text-white bg-[#1C69D4] hover:bg-[#0351BE]'>Enviar</button>
          </section>
        }

        <section className="flex justify-around w-10 md:w-16 cursor-pointer h-24 items-center absolute bottom-0 z-40">
          <div className="bg-[#1C69D4] w-2 h-2 md:w-3.5 md:h-3.5 rounded-lg"></div>
          <div className="bg-[#E6E6E6] w-2 h-2 md:w-3.5 md:h-3.5 rounded-lg"></div>
          <div className="bg-[#E6E6E6] w-2 h-2 md:w-3.5 md:h-3.5 rounded-lg"></div>
        </section>

      </section>

      <p className="text-[40px]">ESCOLHA SEU BMW</p>

      <section className='flex flex-wrap justify-center gap-10 max-w-[1300px] '>
        {
          cars.map((car) => (
            <div key={car.name} className='w-[255px] h-[363px] flex flex-col justify-around text-xl'>
              <img src={car.image} className='w-full hover:opacity-50 cursor-pointer' alt="" />
              <p>{car.name}</p>
              <button className='text-sm w-full border-none h-[45px] font-bold text-white bg-[#1C69D4] hover:bg-[#0351BE]'>Cotação</button>
              <div className='flex items-center gap-2'>
                <p className='text-xs text-[#666666]'>Compartilhe:</p>
                <svg className='w-6 fill-[#666666] hover:fill-[#1C69D4] cursor-pointer' id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,21.5h3.49V13h2.71l.44-3.37H13.45V7.29a1.86,1.86,0,0,1,.29-1.19,1.72,1.72,0,0,1,1.37-.44H16.9v-3a18.8,18.8,0,0,0-2.6-.15,4.31,4.31,0,0,0-3.15,1.17A4.45,4.45,0,0,0,10,7V9.63H7.1V13H10Z" /></svg>
                <svg className='w-6 fill-[#666666] hover:fill-[#1C69D4] cursor-pointer' id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path id="Caminho_6" data-name="Caminho 6" d="M18.66,5.26a9.81,9.81,0,0,1,2.1,3.07,9.15,9.15,0,0,1-.55,8.29,9.72,9.72,0,0,1-3.48,3.44A9.24,9.24,0,0,1,12,21.33h0a9.11,9.11,0,0,1-4.5-1.15l-5,1.32,1.36-4.88a9.06,9.06,0,0,1-1.28-4.71,9.05,9.05,0,0,1,1.28-4.7A9.58,9.58,0,0,1,7.29,3.77a9.32,9.32,0,0,1,8.29-.55A9.79,9.79,0,0,1,18.66,5.26ZM12,19.76a7.66,7.66,0,0,0,3.94-1.06,8.06,8.06,0,0,0,2.91-2.86,7.55,7.55,0,0,0,1.08-3.93,7.2,7.2,0,0,0-.64-3,8.23,8.23,0,0,0-1.76-2.57A7.87,7.87,0,0,0,15,4.66a7.88,7.88,0,0,0-6.92.46A8,8,0,0,0,5.21,8a7.71,7.71,0,0,0,.17,8.08l.17.3-.8,2.88,3-.76.3.17A7.56,7.56,0,0,0,12,19.76Zm4.28-5.9.13.09a.68.68,0,0,1,.34.21,1.19,1.19,0,0,1,0,.42,2.39,2.39,0,0,1-.17.7,1.75,1.75,0,0,1-.68.72,2.07,2.07,0,0,1-.91.4,3.7,3.7,0,0,1-1.15,0,9.51,9.51,0,0,1-1.7-.59,9.65,9.65,0,0,1-3.94-3.47l-.08-.09a4.26,4.26,0,0,1-.93-2.41A2.68,2.68,0,0,1,8,7.92l0,0a.9.9,0,0,1,.63-.3h.51a.55.55,0,0,1,.28.07A.63.63,0,0,1,9.63,8l.72,1.74a.47.47,0,0,1,0,.43,3,3,0,0,1-.55.76.83.83,0,0,0-.21.28c0,.07,0,.14.08.23a5.49,5.49,0,0,0,1.4,1.74,10.32,10.32,0,0,0,1.78,1.06c.23.12.4.1.51,0a11.89,11.89,0,0,0,.76-.93c.06-.11.13-.17.21-.17a1.36,1.36,0,0,1,.3,0c.23.08.76.34,1.61.77Z" /></svg>
              </div>
            </div>
          ))
        }
      </section>
    </main>
  )
}

export default Home
