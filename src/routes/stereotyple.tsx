import ResponsiveContainer from "~/components/utils/ResponsiveContainer";
import "@thisbeyond/solid-select/style.css";

export interface GameCountry {
  id: string;
  name: string;
  selected: boolean;
}

const Stereotyple = () => {

  return <ResponsiveContainer>
    <div style={{ "display": "flex", "align-items": "center", "flex-direction": "column" }}>
      <h1>Page2</h1>
      <p>This is page 2.</p>
    </div>
  </ResponsiveContainer>
};

export default Stereotyple;