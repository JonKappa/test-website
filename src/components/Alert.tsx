import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
    return (
        // <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <div className="alert alert-primary alert-dismissible" role="alert">
            {children}
            <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert;