export const useToast = () => {
    const showError = useState('showErrors', () => false)
    const showWarning = useState('showWarning', () => false)
    const showSuccess = useState('showSuccess', () => false)
    const errors = useState('errors', () => [])
    const warnings = useState('warnings', () => [])
    const load = useState('load', () => 0)
    const success = useState('showSuccess', () => [])

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

    const addSuccess = (error) => {
        success.value.push(error)
        showSuccess.value = true
    }

    const clearSuccess = () => {
        success.value = []
        success.value = false
    }

    const addLoad = () => {
        load.value++
    }

    const clearLoad = () => {
        load.value--
    }

    return { load, success, showSuccess, addLoad, clearLoad, addSuccess, clearSuccess, showSuccess, showError, showWarning, errors, warnings, addError, clearError, addWarning, clearWarning }
}