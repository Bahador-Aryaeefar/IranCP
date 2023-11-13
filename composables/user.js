export const useUser = () => {
    const cookie = useCookie('token')
    const toast = useToast()
    const user = useState('user', () => null)

    const getUser = async (req) => {
        await useFetch('https://api.37pajoohesh.ir/api/getUser', {
            onRequest({ request, options }) {
                console.log('getUser')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'GET'
                options.body = req
                options.headers.Authorization = 'Bearer ' + cookie.value
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.addError("User: " + error)
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
                toast.addError("User: " + response._data.data)
            },
            initialCache: false,
        })
    }

    return { getUser, user }
}