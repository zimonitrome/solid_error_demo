import { Map } from '../components/Map';
import { UserInterfaceOverlay } from '../components/UserInterfaceOverlay';

export default () => {
    return <main style={"flex-grow: 1; height: 100%;"}>
        <Map />
        <UserInterfaceOverlay />
    </main>;
};
