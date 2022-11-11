import { initFirebase } from "../firebase/firebase"
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/router'
import GoogleButton from "../components/googleButton"

const studentSidebar = () => {


    initFirebase();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const router = useRouter()
    const signOut = async () => {
        auth.signOut();
        router.push("/")
    }
    return (
        <div>
            <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
                <div class="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
                    <div class="flex items-center justify-center h-14 border-b">
                        <div>iamfree</div>
                    </div>
                    <div class="overflow-y-auto overflow-x-hidden flex-grow">
                        <ul class="flex flex-col py-4 space-y-1">
                            <li class="px-5">
                                
                            </li>
                            <li>
                                <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                    <span class="inline-flex justify-center items-center ml-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                        </svg>

                                    </span>
                                    <span class="ml-2 text-sm tracking-wide truncate">Susbcriptions</span>
                                </a>
                            </li>
                           
                            <li>
                                <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                    <span class="inline-flex justify-center items-center ml-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                    </span>
                                    <span class="ml-2 text-sm tracking-wide truncate">Requests</span>
                                    {/* <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span> */}
                                </a>
                            </li>


                            <li>
                                <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                    <span class="inline-flex justify-center items-center ml-4">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                    </span>
                                    <span class="ml-2 text-sm tracking-wide truncate">Notification</span>
                                </a>
                            </li>

                            <li onClick={signOut} >
                                <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                    <span class="inline-flex justify-center items-center ml-4">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                    </span>
                                    <span class="ml-2 text-sm tracking-wide truncate">Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default studentSidebar;