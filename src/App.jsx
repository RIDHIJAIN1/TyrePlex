import { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Deals from './components/Deals';
import Services from './components/Services';
import Reviews from './components/Reviews/Reviews';
import Questionaire from './components/Questionaire';
import Footer from './components/Footer';
import TyreSold from './components/TyreSold';
import Dropdown from './components/Dropdown';
import PaymentModes from './components/PaymentModes';
import Loader from './components/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate a data fetching or loading process
  useEffect(() => {
    // Simulate a loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change this duration based on your actual loading time

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
