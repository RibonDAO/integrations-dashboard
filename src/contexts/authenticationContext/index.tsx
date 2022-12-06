import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { getAuth, signOut, User } from "firebase/auth";
import userApi from "services/api/userApi";
import firebaseApp from "services/firebase";
import { useNavigate } from "react-router-dom";
import { TOKEN_KEY } from "utils/constants";

export interface IAuthenticationContext {
  signInWithGoogle: (response: any) => void;
  accessToken: string | null;
  isAuthorized: (email: string) => boolean;
  user: User | undefined;
  setUser: (user: User) => void;
  allowed: boolean;
  logout: () => void;
}

export type Props = {
  children: JSX.Element[] | JSX.Element;
};

export const AuthenticationContext = createContext<IAuthenticationContext>(
  {} as IAuthenticationContext,
);

function AuthenticationProvider({ children }: Props) {
  const firebaseAuth = getAuth(firebaseApp);
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem(TOKEN_KEY),
  );

  function isAuthorized(email: string) {
    if (!email) return false;
    return email.includes("@ribon.io");
  }

  const allowed = useMemo(() => isAuthorized(user?.email ?? ""), [user]);

  async function signInWithGoogle(response: any) {
    try {
      if (isAuthorized(response.profileObj.email ?? "")) {
        const userResponse = await userApi.postUser(
          { idToken: response.tokenId },
          {
            headers: {
              Authorization: `Bearer ${response.accessToken}`,
              "Content-Type": "application/json",
              access_token: `${response.accessToken}`,
            },
          },
        );

        const token = await userResponse.headers["access-token"];

        localStorage.setItem(TOKEN_KEY, token);
        setAccessToken(token);

        navigate("dashboard");
      } else {
        navigate("/", { state: { incorrectDomain: true } });
      }
    } catch (error) {
      navigate("/", { state: { error } });
    }
  }

  function logout() {
    signOut(firebaseAuth)
      .then(() => {
        localStorage.removeItem(TOKEN_KEY);
        setUser(undefined);
      })
      .catch(() => {})
      .finally(() => {
        navigate("/");
      });
  }

  useEffect(() => {
    if (!accessToken) {
      logout();
    }
  }, [accessToken]);

  const authenticationObject: IAuthenticationContext = useMemo(
    () => ({
      user,
      setUser,
      allowed,
      isAuthorized,
      logout,
      accessToken,
      signInWithGoogle,
    }),
    [user, allowed, accessToken],
  );

  return (
    <AuthenticationContext.Provider value={authenticationObject}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationProvider;

export const useAuthentication = () => {
  const context = useContext(AuthenticationContext);

  if (!context) {
    throw new Error(
      "useAuthentication must be used within AuthenticationProvider",
    );
  }

  return context;
};
