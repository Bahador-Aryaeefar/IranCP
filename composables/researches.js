export const useUser = () => {
    const cookie = useCookie('token')
    const toast = useToast()
    const researches = useState('researches', () => null)

    const getResearches = async (req) => {
        await useFetch('https://api.37pajoohesh.ir/api/expert/research', {
            onRequest({ request, options }) {
                console.log('researches')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'GET'
                options.body = req
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.addError("Researches: " + error)
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
                toast.addError("Researches: " + response._data.data)
            },
            initialCache: false,
        })
    }

    return { getResearches, researches }
}