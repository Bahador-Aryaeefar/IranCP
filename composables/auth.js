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
        await useFetch(`${useBase().url}/api/login`, {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('login')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'POST'
                options.body = req
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.clearLoad()
                toast.addError("Login: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    if (response._data.code == 303) {
                        toast.addError("Login: " + response._data.data)
                    }
                    else {
                        cookie.value = response._data
                        navigateTo('/')
                    }
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("Login: " + response._data)
            },
            initialCache: false,
            server: false
        })
    }

    const register = async (req) => {
        await useFetch(`${useBase().url}/api/register`, {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('register')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'POST'
                options.body = req
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.clearLoad()
                toast.addError("Register: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
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
        await useFetch(`${useBase().url}/api/registerTeacher`, {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('register teacher')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'POST'
                options.body = req
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.clearLoad()
                toast.addError("Register: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response._data.message)
                if (response.status == 200 || response.status == 201) {
                    toast.addSuccess("ثبت نام با موفقیت انجام شد")
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                
                if (response.status == 422) toast.addError("Register: " + "کد پرسنلی یا کد ملی تکراری است")
                else toast.addError("Register: " + response._data.data)
            },
            initialCache: false,
            server: false,
            key: new Date().getTime().toString()
        })
    }

    const update = async (req) => {
        await useFetch(`${useBase().url}/api/user/update`, {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('register teacher')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'PUT'
                options.body = req
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.clearLoad()
                toast.addError("RegisterTeacher: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    useUser().getUser()
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("RegisterTeacher: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const logout = () => {
        const cookie = useCookie('token')
        console.log('logout')
        cookie.value = null
        user.user.value = null
        navigateTo('/auth')
    }

    return { login, register, registerTeacher, isLogin, logout, update }
}