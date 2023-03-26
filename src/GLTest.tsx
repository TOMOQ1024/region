import { Surface } from "gl-react-dom"; // for React DOM
import HelloBlue from "./HelloBlue";

export default function GLTest(){
  return (
    <div>
      <Surface width={800} height={800}>
        <HelloBlue blue={0.5} />
      </Surface>
    </div>
  );
}