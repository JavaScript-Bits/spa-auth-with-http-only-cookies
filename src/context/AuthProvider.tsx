import { createContext, useState } from "react";

interface AuthContextType {
  user: any;
  login: (user: string, callback: VoidFunction) => void;
  logOut: (callback: VoidFunction) => void;
}

export let AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = useState<any>(null);

  let login = (newUser: string, callback: VoidFunction) => {
    setUser(newUser);
    callback();
  };

  let logOut = (callback: VoidFunction) => {
    setUser(null);
    callback();
  };

  let value = { user, login, logOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
