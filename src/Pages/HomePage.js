import { useEffect, useState } from "react";
import { useAuth } from "../Hooks/Auth";

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

const HomePage = () => {
  const [message, setMessage] = useState("");
  const auth = useAuth();

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch(`${urlEndpoint}/users/message`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          [process.env.REACT_APP_TOKEN_HEADER_KEY]: auth.userToken,
        },
      });
      const responseJSON = await response.json();

      setMessage(responseJSON.user);
    };

    if (auth.userToken !== null) {
      fetchMessage();
    }
    if (auth.userToken === null) {
      setMessage("");
    }
  }, [auth.userToken, message]);

  return (
    <div>
      <h1>Fullstack Auth Home Page</h1>
    
      {message && <h3>I am a {message}</h3>}
    </div>
  );
};

export default HomePage;
