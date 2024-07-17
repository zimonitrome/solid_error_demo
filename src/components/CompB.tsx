import { createSignal } from 'solid-js';
import { appProp } from '../app';

export const [compBProp, setCompBProp] = createSignal(false);

const CompB = () => {
  return <div
    style={{ width: "100px", height: "100px", "background-color": "skyblue" }}
    onclick={() => {
      if (appProp()) {
        console.log("hello");
      }
    }}
  >
    <h4>Comp B</h4>
  </div>;
};

export default CompB;