import "@thisbeyond/solid-select/style.css";

export interface GameCountry {
  id: string;
  name: string;
  selected: boolean;
}

const Otherpage = () => {
  return <div style={{ "display": "flex", "align-items": "center", "flex-direction": "column" }}>
      <h1>Page2</h1>
      <p>This is page 2.</p>
    </div>
};

export default Otherpage;