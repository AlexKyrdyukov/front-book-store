import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom';
import Header from './ui/containers/Header';
import Footer from './ui/containers/Footer';
import SignUp from './ui/pages/SignUp';
import SignIn from './ui/pages/SignIn';
import Catalog from './ui/pages/Catalog';
import Cart from './ui/pages/Cart';
import Home from './ui/pages/Home';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
