import { useState } from "react";
const SignupPage = () => {
  const [showpassword, setShowpassword] = useState(false);
  const [formdata, setFormdata] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  return <div>SignupPage</div>;
};

export default SignupPage;
