import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId="762931261996-vlgs487mb35vkmq6bu5joom5bg5tjbc7.apps.googleusercontent.com">
      <GoogleLogin
        buttonText="Login"
        onSuccess={(response) => {
          fetch("http://localhost:3000/authentication/google", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token: response.credential,
            }),
          })
            .then((response) => response.json())
            .then((data) => console.log(data));
        }}
      />
    </GoogleOAuthProvider>
  );
}

export default App;
