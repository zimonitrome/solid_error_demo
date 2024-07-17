import { setCompBProp } from "./CompB";

export const compAFunc = () => {
  setCompBProp(false);
}

export const CompA = () => <div style={{ width: "100px", height: "100px", "background-color": "lightgreen" }}>
  <h4>Comp A</h4>
</div>;