export const handleTextFieldChange = (event, setStateFunction) => {
    const {target} = event
    setStateFunction((prevState) => ({
        ...prevState,
        [target.name]: target.value
    }))
}