import Contact from "./component/contact";
import Footer from "./component/footer";
import LandingPage from "./component/landingpage";
import Navbar from "./component/navbar";
import Residence from "./component/residence";
import Value from "./component/value";

export default function Home() {
  return (
<main>
<div className="overflow-hidden html">
<Navbar></Navbar>
<LandingPage/>
<Residence/>
<Value/>
<Contact/>
<Footer/>
</div>
</main>
  );
}
