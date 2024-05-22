import { BiLogoInstagram, BiLogoFacebook, BiLogoTiktok } from 'react-icons/bi'

const Footer = () => {
   return (
      <div className="w-full flex justify-center bg-slate-800 py-6 items-center text-white">
         <footer>
            <div className=" flex flex-row space-x-3 justify-center mb-5">
               <p className="font-light">Follow Me:</p>
               <div className="flex flex-row justify-center space-x-3">
                  <BiLogoInstagram className="text-2xl hover:text-red-600 cursor-pointer" />
                  <BiLogoFacebook className="text-2xl hover:text-blue-600 cursor-pointer" />
                  <BiLogoTiktok className="text-2xl hover:text-pink-600 cursor-pointer" />
               </div>
            </div>
            <p className="text-center">
               © 2024 Coded with 💙 by Albab Ghozari
            </p>
         </footer>
      </div>
   )
}

export default Footer
