import { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../assets/image/Logo.svg";
import "../assets/scss/login/style.scss";
import Check from "../components/Check";
import useDebounce from "../hook/useDebounce";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const debouncceUsername = useDebounce(username, 200);
  useEffect(() => {
    console.log(debouncceUsername);
  }, [debouncceUsername]);
  return (
    <div className="warrpper">
      <Logo />
      <div className="warrpper__input">
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          style={true && { borderColor: "#CC2E2E", color: "#CC2E2E" }}
          placeholder="유저아이디 입력"
        />
        <Check isSuccess={!false} isFailed={false} />
      </div>
    </div>
  );
}
