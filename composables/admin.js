export const useAdmin = () => {
    const cookie = useCookie('token')
    const toast = useToast()
    const users = useState('adminUsers', () => null)
    const user = useState('adminUser', () => null)
    const researches = useState('adminResearches', () => null)
    const coords = useState('adminCoords', () => null)
    const research = useState('adminResearch', () => null)
    const questions = useState('adminQuetions', () => null)


    const getUsers = async (req) => {
        users.value = null
        await useFetch('https://api.37pajoohesh.ir/api/admin/user', {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('get users')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'GET'
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.clearLoad()
                toast.addError("Users: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    users.value = response._data
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.clearLoad()
                toast.addError("Users: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const getUser = async (id) => {
        user.value = null
        await useFetch(`https://api.37pajoohesh.ir/api/admin/user/${id}`, {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('get user')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'GET'
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.clearLoad()
                toast.addError("user: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    user.value = response._data
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.clearLoad()
                toast.addError("user: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const changeUser = async (req, id) => {
        await useFetch(`https://api.37pajoohesh.ir/api/admin/user/${id}`, {
            onRequest({ request, options }) {
                toast.addLoad()
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
                toast.clearLoad()
                toast.addError("change User: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    getUsers()
                    getUser(id)
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.clearLoad()
                toast.addError("change User: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const getResearches = async (req) => {
        researches.value = null
        await useFetch('https://api.37pajoohesh.ir/api/admin/research', {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('get researches')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'GET'
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.clearLoad()
                toast.addError("researches: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    researches.value = response._data
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.clearLoad()
                toast.addError("researches: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const getResearch = async (id) => {
        research.value = null
        await useFetch(`https://api.37pajoohesh.ir/api/admin/research/${id}`, {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('get research')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'GET'
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.clearLoad()
                toast.addError("research: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    research.value = response._data
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.clearLoad()
                toast.addError("research: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const changeResearch = async (req, id) => {
        await useFetch(`https://api.37pajoohesh.ir/api/admin/research/${id}`, {
            onRequest({ request, options }) {
                toast.addLoad()
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
                toast.clearLoad()
                toast.addError("Change Research: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    getResearches()
                    getResearch(id)
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.clearLoad()
                toast.addError("Change Research: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const getCoords = async (req) => {
        coords.value = null
        await useFetch('https://api.37pajoohesh.ir/api/admin/coordinate', {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('get coords')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'GET'
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.clearLoad()
                toast.addError("coords: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    coords.value = response._data
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.clearLoad()
                toast.addError("coords: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const addCoords = async (req) => {
        await useFetch('https://api.37pajoohesh.ir/api/admin/coordinate', {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('add coords')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'POST'
                options.body = req
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.clearLoad()
                toast.addError("coords: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    getCoords()
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.clearLoad()
                toast.addError("coords: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const changeCoords = async (req, id) => {
        await useFetch(`https://api.37pajoohesh.ir/api/admin/coordinate/${id}`, {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('change coords')
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
                toast.addError("coords: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    getCoords()
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.clearLoad()
                toast.addError("coords: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const getQuestions = async (req) => {
        questions.value = null
        await useFetch('https://api.37pajoohesh.ir/api/admin/question', {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('get questions')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'GET'
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.clearLoad()
                toast.addError("questions: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    questions.value = response._data
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.clearLoad()
                toast.addError("questions: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const addQuestions = async (req) => {
        await useFetch('https://api.37pajoohesh.ir/api/admin/question', {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('add questions')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'POST'
                options.body = req
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.clearLoad()
                toast.addError("questions: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    getQuestions()
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.clearLoad()
                toast.addError("questions: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const changeQuestions = async (req, id) => {
        await useFetch(`https://api.37pajoohesh.ir/api/admin/question/${id}`, {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('change questions')
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
                toast.addError("questions: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    getQuestions()
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.clearLoad()
                toast.addError("questions: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const deleteQuestions = async (id) => {
        await useFetch(`https://api.37pajoohesh.ir/api/admin/question/${id}`, {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('delete questions')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'DELETE'
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.clearLoad()
                toast.addError("questions: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    getQuestions()
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.clearLoad()
                toast.addError("questions: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    return { questions, deleteQuestions, getQuestions, addQuestions, changeQuestions, addCoords, coords, getCoords, users, getUsers, changeUser, user, getUser, research, researches, getResearches, changeResearch, getResearch, changeCoords }
}