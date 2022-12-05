import Head from 'next/head';
import Exp from "../components/Exp";
import AboutUs from "../components/AboutUs";
import Navbar from "../components/Navbar";
import OurTeam from "../components/OurTeam";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";



export default function Main() {
  return (
    <div>
      <Head>
        <title>Code Of Duty</title>
        <meta name="description" content="Powered by next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff008e"/>
        <meta name="msapplication-TileColor" content="#ff008e"/>
        <meta name="theme-color" content="#ff008e"/>
      </Head>
      <Navbar />
        <OurTeam />
        <AboutUs />
        <Exp />
        <Services />
        <Contact />
        <Footer />
    </div>
  );
}