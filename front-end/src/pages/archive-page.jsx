import TableArchive from '../fragment/TableArchive'
import Navbar from '../fragment/Navbar'
import Footer from '../fragment/Footer'

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
