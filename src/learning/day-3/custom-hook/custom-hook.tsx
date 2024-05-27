import { useRef } from "react"

export const useForm = () => {
    const inputNameRef = useRef<HTMLInputElement>(null)

    function handleSubmit(event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        alert(inputNameRef.current?.value)
    }

    return {
        inputNameRef,
        handleSubmit
    }
}