import "./Button.css";

interface ButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
    styleClass?: string;
    disabled?: boolean; 
}

export const Button = ({ onClick, styleClass = "", disabled = false, children }: ButtonProps) => (
    <button
        disabled={disabled}
        className={`wordladder-button ${styleClass}`}
        onClick={onClick}
    >
        {children}
    </button>
);
