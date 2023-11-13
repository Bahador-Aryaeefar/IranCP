export const useAuth = () => {
    const router = useRouter()
    const cookie = useCookie('token')
    const toast = useToast()
    const user = useUser()

    const isLogin = () => {
        if (cookie.value != null) {
            return true
        }
        return false
    }

    const login = async (req) => {
        await useFetch('https://api.37pajoohesh.ir/api/login', {
            onRequest({ request, options }) {
                console.log('login')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'POST'
                options.body = req
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.addError("Login: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    cookie.value = response._data.data.token
                    navigateTo('/')
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("Login: " + response._data.data)
            },
            initialCache: false,
        })
    }

    const register = async (req) => {
        await useFetch('https://api.37pajoohesh.ir/api/register', {
            onRequest({ request, options }) {
                console.log('register')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'POST'
                options.body = req
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.addError("Register: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    cookie.value = response._data.token
                    navigateTo('/')
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("Register: " + response._data.data)
            },
            initialCache: false
        })
    }

    const registerTeacher = async (req) => {
        await useFetch('https://api.37pajoohesh.ir/api/registerTeacher', {
            onRequest({ request, options }) {
                console.log('register teacher')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'POST'
                options.body = req
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.addError("RegisterTeacher: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    cookie.value = response._data.token
                    navigateTo('/')
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("RegisterTeacher: " + response._data.data)
            },
            initialCache: false
        })
    }

    const logout = () => {
        console.log('logout')
        cookie.value = null
        user.user.value = null
        navigateTo('/auth')
    }

    return { login, register, registerTeacher, isLogin, logout }
}