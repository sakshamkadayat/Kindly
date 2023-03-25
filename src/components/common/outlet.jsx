import { Outlet } from "react-router";
import { Head } from "./navbar";
import { Footer } from "./footer"
export function Template() {
    return (<>
        <Head></Head>
        <Outlet></Outlet>
        <Footer></Footer>
    </>);
}