import { useEffect, useState } from "react";

const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate(); 

  async function Login() {
    try {
      let item = { "email": email, "password": password, "appType": "ott" };
      const Header = {
        'Content-Type': "application/json",
        projectID: "paln91dx5ibq",
        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NGJkYTI2ZTkxYjdmMjA4NTYwMTExZCIsImlhdCI6MTY5OTQ2OTg2MiwiZXhwIjoxNzMxMDA1ODYyfQ.fi3DfnGc4NJP5v9mgPIc11CkIAUaNiMeOnQbjDQVoTo"
      };
      let getData = await fetch(`${process.env.REACT_APP_LOGIN_URL}`, {
        method: "POST",
        headers: Header,
        body: JSON.stringify(item),
      });

      let response = await getData.json();
      console.log(response);
      if (response.status == "success") {
        localStorage.setItem("user-info", JSON.stringify(response));
        alert("You are Logging in Successfully");
        setEmail("");
        setPassword("");
        navigate("/");
      } else {
        alert(response.message);
      }
    } catch (e) {
      console.log(e);
    }
  }