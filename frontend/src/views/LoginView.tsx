import { useState } from "react";
import jwt_decode from "jwt-decode";
import GoogleUser from "../types/googleUser";
import Container from "../components/Container";
import { GoogleLogin, googleLogout } from "@react-oauth/google";

export default function LoginView() {
    const [user, setUser] = useState<GoogleUser | null>(null);

    return (
        <Container>
            <h1 className="text-3xl ">Login</h1>
            <p className="text-white">press the button</p>
            <div className="flex flex-col gap-2 items-center">
                {!user ? (
                    <GoogleLogin
                        onSuccess={(credentialResponse) => {
                            localStorage.setItem(
                                "token",
                                credentialResponse.credential!
                            );
                            setUser(jwt_decode(credentialResponse.credential!));
                        }}
                        onError={() => {
                            console.log("Login Failed");
                        }}
                        useOneTap
                        auto_select
                        shape="pill"
                        width={256}
                        locale="en"
                    />
                ) : (
                    <>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.email}</div>
                            <img src={user.picture} alt="profile" />
                        </div>

                        {/* logout */}
                        <button
                            onClick={() => {
                                googleLogout();
                                setUser(null);
                            }}
                        >
                            Logout
                        </button>
                    </>
                )}
            </div>
        </Container>
    );
}
