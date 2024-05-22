import firebase_app from "@/firebase/config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(firebase_app);


export default async function signUpWithGoogle() {
    const provider = new GoogleAuthProvider();
    let result = null,
        error = null;
    try {
        result = await signInWithPopup(auth, provider);
    } catch (e) {
        error = e;
    }

    return { result, error };
}