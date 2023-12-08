import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigator = useNavigate();

  return (
    <div>
      <h2>HOME</h2>
      <button
        onClick={() => {
          navigator("/login");
        }}
      >
        login
      </button>
    </div>
  );
}
