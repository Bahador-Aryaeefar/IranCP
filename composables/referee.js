export const useReferee = () => {
    const cookie = useCookie('token')
    const toast = useToast()
    const researches = useState('refereeResearches', () => null)
    const research = useState('refereeResearch', () => null)
    const questions = useState('refereeQuestions', () => null)

    const getResearches = async (req) => {
        researches.value = null
        await useFetch('https://api.37pajoohesh.ir/api/referee/research', {
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
                navigateTo("/auth")
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
        questions.value = null
        await useFetch(`https://api.37pajoohesh.ir/api/referee/research/${id}`, {
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
                navigateTo("/auth")
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    research.value = response._data
                    getQuestions()
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

    const getQuestions = async (id) => {
        questions.value = null
        await useFetch(`https://api.37pajoohesh.ir/api/referee/questions`, {
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
                navigateTo("/auth")
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

    const setScore = async (req, id, id2) => {
        await useFetch(`https://api.37pajoohesh.ir/api/referee/research/score/${id}`, {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('set score')
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
                toast.addError("score: " + error)
                navigateTo("/auth")
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    getResearch(id2)
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("score: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    const setOpinion = async (req, id, id2) => {
        questions.value = null
        await useFetch(`https://api.37pajoohesh.ir/api/referee/research/${id}/opinion`, {
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
                    getResearch(id2)
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

    return { research, researches, getResearches, getResearch, questions, getQuestions, setScore, setOpinion }
}