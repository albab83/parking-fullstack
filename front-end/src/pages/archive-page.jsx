import TableArchive from '../component/TableArchive'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const ArchivePage = () => {
   return (
      <div className="grid grid-cols-1 transition-all delay-200">
         <Navbar></Navbar>
         <div className="m-10 h-screen">
            <TableArchive></TableArchive>
         </div>
         <Footer />
      </div>
   )
}

export default ArchivePage
