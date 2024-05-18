import FormParking from '../component/FormParking'
import Header from '../component/Header'
import TableParking from '../component/TableParking'
import Footer from '../component/Footer'

const Page = () => {
   return (
      <div className="grid grid-cols-1 h-screen">
         <Header></Header>
         <div className="grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 p-7 gap-7">
            <div className="sm:col-span-1 md:col-span-1">
               <FormParking></FormParking>
            </div>
            <div className="sm:col-span-1 xl:col-span-3 md:col-span-2">
               <TableParking />
            </div>
         </div>
         <Footer />
      </div>
   )
}

export default Page
