
type Input = {
    type: string;
    title: string;
    name: string;
    width: string;
    backgroundColor: string;
    value: string;
    autoComplete: string;
    readonly: boolean;
}

export const Input = (props: Input) => {

    const { type, title, name, width, backgroundColor, value, autoComplete, readonly } = props

    const style = {
        width,
        backgroundColor,
        height: "43px",
        borderRadius: "10px",
        border: "none",
        outline: "none",
        padding: "5px 10px",
    }

    return (
        <>
            <label>
                <span style={{ display: "block" }}>{title}</span>
                <input
                    style={style}
                    type={type}
                    name={name}
                    placeholder={title + 'を入力してください'}
                    defaultValue={value}
                    autoComplete={autoComplete}
                    readOnly={readonly}
                />
            </label>
        </>
    );
}