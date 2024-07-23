// import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Navbar1 from './NavBar1';


function Layout (){
    return (
        <div>
            <Navbar1 />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;