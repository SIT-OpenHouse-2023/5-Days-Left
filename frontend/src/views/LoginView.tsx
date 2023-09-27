import { Button, Container } from "@mui/material";
import { RefObject, useEffect, useRef, useState } from "react";
import jwt_decode from "jwt-decode";
import GoogleUser from "../types/googleUser";

export default function LoginView() {
    const [user, setUser] = useState<GoogleUser | null>(null);
    const handleCredentialResponse = (response: any) => {
        if (response.credential) {
            const credential = response.credential;
            console.log(jwt_decode(credential));
            setUser(jwt_decode(credential));
        }
    };
    const googleButton: RefObject<HTMLButtonElement> = useRef(null);
    useEffect(() => {
        google.accounts.id.initialize({
            client_id:
                "885320998423-n5n42iplf2lmnt7059v7j588dtu946rg.apps.googleusercontent.com",
            callback: handleCredentialResponse,
        });

        google.accounts.id.renderButton(googleButton.current, {
            theme: "outline",
            size: "large",
            hl: "en",
        });
    }, []);
    return (
        <Container maxWidth="sm" className="min-h-screen bg-blue-100">
            <h1>Login</h1>

            <div className="flex flex-col gap-2 items-center">
                {!user ? (
                    <Button ref={googleButton} />
                ) : (
                    <>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.email}</div>
                            <img src={user.picture} alt="profile" />
                        </div>

                        {/* logout */}
                        <Button
                            onClick={() => {
                                // google.accounts.id.disableAutoSelect();
                                // google.accounts.id.revoke();
                                setUser(null);
                            }}
                        >
                            Logout
                        </Button>
                    </>
                )}
            </div>
        </Container>
    );
}
