import React, { ReactNode, useState } from "react";
import "./Modal.css";
import NewTabs from '../Tabs/NewTabs';


interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}


export default function Modal(props: ModalType) {
    return (
        <>
            {props.isOpen && (<div className="modal-over">
                <div className="modal-box">
                    <NewTabs />
                    {props.children}
                </div>
            </div>)}
        </>);
}

export function useModal() {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);
    const toggle = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    return {
        isOpen,
        toggle
    }
}
