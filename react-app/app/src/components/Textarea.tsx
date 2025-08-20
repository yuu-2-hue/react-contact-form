
type Textarea = {
    title: string;
    name: string;
    width: string;
    height: string;
    backgroundColor: string;
    readonly: boolean;
}

export const Textarea = (props: Textarea) => {

    const { title, name, width, height, backgroundColor, readonly } = props

    const style = {
        width,
        height,
        backgroundColor,
        borderRadius: "10px",
        border: "none",
        outline: "none",
        padding: "10px",
    }

    return (
        <>
            <p style={{ margin: "0" }}>{title}</p>
            <textarea style={style} name={name} readOnly={readonly} placeholder={title + "を入力してください"}></  textarea>
        </>
    );
}