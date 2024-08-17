import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../config/firebaseConfig"

export const registerUserWithEmailAndPassword = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
}