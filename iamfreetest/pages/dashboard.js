import { useRouter } from "next/router"
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useAuthState } from "react-firebase-hooks/auth";
import {initFirebase } from "../firebase/firebase"
const dashboard = () => {
    initFirebase();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const router = useRouter();
    if (!user) {
        return (<div>
            no user
        </div>)
    }
    return (
        <div>
            Enter
        </div>
    );
}

export default dashboard;