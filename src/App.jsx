import { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Navbar/Header';
import Banner from './components/Banner/Banner';
import Deals from './components/Deals/Deals';
import Services from './components/Service/Services';
import Reviews from './components/Reviews/Reviews';
import Questionaire from './components/Questionaire/Questionaire';
import Footer from './components/Footer/Footer';
import TyreSold from './components/TyreSection/TyreSold';
import PaymentModes from './components/Payment/PaymentModes';
import Loader from './components/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Banner />
          <Deals />
          <Services />
          <PaymentModes />
          <Reviews />
          <TyreSold />
          <Questionaire />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
