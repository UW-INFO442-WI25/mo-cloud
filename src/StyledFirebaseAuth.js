import { useEffect, useRef } from "react"
import { auth } from "./firebase";
import * as firebaseui from 'firebaseui';
import "firebaseui/dist/firebaseui.css";
import { GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";

const StyledFirebaseAuth = () => {
  const uiRef = useRef(null);

  useEffect(() => {
    if (!uiRef.current) return;

    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

    ui.start(uiRef.current, {
      signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
        { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
      ],
      signInFlow: "popup",
      credentialHelper: "none",
      callbacks: {
        signInSuccessWithAuthResult: () => false, // Prevent redirect
      },
    });

    return () => {
      ui.reset();
    };
  }, []);

  return <div ref={uiRef} />;
};

export default StyledFirebaseAuth;