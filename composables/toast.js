export const useToast = () => {
    const showError = useState('showErrors', () => false)
    const showWarning = useState('showWarning', () => false)
    const errors = useState('errors', () => [])
    const warnings = useState('warnings', () => [])

    const addError = (error) => {
        errors.value.push(error)
        showError.value = true
    }

    const clearError = () => {
        errors.value = []
        showError.value = false
    }

    const addWarning = (error) => {
        warnings.value.push(error)
        showWarning.value = true
    }

    const clearWarning = () => {
        warnings.value = []
        showWarning.value = false
    }

    return { showError, showWarning, errors, warnings, addError, clearError, addWarning, clearWarning }
}