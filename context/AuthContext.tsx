import { createContext, useReducer, useEffect, ReactNode, Dispatch } from 'react'
import { projectAuth } from '../firebase/config'
import { User, Auth } from 'firebase/auth'

interface AuthState {
    user: User | null
    authIsReady: boolean
}

type AuthAction =
    | { type: 'LOGIN'; payload: User }
    | { type: 'LOGOUT' }
    | { type: 'AUTH_IS_READY'; payload: User | null }

interface AuthContextType extends AuthState {
    dispatch: Dispatch<AuthAction>
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, user: action.payload }
      case 'LOGOUT':
        return { ...state, user: null }
      case 'AUTH_IS_READY':
        return { user: action.payload, authIsReady: true }
      default:
        return state
    }
}

interface AuthContextProviderProps {
    children: ReactNode
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, {
      user: null,
      authIsReady: false,
})

  useEffect(() => {
    // Set auth as ready immediately to prevent blocking
    dispatch({ type: 'AUTH_IS_READY', payload: null })
    
    // Try to set up auth listener, but don't block if it fails
    try {
      const auth = projectAuth as Auth | null
      if (auth && typeof auth.onAuthStateChanged === 'function') {
        const unsub = auth.onAuthStateChanged((user: User | null) => {
          dispatch({ type: 'AUTH_IS_READY', payload: user })
        })
        return () => unsub()
      }
    } catch (error) {
      console.warn('Auth setup error:', error)
      // Auth is already marked as ready, so app can continue
    }
  }, [])

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}

