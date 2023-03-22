import { Outlet } from "react-router";
import { Head } from "./navbar";
import { Footer } from "./footer"
import { Home } from "../pages/Home";
export function Template() {
    return (<>
        <Head></Head>
        <Outlet></Outlet>
        <Footer></Footer>
    </>);
}