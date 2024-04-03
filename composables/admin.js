export const useAdmin = () => {
    const cookie = useCookie('token')
    const toast = useToast()
    const users = useState('adminUsers', () => null)
    const user = useState('adminUser', () => null)
    const researches = useState('adminResearches', () => null)
    const coords = useState('adminCoords', () => null)
    const research = useState('adminResearch', () => null)
    const referee = useState('adminReferee', () => null)
    const questions = useState('adminQuetions', () => null)


    const getUsers = async (req) => {
        users.value = null
        await useFetch('https://37pajoohesh.ir/api/admin/user', {
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
                toast.addError("Users: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const getUser = async (id) => {
        user.value = null
        await useFetch(`https://37pajoohesh.ir/api/admin/user/${id}`, {
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
                toast.addError("user: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const changeUser = async (req, id) => {
        await useFetch(`https://37pajoohesh.ir/api/admin/user/${id}`, {
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
                toast.addError("change User: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const deleteUser = async (id) => {
        await useFetch(`https://37pajoohesh.ir/api/admin/user/${id}`, {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('delete users')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'DELETE'
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.clearLoad()
                toast.addError("delete User: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    getUsers()
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("delete User: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const getResearches = async (req) => {
        researches.value = null
        await useFetch('https://37pajoohesh.ir/api/admin/research', {
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
                toast.addError("researches: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const getResearch = async (id) => {
        research.value = null
        referee.value = null
        await useFetch(`https://37pajoohesh.ir/api/admin/research/${id}`, {
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
                toast.addError("research: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const levelUp =  async (req,id) => {
        await useFetch(`https://37pajoohesh.ir/api/levelup/${id}`, {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('levelUp')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'PATCH'
                options.body = req
                // options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.clearLoad()
                toast.addError("levelUp: " + error)
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
                toast.addError("levelUp: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const changeResearch = async (req, id) => {
        await useFetch(`https://37pajoohesh.ir/api/admin/researchUpdate/${id}`, {
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
                toast.addError("Change Research: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const deleteResearch = async (id) => {
        await useFetch(`https://37pajoohesh.ir/api/admin/research/${id}`, {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('delete research')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'DELETE'
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.clearLoad()
                toast.addError("delete Research: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    getResearches()
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("delete Research: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const getCoords = async (req) => {
        coords.value = null
        await useFetch('https://37pajoohesh.ir/api/admin/coordinate', {
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
                toast.addError("coords: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const addCoords = async (req) => {
        await useFetch('https://37pajoohesh.ir/api/admin/coordinate', {
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
                toast.addError("coords: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const changeCoords = async (req, id) => {
        await useFetch(`https://37pajoohesh.ir/api/admin/coordinate/${id}`, {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('change coord')
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
                toast.addError("coords: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const deleteCoords = async (id) => {
        await useFetch(`https://37pajoohesh.ir/api/admin/coordinate/${id}`, {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('delete coord')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'DELETE'
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
                toast.addError("coords: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const getQuestions = async (req) => {
        questions.value = null
        await useFetch('https://37pajoohesh.ir/api/admin/question', {
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
                toast.addError("questions: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const addQuestions = async (req) => {
        await useFetch('https://37pajoohesh.ir/api/admin/question', {
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
                toast.addError("questions: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const changeQuestions = async (req, id) => {
        await useFetch(`https://37pajoohesh.ir/api/admin/question/${id}`, {
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
                toast.addError("questions: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const deleteQuestions = async (id) => {
        await useFetch(`https://37pajoohesh.ir/api/admin/question/${id}`, {
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
                toast.addError("questions: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const addReferee = async (req, id) => {
        await useFetch(`https://37pajoohesh.ir/api/admin/research/${id}`, {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('add referee')
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
                toast.addError("referee: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    getResearch(id)
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors
                toast.addError("referee: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const getReferee = async (id, refid) => {
        referee.value = null
        await useFetch(`https://37pajoohesh.ir/api/admin/research/${id}/referee/${refid}`, {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('get referee')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'GET'
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.clearLoad()
                toast.addError("referee: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    referee.value = response._data
                    getQuestions()
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("referee: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const deleteReferee = async (req, id) => {
        await useFetch(`https://37pajoohesh.ir/api/admin/research/delete/referee/${id}`, {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('delete referee')
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
                toast.addError("referee: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    getResearch(id)
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("referee: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const setOpinion = async (req, id, id2,id3) => {
        questions.value = null
        await useFetch(`https://37pajoohesh.ir/api/admin/research/${id}/opinion`, {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('set opinions')
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
                toast.addError("opinions: " + error)
                navigateTo("/auth")
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    getReferee(id2,id3)
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("opinions: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    return { setOpinion,deleteUser, deleteResearch, deleteReferee, addReferee,levelUp, questions, deleteQuestions, deleteCoords, getQuestions, addQuestions, changeQuestions, addCoords, coords, getCoords, users, getUsers, changeUser, user, getUser, research, researches, getResearches, changeResearch, getResearch, changeCoords, referee, getReferee }
}