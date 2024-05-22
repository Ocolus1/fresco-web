import { signOut, getAuth } from "firebase/auth";
import firebase_app from "@/firebase/config";

const auth = getAuth(firebase_app);

const logout = async () => {               
    try {
        await signOut(auth);
        return { result: "Logged out successfully", error: null };
    } catch (error) {
        return { result: null, error: error.message };
    }
}

export default logout;
