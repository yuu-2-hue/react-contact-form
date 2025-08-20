
import { forwardRef } from "react";

import { ErrorMessage } from "./ErrorMessage";

type InputProps = {
    type: string;
    title: string;
    width: string;
    backgroundColor: string;
    value?: string;
    autoComplete?: string;
    readonly?: boolean;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({type, title, width, backgroundColor, value, autoComplete, readonly, error, ...rest},ref) => {

        const style = {
            width,
            backgroundColor,
            height: "43px",
            borderRadius: "10px",
            border: "none",
            outline: error ? "2px solid red" : "none",
            padding: "5px 10px",
        }

        return (
            <>
                <label>
                    <span style={{ display: "block" }}>{title}</span>
                    <input
                        ref={ref}
                        style={style}
                        type={type}
                        placeholder={title + 'を入力してください'}
                        defaultValue={value}
                        autoComplete={autoComplete}
                        readOnly={readonly}
                        {...rest}
                    />
                    <ErrorMessage message={error} />
                </label>
            </>
        );
    }
)