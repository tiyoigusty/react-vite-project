import { useForm } from "./custom-hook";

export function Submit() {
    const {inputNameRef, handleSubmit} = useForm()

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input ref={inputNameRef} />
            <button type="submit">Submit</button>
        </form>
    )
}