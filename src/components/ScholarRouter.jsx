import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavbarHolder from "./NavbarHolder";
import LandingPage from "./pages/LandingPage";

import ContactAdvisors from "./pages/ContactAdvisors";
import ConnectOthers from "./pages/ConnectOthers";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Status from "./pages/Status";
import NoMatch from "./pages/NoMatch";

export default function ScholarRouter(){

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<NavbarHolder />}>
                <Route index element={<LandingPage />} />
                <Route path="contact-advisors" element={<ContactAdvisors />} />
                <Route path="connect-others" element={<ConnectOthers />} />
                <Route path="sign-in" element={<SignIn />} />
                <Route path="sign-up" element={<SignUp />} />
                <Route path="status" element={<Status />} />
                <Route path="*" element={<NoMatch />} />

            </Route>
        </Routes>
    </BrowserRouter>


}