import { useRouter } from "next/router"
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useAuthState } from "react-firebase-hooks/auth";
import { initFirebase } from "../firebase/firebase"
import { getDatabase, ref, set } from "firebase/database";



const MakeProfile = () => {
    initFirebase();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    const signOut = () => {
        auth.signOut();
    }
   
    
 
 
   
    const writeUserData = (userRole) => {
        if (user) {
            let userId = user.uid
            let name = user.displayName
            let email = user.email
            let imageUrl = user.photoURL


            const db = getDatabase();
            set(ref(db, 'users/' + userId), {
                username: name,
                email: email,
                profile_picture: imageUrl,
                user_role: userRole
            });
            if(userRole=="teacher"){
                router.push("/teacher")
            }
            if(userRole=="student"){
                router.push("/student")
            }
        }

    }


    return (
        <div>
            <div className="h-screen   flex" >
                <div className=" w-full flex h-scren">
                    <div className="m-auto ">
                        <div className=" w-full">
                            <button onClick={() => writeUserData("teacher")} className="p-16 bg-white hover:text-white hover:bg-blue-500 text-black border py-2 hover:scale-105 duration-300 w-full rounded-xl mt-5 flex justify-center items-center text-md">
                                Continue as Teacher
                            </button>
                            <button onClick={() => writeUserData("student")} className="p-16 bg-white hover:text-white hover:bg-blue-500  text-black border py-2 hover:scale-105 duration-300 w-full rounded-xl mt-5 flex justify-center items-center text-md">
                                Continue as Student
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

const sendData = () => {
    console.log("sdf")
}

export default MakeProfile;