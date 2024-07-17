import { Component, JSX } from 'solid-js';
import responsiveContainerStyles from './ResponsiveContainer.module.css';

interface ResponsiveContainerProps {
    children?: JSX.Element;
}

const ResponsiveContainer: Component<ResponsiveContainerProps> = (props) => {
    return (
        <main class={responsiveContainerStyles.responsiveContainer}>
            {props.children}
        </main>
    );
};

export default ResponsiveContainer;
