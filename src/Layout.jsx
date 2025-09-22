import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

export default function Layout(){
    return (
        <div className="p-4" style={{ backgroundColor: '#2c786c' }}>
            <NavBar />
            <main className="p-4" style={{ backgroundColor: '#2c786c' }}>
                <Outlet />
            </main>
        </div>
    )
}