// import '../styles/globals.css';
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/Loading";
// import { auth, db } from "../firebase";
import Login from '../pages/login';

function MyApp({ Component, pageProps }) {
  // const [user] = useAuthState(auth);

  // if (!user) return <Login />
  return <Loading />
  return <Component {...pageProps} />
}

export default MyApp
