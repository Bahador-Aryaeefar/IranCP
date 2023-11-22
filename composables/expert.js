export const useExpert = () => {
    const cookie = useCookie('token')
    const toast = useToast()
    const users = useState('users', () => null)


    const getUsers = async (req) => {
        users.value = null
        await useFetch('https://api.37pajoohesh.ir/api/expert/users', {
            onRequest({ request, options }) {
                console.log('get users')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'GET'
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.addError("Users: " + error)
                navigateTo("/auth")
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    users.value = response._data
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("Users: " + response._data.data)
                const auth = useAuth()
                auth.logout()
            },
            initialCache: false,
            server: false
        })
    }

    const changeUser = async (req, id) => {
        await useFetch(`https://api.37pajoohesh.ir/api/expert/user/${id}`, {
            onRequest({ request, options }) {
                console.log('get users')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'PUT'
                options.body = req
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.addError("Users: " + error)
                navigateTo("/auth")
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    getUsers()
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("Users: " + response._data.data)
                const auth = useAuth()
                auth.logout()
            },
            initialCache: false,
            server: false
        })
    }

    return { users, getUsers, changeUser }
}