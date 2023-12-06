import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../page/Login";
import Main from "../page/Main";

interface PropsType {
  children?: React.ReactNode;
}

export default function BaseRouter({ children }: PropsType) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
