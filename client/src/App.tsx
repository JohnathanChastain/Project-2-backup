import { Outlet } from 'react-router-dom';
import Header from '../src/components/header/index.tsx';
import Footer from '../src/components/footer/index.tsx';
function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default App;