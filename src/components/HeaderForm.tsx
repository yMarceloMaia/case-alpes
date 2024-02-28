function HeaderForm({ isOpenHeader, setIsOpenHeader, screen }: any) {

    return (
        <>
            <section className="fixed top-0 left-0 w-full bg-white shadow-md transition-all duration-300 ss:h-[60px] flex flex-col ss:flex-row ss:justify-between items-center">
                <div className={`flex justify-between w-full h-[60px] items-center ${isOpenHeader && (screen < 600) ? 'hidden': ''}`}>
                    <p className="ss:hidden flex justify-center items-center cursor-pointer text-[#666666] w-[165px]  gap-1">
                        <svg className='w-[19px] h-[19px] fill-[#666666]' id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,16.5a1.11,1.11,0,0,1,0,.19l-.84,3.66a.9.9,0,0,1-.83.65h0A16.31,16.31,0,0,1,3,4.69H3a.88.88,0,0,1,.65-.82L7.31,3,7.5,3a.93.93,0,0,1,.78.51L10,7.45a.75.75,0,0,1,.07.33.91.91,0,0,1-.31.65L7.59,10.18a15.2,15.2,0,0,0,6.23,6.23l1.74-2.13a.94.94,0,0,1,.66-.31,1,1,0,0,1,.33.06l3.94,1.69A.93.93,0,0,1,21,16.5Z" /></svg>
                        <span>(21) 2042-4442</span>
                    </p>
                    <svg className="max-[599px]:w-[35px] max-[599px]:h-35px w-10 h-10 ss:ml-10 max-[599px]:mr-4" xmlns="http://www.w3.org/2000/svg" width="91.979" height="91.979" viewBox="0 0 91.979 91.979"><g transform="translate(-2250.822 1635)"><path d="M2298.038-1635a45.99,45.99,0,0,0-45.99,45.991,45.989,45.989,0,0,0,45.988,45.988,45.989,45.989,0,0,0,45.991-45.991A45.989,45.989,0,0,0,2298.04-1635m43,45.99a43,43,0,0,1-43,43,43,43,0,0,1-43-43,43,43,0,0,1,43-43,43,43,0,0,1,43,43" transform="translate(-1.227 0)" fill="#707070" /><path d="M2333.431-1580.89v1.5a25.807,25.807,0,0,1,25.777,25.777h1.5a27.272,27.272,0,0,0-27.273-27.272m0,53.049a25.807,25.807,0,0,1-25.777-25.777h-1.5a27.272,27.272,0,0,0,27.272,27.272" transform="translate(-36.619 -35.393)" fill="#707070" /><path d="M2439.716-1585.078c.623.671,1.525,1.753,2.031,2.408l9.312-5.911c-.466-.608-1.205-1.533-1.761-2.183l-5.9,3.9-.4.346.3-.439,2.6-5.2-1.84-1.841-5.2,2.6-.438.3.346-.4,3.9-5.9c-.686-.586-1.344-1.121-2.186-1.771l-5.915,9.307c.749.578,1.736,1.423,2.364,2l5.567-2.888.355-.262-.262.357Z" transform="translate(-120.613 -23.443)" fill="#707070" /><path d="M2373.278-1610.085l2.545-5.7.161-.5-.046.528.268,7.615c.893.085,1.814.207,2.725.359l-.415-11.28c-1.272-.141-2.536-.242-3.8-.3l-2.5,6.221-.088.463-.09-.463-2.5-6.221c-1.266.054-2.532.155-3.8.3l-.415,11.28c.91-.151,1.831-.274,2.724-.359l.267-7.615-.046-.528.164.5,2.543,5.7Z" transform="translate(-75.307 -10.228)" fill="#707070" /><path d="M2302.874-1583.93c1.47-1.548,2.3-3.34.831-5.048a2.862,2.862,0,0,0-3.26-.674l-.11.046.034-.1a2.687,2.687,0,0,0-.927-2.818,2.775,2.775,0,0,0-2.057-.573c-1.383.141-2.445,1.084-5.34,4.312-.872.974-2.144,2.51-2.907,3.505l7.946,7.54c2.641-2.92,3.714-4,5.79-6.192m-10.369-1.843a48.933,48.933,0,0,1,4.075-4.437,2.136,2.136,0,0,1,.829-.532.986.986,0,0,1,.753.133.986.986,0,0,1,.43.63,1.746,1.746,0,0,1-.591,1.47c-.847.953-3.948,4.2-3.948,4.2Zm3.111,2.952s3.025-3.2,4.01-4.218a3.637,3.637,0,0,1,.915-.784,1.028,1.028,0,0,1,1.069.022.941.941,0,0,1,.407.994,2.943,2.943,0,0,1-.783,1.224c-.414.447-4,4.285-4.005,4.29Z" transform="translate(-25.485 -27.396)" fill="#707070" /><path d="M2333.431-1580.89v27.272h-27.272a27.258,27.258,0,0,1,7.984-19.289,27.261,27.261,0,0,1,19.288-7.983" transform="translate(-36.619 -35.392)" fill="#0966af" /><path d="M2412.272-1502.051a27.26,27.26,0,0,1-7.984,19.288A27.258,27.258,0,0,1,2385-1474.78v-27.273Z" transform="translate(-88.189 -86.959)" fill="#0966af" /></g></svg>
                </div>
        
                <div className="relative max-[599px]:w-full">
                    {
                        isOpenHeader ?
                            <button onClick={() => setIsOpenHeader(!isOpenHeader)} className='text-sm w-full ss:w-[255px] border-none h-[60px] font-bold text-white bg-[#666666]'>Minimizar</button>
                            :
                            <button onClick={() => setIsOpenHeader(!isOpenHeader)} className='text-sm w-full ss:w-[255px] border-none h-[60px] font-bold text-white bg-[#1C69D4] hover:bg-[#0351BE]'>Solicitar cotação</button>
                    }
                    {
                        isOpenHeader &&
                        <section className='z-50 absolute flex flex-col top-15 min-[600]:right-0 w-full h-[60vh] min-[600]:w-[255px] min-[600]:h-[478px] bg-white justify-around items-center'>
                            <div className='flex items-center justify-center gap-3'>
                                <svg className='w-[23px] h-[23px] fill-[#1C69D4]' id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path id="Caminho_126" data-name="Caminho 126" d="M21.45,9.26l-1.57.33L22,11.19v7.23a1.13,1.13,0,0,1-1.11,1.1H19.23a1.12,1.12,0,0,1-1.11-1.11v-.55H5.88v.55a1.12,1.12,0,0,1-1.11,1.11H3.11A1.11,1.11,0,0,1,2,18.41V11.18l2.12-1.6L2.56,9.25a.73.73,0,0,1-.46-.32A1,1,0,0,1,2,8.47.65.65,0,0,1,2.16,8a.59.59,0,0,1,.49-.2H4.77a14.19,14.19,0,0,1,1.94-2.5,3.7,3.7,0,0,1,2.62-.83h5.34a3.7,3.7,0,0,1,2.62.83,14.19,14.19,0,0,1,1.94,2.5h2.12a.59.59,0,0,1,.49.2.65.65,0,0,1,.16.45,1,1,0,0,1-.1.46A.79.79,0,0,1,21.45,9.26ZM7,14.5V14a1.66,1.66,0,0,0-1.66-1.66H2.55v.55A1.49,1.49,0,0,0,3.17,14a2.11,2.11,0,0,0,1.34.48ZM5.88,9H18.12A12.31,12.31,0,0,0,17,6.64a2.22,2.22,0,0,0-2-1H9a2.21,2.21,0,0,0-2,1A11.74,11.74,0,0,0,5.88,9ZM12,12.84c0-.15-.1-.28-.31-.39a1.26,1.26,0,0,0-.54-.16H8.61a1,1,0,0,0-.52.15.44.44,0,0,0-.26.4A1.47,1.47,0,0,0,8.4,14.1a1.87,1.87,0,0,0,1.09.4h1.66a1.13,1.13,0,0,0,.54-.16c.21-.11.31-.24.31-.39Zm2.51,1.66a1.87,1.87,0,0,0,1.09-.4,1.44,1.44,0,0,0,.57-1.26.44.44,0,0,0-.26-.4,1,1,0,0,0-.52-.15H12.85a1.26,1.26,0,0,0-.54.16c-.21.11-.31.24-.31.39V14c0,.15.1.28.31.39a1.13,1.13,0,0,0,.54.16Zm4.17-2.21A1.66,1.66,0,0,0,17,14v.55h2.47A1.17,1.17,0,0,0,20.55,14a2.06,2.06,0,0,0,.34-1.18v-.55Z" /></svg>
                                <p className='text-xl'>Solicitar cotação</p>
                            </div>

                            <div className="relative h-11  min-[600]:w-[215px] w-5/6">
                                <input placeholder=""
                                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 hover:border-b-2" />
                                <label
                                    className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100  peer-focus:after:border-[#1C69D4] hover:border-[#BBBBBB] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Nome
                                </label>
                            </div>

                            <div className="relative h-11  min-[600]:w-[215px] w-5/6">
                                <input placeholder=""
                                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 hover:border-b-2" />
                                <label
                                    className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-[#1C69D4] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    E-mail
                                </label>
                            </div>

                            <div className="relative h-11  min-[600]:w-[215px] w-5/6">
                                <input placeholder=""

                                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 hover:border-b-2" />
                                <label
                                    className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-[#1C69D4] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Telefone
                                </label>
                            </div>

                            <div className="relative h-11  min-[600]:w-[215px] w-5/6">
                                <label htmlFor="underline_select" className="sr-only ">Underline select</label>
                                <select id="underline_select" className="cursor-pointer min-[600]:w-[215px] w-full block py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0  peer peer-focus:after:border-[#1C69D4] border-t-0 border-r-0 border-l-0 border-b-[1px] hover:border-b-2 focus:border-[#1C69D4] peer-focus:after:scale-x-100 ">
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

                            <div className="relative h-11  min-[600]:w-[215px] w-5/6">
                                <input placeholder=""
                                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 hover:border-b-2" />
                                <label
                                    className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-[#1C69D4] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Mensagem
                                </label>
                            </div>

                            <label className='text-xs flex cursor-pointer' htmlFor="">
                                <input className='text-[#666666] cursor-pointer' type="checkbox" placeholder='Mensagem' />
                                <p className='ml-3 text-[#666666] max-[599px]:text-sm hover:text-[#1C69D4] cursor-pointer'>Aceito a <span className='font-bold'>Política de Privacidade</span></p>
                            </label>

                            <button className='text-sm min-[600]:w-[215px] w-5/6 border-none h-[45px] font-bold text-white bg-[#1C69D4] hover:bg-[#0351BE]'>Enviar</button>
                        </section>
                    }
                </div>
               
            </section>
        </>
    )
}

export default HeaderForm;
