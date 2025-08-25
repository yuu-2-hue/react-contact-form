
type ErrorMessageProps = {
    message?: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
    if (!message) return null;

    const style = {
        display: "block",
        color: "red",
        fontSize: "12px",
        marginTop:"4px",
    }

    return (
        <span style={style}>
            {message}
        </span>
    );
};