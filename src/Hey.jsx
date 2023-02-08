import { useRecoilState } from "recoil";
import { hi } from "./App";

export default function Hey() {
  const [forme, setForme] = useRecoilState(hi);
  return (
    <>
      <p>{forme}</p>
    </>
  );
}
