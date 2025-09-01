
import { forwardRef } from "react";
import { ErrorMessage } from "./ErrorMessage";

type TextareaProps = {
    title: string;
    width: string;
    height: string;
    backgroundColor: string;
    value?: string;
    readonly: boolean;
    error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({title, width, height, backgroundColor, value, readonly, error, ...rest}, ref) => {

    const style = {
        width,
        height,
        backgroundColor,
        borderRadius: "10px",
        border: "none",
        outline: error ? "2px solid red" : "none",
        padding: "10px",
    }

    return (
        <>
            <p style={{ margin: "0" }}>{title}</p>
            <textarea
                ref={ref}
                style={style}
                value={value}
                readOnly={readonly}
                placeholder={title + "を入力してください"}
                {...rest}
            />
            <ErrorMessage message={error} />
        </>
    );
}
)