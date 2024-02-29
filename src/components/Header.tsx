import { useEffect, useState } from "react"
import bmw from '/veiculos/serie1.png'
import HeaderForm from "./HeaderForm";

function Header({ isOpenHeader, setIsOpenHeader }: any) {
  const [dropIsOpen, setDropIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false);
  const [screen, setScreen] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 700;
      setScrolled(isScrolled);
    };

    const handleResize = () => {
      setScreen(window.innerWidth);
    };isOpenHeader

    window.addEventListener('resize', handleResize);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`relative z-50`}>
      { // condição para renderização do header
        (scrolled || isOpenHeader || (screen < 600)) &&
        <HeaderForm isOpenHeader={isOpenHeader} setIsOpenHeader={setIsOpenHeader} screen={screen} setDropIsOpen={setDropIsOpen}/>
      }
      {
        !isOpenHeader &&
        <section className='max-[599px]:hidden flex justify-around z-30'>
          <div className="h-[152px] text-sm">
            <section className="flex gap-8 h-1/2 items-end justify-center md:justify-start">
              <button className="flex justify-center items-center bg-black hover:bg-[#575757] text-white w-[165px] h-[43px] gap-1">
                <svg className='w-[19px] h-[19px] fill-white' id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,16.5a1.11,1.11,0,0,1,0,.19l-.84,3.66a.9.9,0,0,1-.83.65h0A16.31,16.31,0,0,1,3,4.69H3a.88.88,0,0,1,.65-.82L7.31,3,7.5,3a.93.93,0,0,1,.78.51L10,7.45a.75.75,0,0,1,.07.33.91.91,0,0,1-.31.65L7.59,10.18a15.2,15.2,0,0,0,6.23,6.23l1.74-2.13a.94.94,0,0,1,.66-.31,1,1,0,0,1,.33.06l3.94,1.69A.93.93,0,0,1,21,16.5Z" /></svg>
                <span>(21) 2042-4442</span>
              </button>
              <button className="flex justify-center items-center bg-black hover:bg-[#575757] text-white w-[167px] h-[43px] gap-1">
                <svg className='w-[19px] h-[19px] fill-white' id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path id="Caminho_169" data-name="Caminho 169" d="M15.39,10.78a1.09,1.09,0,0,1-.07-.24,1.18,1.18,0,0,0-.07-.2,1.08,1.08,0,0,0-.11-.18L15,10l-.14-.11-.17-.11-.22,0-.22,0-.27,0a.57.57,0,0,0-.22.07l-.18.08a1.1,1.1,0,0,0-.18.14.62.62,0,0,1-.11.17,1.74,1.74,0,0,0-.11.18.85.85,0,0,1-.09.22.57.57,0,0,0,0,.22A.94.94,0,0,0,13,11a1.79,1.79,0,0,0,0,.23v.93a1.94,1.94,0,0,0,0,.24,2.17,2.17,0,0,0,.07.24,1.59,1.59,0,0,1,.07.2.66.66,0,0,0,.06.2.62.62,0,0,1,.14.18.46.46,0,0,0,.13.18.42.42,0,0,1,.15.11.56.56,0,0,0,.2.11.76.76,0,0,0,.2.06,1.35,1.35,0,0,0,.49,0,.66.66,0,0,0,.2-.06l.18-.11a1.29,1.29,0,0,0,.17-.16.88.88,0,0,0,.12-.15l.11-.2c0-.06.05-.13.08-.2l.09-.25a.75.75,0,0,1,0-.2,1.94,1.94,0,0,0,0-.24v-.93a1.64,1.64,0,0,0,0-.22A1.42,1.42,0,0,0,15.39,10.78ZM15,12a2.83,2.83,0,0,0,0,.29,2.52,2.52,0,0,0-.06.29,1.59,1.59,0,0,1-.07.2.83.83,0,0,1-.11.15.57.57,0,0,0-.11.16l-.18.06a.69.69,0,0,1-.35,0,.26.26,0,0,1-.13-.06.19.19,0,0,1-.14-.05L13.7,13l-.09-.11a.29.29,0,0,1,0-.16L13.44,12V11.4l.13-.66.09-.16a.21.21,0,0,0,0-.11l.11-.09a.31.31,0,0,0,.11-.09.23.23,0,0,1,.14,0h.33a.15.15,0,0,1,.11,0l.13.09.09.09.09.16a.2.2,0,0,1,0,.15l.09.31.05.62c0,.11,0,.22,0,.33ZM22.2,7.77A10.84,10.84,0,0,0,12,1a11.06,11.06,0,0,0-4.21.8A10.65,10.65,0,0,0,4.23,4.19,10.59,10.59,0,0,0,1,12,10.91,10.91,0,0,0,7.77,22.2,11.06,11.06,0,0,0,12,23,10.85,10.85,0,0,0,23,12.31V12a11.24,11.24,0,0,0-.79-4.21Zm-1,5.4a7.19,7.19,0,0,1-2.08,1.11l-.12,0a16.07,16.07,0,0,0,.16-2.3A17.61,17.61,0,0,0,19,9.72l.11,0a6.3,6.3,0,0,1,2.08,1.06,2.25,2.25,0,0,1,.41.46q0,.35,0,.69c0,.25,0,.5,0,.74a2.59,2.59,0,0,1-.41.46Zm-6.86,8a5.62,5.62,0,0,1-.64.34,10.34,10.34,0,0,1-1.75.15,10.17,10.17,0,0,1-1.75-.15,5.18,5.18,0,0,1-.62-.33,7.32,7.32,0,0,1-2-2.13,10.79,10.79,0,0,1-1.44-3.21c0-.08,0-.16-.05-.24.59.15,1.2.27,1.85.37a25.84,25.84,0,0,0,4,.29A26.44,26.44,0,0,0,16.05,16a17.42,17.42,0,0,0,1.83-.37l-.06.24a11.69,11.69,0,0,1-1.42,3.21,7.11,7.11,0,0,1-2,2.13Zm1.52-6.11a25.52,25.52,0,0,1-3.91.27,26.54,26.54,0,0,1-3.88-.27,18.7,18.7,0,0,1-2.2-.46,16.66,16.66,0,0,1,0-5.18,18.54,18.54,0,0,1,2.21-.49A25.12,25.12,0,0,1,12,8.65a25.76,25.76,0,0,1,3.92.29,20.52,20.52,0,0,1,2.2.48,15.59,15.59,0,0,1,0,5.19,18,18,0,0,1-2.21.46ZM2.36,12.72c0-.25,0-.49,0-.75s0-.46,0-.68a2,2,0,0,1,.41-.47A6.3,6.3,0,0,1,4.85,9.76l.07,0A15.69,15.69,0,0,0,4.76,12a17.47,17.47,0,0,0,.16,2.28l-.07,0a7.19,7.19,0,0,1-2.08-1.11,2.49,2.49,0,0,1-.41-.45ZM9.61,2.81a4.47,4.47,0,0,1,.61-.33,10.34,10.34,0,0,1,3.51,0,4.31,4.31,0,0,1,.64.33,7.11,7.11,0,0,1,2,2.13,12,12,0,0,1,1.42,3.23l.06.26c-.58-.15-1.19-.27-1.83-.37A26.44,26.44,0,0,0,12,7.77a25.84,25.84,0,0,0-4,.29c-.65.1-1.27.23-1.86.38l.06-.27A10.66,10.66,0,0,1,7.59,4.94,7.32,7.32,0,0,1,9.61,2.81ZM21,8.28a9.06,9.06,0,0,1,.49,1.61,8.22,8.22,0,0,0-2-1l-.59-.2c-.05-.28-.11-.55-.18-.82a12.13,12.13,0,0,0-1.53-3.45,10.33,10.33,0,0,0-.91-1.16,9.72,9.72,0,0,1,2.59,1.87A9.67,9.67,0,0,1,21,8.28ZM5.16,5.16A9.68,9.68,0,0,1,7.71,3.31a8.8,8.8,0,0,0-.87,1.14A12.46,12.46,0,0,0,5.29,7.9c-.07.27-.14.55-.2.83l-.55.19a8.22,8.22,0,0,0-2,1A9.06,9.06,0,0,1,3,8.28,9.67,9.67,0,0,1,5.16,5.16ZM3,15.72a9.11,9.11,0,0,1-.49-1.59,9.72,9.72,0,0,0,2,1l.57.19c0,.26.11.53.18.78a12.33,12.33,0,0,0,1.55,3.45,8.19,8.19,0,0,0,.81,1.12,9.91,9.91,0,0,1-2.49-1.82A9.49,9.49,0,0,1,3,15.72Zm15.8,3.12a10.23,10.23,0,0,1-2.53,1.85,10.54,10.54,0,0,0,.85-1.14,12.13,12.13,0,0,0,1.53-3.45c.06-.26.12-.51.17-.77l.6-.2a9.76,9.76,0,0,0,2-1A8.59,8.59,0,0,1,21,15.72a9.67,9.67,0,0,1-2.13,3.12Zm-1.35-8.46a.61.61,0,0,1,0-.13.65.65,0,0,0-.09-.16.76.76,0,0,0-.08-.11.47.47,0,0,0-.11-.13L17,9.76l-.13,0-.18,0-.18,0-.13,0-.15.09a.28.28,0,0,0-.11.13.44.44,0,0,0-.09.11.65.65,0,0,0-.09.16s0,.09,0,.13a.56.56,0,0,0,0,.36s0,.08,0,.13a.6.6,0,0,0,.09.15.31.31,0,0,0,.09.11.3.3,0,0,0,.11.14l.15.09a.31.31,0,0,1,.16,0l.15,0,.18,0,.13,0,.16-.09a.53.53,0,0,0,.11-.14.44.44,0,0,0,.08-.11.6.6,0,0,0,.09-.15.5.5,0,0,1,0-.13,1.1,1.1,0,0,0,0-.18.88.88,0,0,0,0-.17Zm-.38.27a.18.18,0,0,1,0,.09l-.09.08-.14.09-.13.05-.18-.05-.09-.09-.08-.08a.12.12,0,0,0,0-.09.29.29,0,0,1,0-.09l.05-.13.09-.14.08-.09.18,0,.13,0,.14.09.09.14,0,.13Zm-4.65,1.24a.57.57,0,0,0-.11-.22,1.43,1.43,0,0,0-.15-.18.41.41,0,0,0-.16-.16l-.2-.11a.74.74,0,0,0-.24-.11l-.25,0-.22,0-.17.07a.7.7,0,0,0-.23.11.47.47,0,0,0-.13.15,2.46,2.46,0,0,1,0-.26,2.68,2.68,0,0,1,.07-.27.33.33,0,0,1,0-.17l.09-.18.14-.15.08-.12a.29.29,0,0,0,.16,0l.15,0,.23,0a.42.42,0,0,1,.13.07.28.28,0,0,1,.13.11.72.72,0,0,1,.09.2h.53a1.5,1.5,0,0,1-.06-.22,1.34,1.34,0,0,0-.07-.18.58.58,0,0,0-.11-.15.57.57,0,0,1-.11-.16l-.18-.09-.18-.09a.47.47,0,0,1-.17,0l-.22,0a1.06,1.06,0,0,0-.31,0l-.27.09a.92.92,0,0,0-.22.22l-.18.27a1.77,1.77,0,0,0-.15.31,1.82,1.82,0,0,0-.11.4c0,.15,0,.29-.07.44s0,.33,0,.49,0,.24,0,.35a1.08,1.08,0,0,0,.07.31,1.17,1.17,0,0,0,.11.33.79.79,0,0,0,.15.25.48.48,0,0,0,.16.22,1.62,1.62,0,0,1,.2.18l.26.08a1.12,1.12,0,0,0,.31.05l.25,0,.24-.07.2-.11a1,1,0,0,0,.2-.16.46.46,0,0,0,.13-.2q0-.11.09-.24l.09-.27a.75.75,0,0,0,0-.26,1.23,1.23,0,0,0,0-.27,1.11,1.11,0,0,0-.07-.26Zm-.49.53v.17a.34.34,0,0,1,0,.18l-.07.13a.2.2,0,0,1-.06.09.44.44,0,0,1-.11.09l-.11.09-.11,0a.54.54,0,0,1-.31,0L11,13.13a.2.2,0,0,1-.09-.05L10.82,13a1.09,1.09,0,0,0-.08-.15l-.09-.11V12.2a.34.34,0,0,1,0-.18l.09-.11a.31.31,0,0,1,.09-.11l.09-.09a.15.15,0,0,1,.13,0,.35.35,0,0,0,.11,0l.11,0,.16,0a.35.35,0,0,0,.11,0l.13.08.09.09a.24.24,0,0,1,.06.11.77.77,0,0,0,.07.16.19.19,0,0,1,.05.13Zm-2.45-.09a.59.59,0,0,1,0,.13,2.64,2.64,0,0,1,0,.29.41.41,0,0,1-.11.24,1.13,1.13,0,0,1-.11.22.93.93,0,0,1-.16.18.93.93,0,0,1-.18.16.76.76,0,0,1-.22.11l-.24.06-.24,0a1,1,0,0,1-.25,0,.76.76,0,0,1-.2-.06l-.22-.09a.38.38,0,0,1-.13-.09l-.16-.15a.56.56,0,0,1-.11-.2l-.09-.2a2.07,2.07,0,0,0-.08-.2h.57a.52.52,0,0,0,0,.11.41.41,0,0,0,.07.11l.07.06.06.07a.41.41,0,0,0,.11.07l.11,0,.22,0a.41.41,0,0,0,.16,0l.15,0a.26.26,0,0,1,.11-.07.21.21,0,0,0,.18-.18,1,1,0,0,1,.07-.15A.24.24,0,0,0,9,12.66a.41.41,0,0,0,0-.16.4.4,0,0,0,0-.15.24.24,0,0,0-.06-.11l-.07-.13A.35.35,0,0,0,8.79,12a.47.47,0,0,0-.12-.09.22.22,0,0,0-.11,0,.18.18,0,0,0-.13,0H7.91v-.49h.46a.15.15,0,0,0,.11,0l.11,0a.41.41,0,0,0,.11-.07.31.31,0,0,0,.07-.09A.47.47,0,0,1,8.83,11a.31.31,0,0,1,0-.13.59.59,0,0,0,0-.13.36.36,0,0,0,0-.11.61.61,0,0,1,0-.11.73.73,0,0,1-.06-.14.08.08,0,0,0-.07,0,.22.22,0,0,0-.09-.07l-.13-.06H8.26a.78.78,0,0,0-.22,0,.67.67,0,0,0-.18.07.24.24,0,0,0-.13.13.35.35,0,0,0-.05.18H7.11a1.58,1.58,0,0,0,.06-.23.87.87,0,0,1,.07-.17.57.57,0,0,1,.11-.16l.15-.15.16-.09a.72.72,0,0,1,.2-.09.34.34,0,0,1,.18,0h.22l.22,0,.22,0,.2.09a.24.24,0,0,1,.15.13l.16.18a1.08,1.08,0,0,1,.11.18,1.42,1.42,0,0,1,.07.22,2.28,2.28,0,0,1,0,.26.36.36,0,0,1,0,.11.26.26,0,0,0,0,.11l-.08.23-.14.17L9,11.58l.18.17.09.09.08.09.07.13.07.14a.59.59,0,0,0,0,.13Z" /></svg>
                <span>TOUR VIRTUAL</span>
              </button>
              <button className="flex justify-center items-center bg-[#25D366] hover:bg-[#35AA61] text-white w-[143px] h-[43px] gap-1">
                <svg className='w-[19px] h-[19px] fill-white' id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path id="Caminho_6" data-name="Caminho 6" d="M18.66,5.26a9.81,9.81,0,0,1,2.1,3.07,9.15,9.15,0,0,1-.55,8.29,9.72,9.72,0,0,1-3.48,3.44A9.24,9.24,0,0,1,12,21.33h0a9.11,9.11,0,0,1-4.5-1.15l-5,1.32,1.36-4.88a9.06,9.06,0,0,1-1.28-4.71,9.05,9.05,0,0,1,1.28-4.7A9.58,9.58,0,0,1,7.29,3.77a9.32,9.32,0,0,1,8.29-.55A9.79,9.79,0,0,1,18.66,5.26ZM12,19.76a7.66,7.66,0,0,0,3.94-1.06,8.06,8.06,0,0,0,2.91-2.86,7.55,7.55,0,0,0,1.08-3.93,7.2,7.2,0,0,0-.64-3,8.23,8.23,0,0,0-1.76-2.57A7.87,7.87,0,0,0,15,4.66a7.88,7.88,0,0,0-6.92.46A8,8,0,0,0,5.21,8a7.71,7.71,0,0,0,.17,8.08l.17.3-.8,2.88,3-.76.3.17A7.56,7.56,0,0,0,12,19.76Zm4.28-5.9.13.09a.68.68,0,0,1,.34.21,1.19,1.19,0,0,1,0,.42,2.39,2.39,0,0,1-.17.7,1.75,1.75,0,0,1-.68.72,2.07,2.07,0,0,1-.91.4,3.7,3.7,0,0,1-1.15,0,9.51,9.51,0,0,1-1.7-.59,9.65,9.65,0,0,1-3.94-3.47l-.08-.09a4.26,4.26,0,0,1-.93-2.41A2.68,2.68,0,0,1,8,7.92l0,0a.9.9,0,0,1,.63-.3h.51a.55.55,0,0,1,.28.07A.63.63,0,0,1,9.63,8l.72,1.74a.47.47,0,0,1,0,.43,3,3,0,0,1-.55.76.83.83,0,0,0-.21.28c0,.07,0,.14.08.23a5.49,5.49,0,0,0,1.4,1.74,10.32,10.32,0,0,0,1.78,1.06c.23.12.4.1.51,0a11.89,11.89,0,0,0,.76-.93c.06-.11.13-.17.21-.17a1.36,1.36,0,0,1,.3,0c.23.08.76.34,1.61.77Z" /></svg>
                <span>WHATSAPP</span>
              </button>
            </section>
            <section className="w-full flex  h-1/2 items-center justify-center text-[#666666] font-bold">
              <div onClick={() => setDropIsOpen(!dropIsOpen)} className="flex gap-14 md:gap-20 cursor-pointer justify-center">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>7</p>
                <p>8</p>
                <p>Plug-in-Hybrid</p>
              </div>
            </section>
          </div>
          <div className="mt-[35px]">
            <svg className="w-[10vw] md:w-[90px]" xmlns="http://www.w3.org/2000/svg" width="91.979" height="91.979" viewBox="0 0 91.979 91.979"><g transform="translate(-2250.822 1635)"><path d="M2298.038-1635a45.99,45.99,0,0,0-45.99,45.991,45.989,45.989,0,0,0,45.988,45.988,45.989,45.989,0,0,0,45.991-45.991A45.989,45.989,0,0,0,2298.04-1635m43,45.99a43,43,0,0,1-43,43,43,43,0,0,1-43-43,43,43,0,0,1,43-43,43,43,0,0,1,43,43" transform="translate(-1.227 0)" fill="#707070" /><path d="M2333.431-1580.89v1.5a25.807,25.807,0,0,1,25.777,25.777h1.5a27.272,27.272,0,0,0-27.273-27.272m0,53.049a25.807,25.807,0,0,1-25.777-25.777h-1.5a27.272,27.272,0,0,0,27.272,27.272" transform="translate(-36.619 -35.393)" fill="#707070" /><path d="M2439.716-1585.078c.623.671,1.525,1.753,2.031,2.408l9.312-5.911c-.466-.608-1.205-1.533-1.761-2.183l-5.9,3.9-.4.346.3-.439,2.6-5.2-1.84-1.841-5.2,2.6-.438.3.346-.4,3.9-5.9c-.686-.586-1.344-1.121-2.186-1.771l-5.915,9.307c.749.578,1.736,1.423,2.364,2l5.567-2.888.355-.262-.262.357Z" transform="translate(-120.613 -23.443)" fill="#707070" /><path d="M2373.278-1610.085l2.545-5.7.161-.5-.046.528.268,7.615c.893.085,1.814.207,2.725.359l-.415-11.28c-1.272-.141-2.536-.242-3.8-.3l-2.5,6.221-.088.463-.09-.463-2.5-6.221c-1.266.054-2.532.155-3.8.3l-.415,11.28c.91-.151,1.831-.274,2.724-.359l.267-7.615-.046-.528.164.5,2.543,5.7Z" transform="translate(-75.307 -10.228)" fill="#707070" /><path d="M2302.874-1583.93c1.47-1.548,2.3-3.34.831-5.048a2.862,2.862,0,0,0-3.26-.674l-.11.046.034-.1a2.687,2.687,0,0,0-.927-2.818,2.775,2.775,0,0,0-2.057-.573c-1.383.141-2.445,1.084-5.34,4.312-.872.974-2.144,2.51-2.907,3.505l7.946,7.54c2.641-2.92,3.714-4,5.79-6.192m-10.369-1.843a48.933,48.933,0,0,1,4.075-4.437,2.136,2.136,0,0,1,.829-.532.986.986,0,0,1,.753.133.986.986,0,0,1,.43.63,1.746,1.746,0,0,1-.591,1.47c-.847.953-3.948,4.2-3.948,4.2Zm3.111,2.952s3.025-3.2,4.01-4.218a3.637,3.637,0,0,1,.915-.784,1.028,1.028,0,0,1,1.069.022.941.941,0,0,1,.407.994,2.943,2.943,0,0,1-.783,1.224c-.414.447-4,4.285-4.005,4.29Z" transform="translate(-25.485 -27.396)" fill="#707070" /><path d="M2333.431-1580.89v27.272h-27.272a27.258,27.258,0,0,1,7.984-19.289,27.261,27.261,0,0,1,19.288-7.983" transform="translate(-36.619 -35.392)" fill="#0966af" /><path d="M2412.272-1502.051a27.26,27.26,0,0,1-7.984,19.288A27.258,27.258,0,0,1,2385-1474.78v-27.273Z" transform="translate(-88.189 -86.959)" fill="#0966af" /></g></svg>
          </div>
        </section>
      }
      { // Dropdown do menu
        dropIsOpen &&
        <section className="h-[383px] w-full bg-white absolute z-20 flex flex-col md:text-xl justify-center items-center border-2 shadow-sm">
          <section className="h-full flex max-[650px]:scale-95">
            <svg className="w-6 fill-[#666666] mr-10 cursor-pointer" id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.13,3.33a.7.7,0,0,1,1,0l1.13,1.09a.65.65,0,0,1,0,.93v0L10.48,12l6.75,6.63a.66.66,0,0,1,0,.93l0,0L16.1,20.67a.7.7,0,0,1-1,0l-8.36-8.2a.65.65,0,0,1,0-.92l0,0Z" /></svg>
            <div className='max-w-[315px] max-h-[278px] flex flex-col justify-evenly md:justify-around text-xl'>
              <img src={bmw} className='min-w-36 w-[15vw] max-w-[275px] hover:opacity-50 cursor-pointer' alt="" />
              <p className="text-lg md:text-xl">BMW Série 1</p>
              <div className='flex items-center gap-2'>
                <p className='text-xs text-[#666666]'>Compartilhe:</p>
                <svg className='w-6 fill-[#666666] hover:fill-[#1C69D4] cursor-pointer' id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,21.5h3.49V13h2.71l.44-3.37H13.45V7.29a1.86,1.86,0,0,1,.29-1.19,1.72,1.72,0,0,1,1.37-.44H16.9v-3a18.8,18.8,0,0,0-2.6-.15,4.31,4.31,0,0,0-3.15,1.17A4.45,4.45,0,0,0,10,7V9.63H7.1V13H10Z" /></svg>
                <svg className='w-6 fill-[#666666] hover:fill-[#1C69D4] cursor-pointer' id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path id="Caminho_6" data-name="Caminho 6" d="M18.66,5.26a9.81,9.81,0,0,1,2.1,3.07,9.15,9.15,0,0,1-.55,8.29,9.72,9.72,0,0,1-3.48,3.44A9.24,9.24,0,0,1,12,21.33h0a9.11,9.11,0,0,1-4.5-1.15l-5,1.32,1.36-4.88a9.06,9.06,0,0,1-1.28-4.71,9.05,9.05,0,0,1,1.28-4.7A9.58,9.58,0,0,1,7.29,3.77a9.32,9.32,0,0,1,8.29-.55A9.79,9.79,0,0,1,18.66,5.26ZM12,19.76a7.66,7.66,0,0,0,3.94-1.06,8.06,8.06,0,0,0,2.91-2.86,7.55,7.55,0,0,0,1.08-3.93,7.2,7.2,0,0,0-.64-3,8.23,8.23,0,0,0-1.76-2.57A7.87,7.87,0,0,0,15,4.66a7.88,7.88,0,0,0-6.92.46A8,8,0,0,0,5.21,8a7.71,7.71,0,0,0,.17,8.08l.17.3-.8,2.88,3-.76.3.17A7.56,7.56,0,0,0,12,19.76Zm4.28-5.9.13.09a.68.68,0,0,1,.34.21,1.19,1.19,0,0,1,0,.42,2.39,2.39,0,0,1-.17.7,1.75,1.75,0,0,1-.68.72,2.07,2.07,0,0,1-.91.4,3.7,3.7,0,0,1-1.15,0,9.51,9.51,0,0,1-1.7-.59,9.65,9.65,0,0,1-3.94-3.47l-.08-.09a4.26,4.26,0,0,1-.93-2.41A2.68,2.68,0,0,1,8,7.92l0,0a.9.9,0,0,1,.63-.3h.51a.55.55,0,0,1,.28.07A.63.63,0,0,1,9.63,8l.72,1.74a.47.47,0,0,1,0,.43,3,3,0,0,1-.55.76.83.83,0,0,0-.21.28c0,.07,0,.14.08.23a5.49,5.49,0,0,0,1.4,1.74,10.32,10.32,0,0,0,1.78,1.06c.23.12.4.1.51,0a11.89,11.89,0,0,0,.76-.93c.06-.11.13-.17.21-.17a1.36,1.36,0,0,1,.3,0c.23.08.76.34,1.61.77Z" /></svg>
              </div>
            </div>
            <div className='max-w-[315px] max-h-[278px] flex flex-col justify-evenly md:justify-around text-xl'>
              <img src={bmw} className='min-w-36 w-[15vw] max-w-[275px] hover:opacity-50 cursor-pointer' alt="" />
              <p className="text-lg md:text-xl">BMW Série 1</p>
              <div className='flex items-center gap-2'>
                <p className='text-xs text-[#666666]'>Compartilhe:</p>
                <svg className='w-6 fill-[#666666] hover:fill-[#1C69D4] cursor-pointer' id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,21.5h3.49V13h2.71l.44-3.37H13.45V7.29a1.86,1.86,0,0,1,.29-1.19,1.72,1.72,0,0,1,1.37-.44H16.9v-3a18.8,18.8,0,0,0-2.6-.15,4.31,4.31,0,0,0-3.15,1.17A4.45,4.45,0,0,0,10,7V9.63H7.1V13H10Z" /></svg>
                <svg className='w-6 fill-[#666666] hover:fill-[#1C69D4] cursor-pointer' id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path id="Caminho_6" data-name="Caminho 6" d="M18.66,5.26a9.81,9.81,0,0,1,2.1,3.07,9.15,9.15,0,0,1-.55,8.29,9.72,9.72,0,0,1-3.48,3.44A9.24,9.24,0,0,1,12,21.33h0a9.11,9.11,0,0,1-4.5-1.15l-5,1.32,1.36-4.88a9.06,9.06,0,0,1-1.28-4.71,9.05,9.05,0,0,1,1.28-4.7A9.58,9.58,0,0,1,7.29,3.77a9.32,9.32,0,0,1,8.29-.55A9.79,9.79,0,0,1,18.66,5.26ZM12,19.76a7.66,7.66,0,0,0,3.94-1.06,8.06,8.06,0,0,0,2.91-2.86,7.55,7.55,0,0,0,1.08-3.93,7.2,7.2,0,0,0-.64-3,8.23,8.23,0,0,0-1.76-2.57A7.87,7.87,0,0,0,15,4.66a7.88,7.88,0,0,0-6.92.46A8,8,0,0,0,5.21,8a7.71,7.71,0,0,0,.17,8.08l.17.3-.8,2.88,3-.76.3.17A7.56,7.56,0,0,0,12,19.76Zm4.28-5.9.13.09a.68.68,0,0,1,.34.21,1.19,1.19,0,0,1,0,.42,2.39,2.39,0,0,1-.17.7,1.75,1.75,0,0,1-.68.72,2.07,2.07,0,0,1-.91.4,3.7,3.7,0,0,1-1.15,0,9.51,9.51,0,0,1-1.7-.59,9.65,9.65,0,0,1-3.94-3.47l-.08-.09a4.26,4.26,0,0,1-.93-2.41A2.68,2.68,0,0,1,8,7.92l0,0a.9.9,0,0,1,.63-.3h.51a.55.55,0,0,1,.28.07A.63.63,0,0,1,9.63,8l.72,1.74a.47.47,0,0,1,0,.43,3,3,0,0,1-.55.76.83.83,0,0,0-.21.28c0,.07,0,.14.08.23a5.49,5.49,0,0,0,1.4,1.74,10.32,10.32,0,0,0,1.78,1.06c.23.12.4.1.51,0a11.89,11.89,0,0,0,.76-.93c.06-.11.13-.17.21-.17a1.36,1.36,0,0,1,.3,0c.23.08.76.34,1.61.77Z" /></svg>
              </div>
            </div>
            <div className=' max-w-[315px] max-h-[278px] flex flex-col justify-evenly md:justify-around text-xl'>
              <img src={bmw} className='min-w-36 w-[15vw] max-w-[275px] hover:opacity-50 cursor-pointer' alt="" />
              <p className="text-lg md:text-xl">BMW Série 1</p>
              <div className='flex items-center gap-2'>
                <p className='text-xs text-[#666666]'>Compartilhe:</p>
                <svg className='w-6 fill-[#666666] hover:fill-[#1C69D4] cursor-pointer' id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,21.5h3.49V13h2.71l.44-3.37H13.45V7.29a1.86,1.86,0,0,1,.29-1.19,1.72,1.72,0,0,1,1.37-.44H16.9v-3a18.8,18.8,0,0,0-2.6-.15,4.31,4.31,0,0,0-3.15,1.17A4.45,4.45,0,0,0,10,7V9.63H7.1V13H10Z" /></svg>
                <svg className='w-6 fill-[#666666] hover:fill-[#1C69D4] cursor-pointer' id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path id="Caminho_6" data-name="Caminho 6" d="M18.66,5.26a9.81,9.81,0,0,1,2.1,3.07,9.15,9.15,0,0,1-.55,8.29,9.72,9.72,0,0,1-3.48,3.44A9.24,9.24,0,0,1,12,21.33h0a9.11,9.11,0,0,1-4.5-1.15l-5,1.32,1.36-4.88a9.06,9.06,0,0,1-1.28-4.71,9.05,9.05,0,0,1,1.28-4.7A9.58,9.58,0,0,1,7.29,3.77a9.32,9.32,0,0,1,8.29-.55A9.79,9.79,0,0,1,18.66,5.26ZM12,19.76a7.66,7.66,0,0,0,3.94-1.06,8.06,8.06,0,0,0,2.91-2.86,7.55,7.55,0,0,0,1.08-3.93,7.2,7.2,0,0,0-.64-3,8.23,8.23,0,0,0-1.76-2.57A7.87,7.87,0,0,0,15,4.66a7.88,7.88,0,0,0-6.92.46A8,8,0,0,0,5.21,8a7.71,7.71,0,0,0,.17,8.08l.17.3-.8,2.88,3-.76.3.17A7.56,7.56,0,0,0,12,19.76Zm4.28-5.9.13.09a.68.68,0,0,1,.34.21,1.19,1.19,0,0,1,0,.42,2.39,2.39,0,0,1-.17.7,1.75,1.75,0,0,1-.68.72,2.07,2.07,0,0,1-.91.4,3.7,3.7,0,0,1-1.15,0,9.51,9.51,0,0,1-1.7-.59,9.65,9.65,0,0,1-3.94-3.47l-.08-.09a4.26,4.26,0,0,1-.93-2.41A2.68,2.68,0,0,1,8,7.92l0,0a.9.9,0,0,1,.63-.3h.51a.55.55,0,0,1,.28.07A.63.63,0,0,1,9.63,8l.72,1.74a.47.47,0,0,1,0,.43,3,3,0,0,1-.55.76.83.83,0,0,0-.21.28c0,.07,0,.14.08.23a5.49,5.49,0,0,0,1.4,1.74,10.32,10.32,0,0,0,1.78,1.06c.23.12.4.1.51,0a11.89,11.89,0,0,0,.76-.93c.06-.11.13-.17.21-.17a1.36,1.36,0,0,1,.3,0c.23.08.76.34,1.61.77Z" /></svg>
              </div>
            </div>
            <div className=' max-w-[315px] max-h-[278px] flex flex-col justify-evenly md:justify-around text-xl'>
              <img src={bmw} className='min-w-36 w-[15vw] max-w-[275px] hover:opacity-50 cursor-pointer' alt="" />
              <p className="text-lg md:text-xl">BMW Série 1</p>
              <div className='flex items-center gap-2'>
                <p className='text-xs text-[#666666]'>Compartilhe:</p>
                <svg className='w-6 fill-[#666666] hover:fill-[#1C69D4] cursor-pointer' id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,21.5h3.49V13h2.71l.44-3.37H13.45V7.29a1.86,1.86,0,0,1,.29-1.19,1.72,1.72,0,0,1,1.37-.44H16.9v-3a18.8,18.8,0,0,0-2.6-.15,4.31,4.31,0,0,0-3.15,1.17A4.45,4.45,0,0,0,10,7V9.63H7.1V13H10Z" /></svg>
                <svg className='w-6 fill-[#666666] hover:fill-[#1C69D4] cursor-pointer' id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path id="Caminho_6" data-name="Caminho 6" d="M18.66,5.26a9.81,9.81,0,0,1,2.1,3.07,9.15,9.15,0,0,1-.55,8.29,9.72,9.72,0,0,1-3.48,3.44A9.24,9.24,0,0,1,12,21.33h0a9.11,9.11,0,0,1-4.5-1.15l-5,1.32,1.36-4.88a9.06,9.06,0,0,1-1.28-4.71,9.05,9.05,0,0,1,1.28-4.7A9.58,9.58,0,0,1,7.29,3.77a9.32,9.32,0,0,1,8.29-.55A9.79,9.79,0,0,1,18.66,5.26ZM12,19.76a7.66,7.66,0,0,0,3.94-1.06,8.06,8.06,0,0,0,2.91-2.86,7.55,7.55,0,0,0,1.08-3.93,7.2,7.2,0,0,0-.64-3,8.23,8.23,0,0,0-1.76-2.57A7.87,7.87,0,0,0,15,4.66a7.88,7.88,0,0,0-6.92.46A8,8,0,0,0,5.21,8a7.71,7.71,0,0,0,.17,8.08l.17.3-.8,2.88,3-.76.3.17A7.56,7.56,0,0,0,12,19.76Zm4.28-5.9.13.09a.68.68,0,0,1,.34.21,1.19,1.19,0,0,1,0,.42,2.39,2.39,0,0,1-.17.7,1.75,1.75,0,0,1-.68.72,2.07,2.07,0,0,1-.91.4,3.7,3.7,0,0,1-1.15,0,9.51,9.51,0,0,1-1.7-.59,9.65,9.65,0,0,1-3.94-3.47l-.08-.09a4.26,4.26,0,0,1-.93-2.41A2.68,2.68,0,0,1,8,7.92l0,0a.9.9,0,0,1,.63-.3h.51a.55.55,0,0,1,.28.07A.63.63,0,0,1,9.63,8l.72,1.74a.47.47,0,0,1,0,.43,3,3,0,0,1-.55.76.83.83,0,0,0-.21.28c0,.07,0,.14.08.23a5.49,5.49,0,0,0,1.4,1.74,10.32,10.32,0,0,0,1.78,1.06c.23.12.4.1.51,0a11.89,11.89,0,0,0,.76-.93c.06-.11.13-.17.21-.17a1.36,1.36,0,0,1,.3,0c.23.08.76.34,1.61.77Z" /></svg>
              </div>
            </div>
            <svg className="w-6 fill-[#666666] cursor-pointer" id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.87,20.67a.7.7,0,0,1-1,0L6.77,19.58a.65.65,0,0,1,0-.93v0L13.52,12,6.77,5.37a.66.66,0,0,1,0-.93l0,0L7.9,3.33a.7.7,0,0,1,1,0l8.36,8.2a.65.65,0,0,1,0,.92l0,0Z" /></svg>
          </section>
          <section className="flex justify-around w-16 cursor-pointer h-24 items-center">
            <div className="bg-[#1C69D4] w-3.5 h-3.5 rounded-lg"></div>
            <div className="bg-[#666666] w-3.5 h-3.5 rounded-lg"></div>
            <div className="bg-[#666666] w-3.5 h-3.5 rounded-lg"></div>
          </section>
        </section>
      }
    </header>
  )
}

export default Header
