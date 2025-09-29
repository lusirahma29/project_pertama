import Contact from "../components/shared/contact";
import Footer from "../components/shared/footer";
import Header from "../components/shared/header";
import Hero from "../components/shared/hero";
import ProductList from "../components/shared/productlist";
import Team from "../components/shared/team";
import bookIcon from "../assets/book.png";


export default function Home() {

    return (
        <>
            <Header />
            <Hero bookIcon={bookIcon} />
            <ProductList />
            <Team />
            <Contact />
            <Footer />
        </>
    )
}