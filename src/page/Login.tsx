import { useEffect, useState } from "react";
import { API_login } from "../api/login/login";
import { ReactComponent as Logo } from "../assets/image/Logo.svg";
import "../assets/scss/login/style.scss";
import Check from "../components/Check";
import useDebounce from "../hook/useDebounce";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const debouncceUsername = useDebounce(username, 500);
  const { isSuccess, isError, isLoading, refetch } =
    API_login(debouncceUsername);

  useEffect(() => {
    if (debouncceUsername) refetch();
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
          style={
            debouncceUsername && isError
              ? { borderColor: "#CC2E2E", color: "#CC2E2E" }
              : {}
          }
          placeholder="유저아이디 입력"
        />
        {debouncceUsername && (isLoading || isError || isSuccess) && (
          <Check isSuccess={isSuccess} isFailed={isError} />
        )}
      </div>
    </div>
  );
}
