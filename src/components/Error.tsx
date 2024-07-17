import { Show } from 'solid-js';

export const Error = (props: {headless?: boolean}) => {
  return <div>
    <div>
      <Show when={!props.headless}>
        <h1>Page cannot load</h1>
      </Show>
      <p>The requested resource is unavailable.</p>
    </div>
  </div>;
};