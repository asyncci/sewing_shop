import { useOutletContext } from "@remix-run/react";

export default function Button({ text }: any) {
    return <div id='button-wrapper'>
        <button id="button">{text}</button>
    </div>;
};