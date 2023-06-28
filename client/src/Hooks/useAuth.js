import React, { useEffect, useState } from "react";
import useServer from "./useServer";

const useAuth = () => {
  const [user, setUser] = useState("");

  const { getToken } = useServer();

  useEffect(() => {
    getToken().then((res) => {
      if (res.message == "jwt malformed") {
        setUser("");
      } else {
        setUser(res);
      }
    });
  }, []);

  return [user];
};

export default useAuth;
