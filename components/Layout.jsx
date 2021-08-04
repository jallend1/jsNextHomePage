import NavBar from '../components/NavBar';

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
