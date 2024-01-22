import { Button } from "./Button";

import "./Modal.css";

interface ModalProps {
    isOpen: boolean;
    onClose?: () => void;
    children?: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => (
    <div className={`modal ${isOpen ? "open" : ""}`}>
        <div className="modal-content">
            <Button onClick={onClose} styleClass="modal-close-button">x</Button>
            {children}
        </div>
    </div>
);
