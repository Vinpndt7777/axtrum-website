import Header from './header'
import Footer from './footer'
export default function Layout({children, home}) {
    return (
        <>
           <Header></Header>
           <main className='container-fluid'>
           {children}
           </main>
           <Footer></Footer>
        </>
    )
  }