import { createSignal } from 'solid-js';
import { isMobile } from '../app';

export const [navBarOpen, setNavBarOpen] = createSignal(false);

const HamburgerIcon = () => {
  return <div
    onclick={() => {
      const isNavBarOpen = navBarOpen();
      if (isMobile()) {

      }
      setNavBarOpen(!isNavBarOpen);
    }}
  >
    <div>
      <div />
      <div />
      <div />
    </div>
  </div>;
};

export default HamburgerIcon;