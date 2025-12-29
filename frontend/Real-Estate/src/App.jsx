import react from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';

const App=()=>{
  return(
    <AuthProvider>
      <div className="w-full overflow-hidden">
         <ToastContainer position="top-right" autoClose={3000} />
         <Header/>
         <About/>
         <Projects/>
         <Testimonials/>
         <Contact/>
         <Footer/>
      </div>
    </AuthProvider>
  )
}
export default App;

