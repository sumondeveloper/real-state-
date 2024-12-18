import {
  Navbar,
  HeroSection,
  Feature,
  Available,
  AboutSection,
  CtaSection,
  Faq,
  Team,
  Contact,
  Footer,
} from "./pages";

const App = () => {
  return (
    <>
      {/*  ====== Navbar Section Start  */}
      <Navbar />
      {/*  ====== Navbar Section End  */}
      {/*  ====== Hero Section Start  */}
      <HeroSection />
      {/*  ====== Hero Section End  */}
      {/*  ====== Features Section Start  */}
      <Feature />
      {/*  ====== Features Section End  */}
      {/* =========== Available ============= */}
      <Available />

      {/* <!-- ====== About Section Start --> */}
      <AboutSection />
      {/* // <!-- ====== About Section End --> */}

      {/* <!-- ====== CTA Section Start --> */}
      <CtaSection />
      {/* <!-- ====== CTA Section End --> */}

      {/* <!-- ====== FAQ Section Start --> */}
      <Faq />

      {/* <!-- ====== FAQ Section End --> */}
      {/* <!-- ====== Team Section Start --> */}
      <Team />
      {/* <!-- ====== Team Section End --> */}

      {/* <!-- ====== Contact Start ====== --> */}
      <Contact />
      {/* <!-- ====== Contact End ====== --> */}
      {/* <!-- ====== Footer Section Start --> */}
      <Footer />
    </>
  );
};
export default App;
