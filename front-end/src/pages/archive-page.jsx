import TableArchive from '../component/TableArchive'
import Header from '../component/Header'
import Footer from '../component/Footer'

const ArchivePage = () => {
   return (
      <div className="grid grid-cols-1 transition-all delay-200">
         <Header></Header>
         <div className="m-10 h-screen">
            <TableArchive></TableArchive>
         </div>
         <Footer />
      </div>
   )
}

export default ArchivePage
