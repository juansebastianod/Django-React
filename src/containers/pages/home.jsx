import Footer from "components/navegation/Footer"
import Navbar from "components/navegation/Navbar"
import Layout from "hocs/layouts/Layout"

function Home(){

    return (
        <Layout>

            <Navbar/>

            <div className="pt-28">
            home

            </div>
          

            <Footer/>
        </Layout>
    )
}

export default Home