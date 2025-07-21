import { auth } from '@/lib/firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

export async function loginUser() {
  const googleProvider = new GoogleAuthProvider()
  const res = await signInWithPopup(auth, googleProvider)
  return res
}

export async function logoutUser() {
  await auth.signOut()
}
