import { Routes, Route } from "react-router-dom";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
    return (
        <Routes>
            <AuthenticationContainer>
                <Route index element={<SignInForm />} />
                <Route path=":signup" element={<SignUpForm />} />
            </AuthenticationContainer>
        </Routes>
    );
};

export default Authentication;
