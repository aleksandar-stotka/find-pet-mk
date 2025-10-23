// composables/useSignup.js
import { ref } from 'vue'
import { projectAuth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

const error = ref(null)

const signup = async (email, password, displayName) => {
  error.value = null

  try {
    // create user with email & password
    const res = await createUserWithEmailAndPassword(projectAuth, email, password)

    if (!res) {
      throw new Error('Could not complete signup')
    }

    // optional: set the user's display name
    await updateProfile(res.user, { displayName })

    error.value = null
    return res.user
  } catch (err) {
    console.error('Signup error:', err.code, err.message)

    if (err.code === 'auth/email-already-in-use') {
      error.value = 'Email is already registered'
    } else if (err.code === 'auth/weak-password') {
      error.value = 'Password should be at least 6 characters'
    } else {
      error.value = err.message
    }
  }
}

const useSignup = () => {
  return { error, signup }
}

export default useSignup
