import { useEffect, useState } from "react";

const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);

  const tokenFromStorage =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  useEffect(() => {
    if (tokenFromStorage) {
      setToken(tokenFromStorage);
    }
  }, [tokenFromStorage]);

  return token;
};

export default useAuth;
