import { ReactComponent as Done } from "../assets/image/check/done.svg";
import { ReactComponent as Failed } from "../assets/image/check/failed.svg";
import { ReactComponent as Ouline } from "../assets/image/check/outline.svg";
import "../assets/scss/component/check/style.scss";

interface PropsType {
  isSuccess: boolean;
  isFailed: boolean;
}

export default function Check({ isSuccess, isFailed }: PropsType) {
  return (
    <div className="check">
      {!isSuccess && !isFailed && (
        <div className="loading">
          <Ouline />
        </div>
      )}
      {isSuccess && <Done />}
      {isFailed && <Failed />}
    </div>
  );
}
