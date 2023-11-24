export const useExpert = () => {
    const cookie = useCookie('token')
    const toast = useToast()
    const users = useState('users', () => null)
    const user = useState('user', () => null)
    const researches = useState('researches', () => null)
    const research = useState('research', () => null)


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
            },
            initialCache: false,
            server: false
        })
    }

    const getUser = async (id) => {
        user.value = null
        await useFetch(`https://api.37pajoohesh.ir/api/expert/user/${id}`, {
            onRequest({ request, options }) {
                console.log('get user')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'GET'
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.addError("user: " + error)
                navigateTo("/auth")
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    user.value = response._data
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("user: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const changeUser = async (req, id) => {
        await useFetch(`https://api.37pajoohesh.ir/api/expert/user/${id}`, {
            onRequest({ request, options }) {
                console.log('change users')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'PUT'
                options.body = req
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.addError("change User: " + error)
                navigateTo("/auth")
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    getUsers()
                    getUser(id)
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("change User: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const getResearches = async (req) => {
        researches.value = null
        await useFetch('https://api.37pajoohesh.ir/api/expert/research', {
            onRequest({ request, options }) {
                console.log('get researches')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'GET'
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.addError("researches: " + error)
                navigateTo("/auth")
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    researches.value = response._data
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("researches: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const getResearch = async (id) => {
        research.value = null
        await useFetch(`https://api.37pajoohesh.ir/api/expert/research/${id}`, {
            onRequest({ request, options }) {
                console.log('get research')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'GET'
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.addError("research: " + error)
                navigateTo("/auth")
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    research.value = response._data
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("research: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const changeResearch = async (req, id) => {
        await useFetch(`https://api.37pajoohesh.ir/api/expert/research/${id}`, {
            onRequest({ request, options }) {
                console.log('change research')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'PUT'
                options.body = req
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.addError("Change Research: " + error)
                navigateTo("/auth")
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    getResearches()
                    getResearch(id)
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("Change Research: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }


    return { users, getUsers, changeUser, user, getUser, research, researches, getResearches, changeResearch, getResearch }
}