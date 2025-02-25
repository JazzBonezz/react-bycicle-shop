import {Outlet} from "react-router";
import Navbar from "../../../widgets/Navbar/ui/Navbar";
import {useSelector} from "react-redux";
import {AuthState} from "@/features/auth/model/types";
import {useEffect} from "react";

const MainPage = () => {

    const isAuthenticated = useSelector((state: AuthState) => state.auth.isAuthenticated);

    useEffect(() => {
        console.log("isAuthenticated:", isAuthenticated);
    }, [isAuthenticated])

    return (
        <div>
            <Navbar/>
           <Outlet/>

        </div>
    );
};

export default MainPage;