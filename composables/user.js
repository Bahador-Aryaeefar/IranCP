export const useUser = () => {
    const cookie = useCookie('token')
    const toast = useToast()
    const user = useState('user', () => null)
    const coords = useState('coords', () => null)
    const teacher = useState('teacher', () => null)
    const sidebar = useState('sidebar', () => false)


    const getUser = async (req) => {
        await useFetch('https://api.37pajoohesh.ir/api/getUser', {
            onRequest({ request, options }) {
                toast.addLoad()
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
                toast.clearLoad()
                toast.addError("User: " + error)
                navigateTo("/auth")
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    user.value = response._data.data
                    coords.value = response._data.coordinate
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("User: " + response._data.data)
                const auth = useAuth()
                auth.logout("")
            },
            initialCache: false
        })
    }

    const getTeacher = async (id) => {
        teacher.value = null
        await useFetch(`https://api.37pajoohesh.ir/api/profile/${id}`, {
            onRequest({ request, options }) {
                toast.addLoad()
                console.log('get teacher')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'GET'
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.clearLoad()
                toast.addError("teacher: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                toast.clearLoad()
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    teacher.value =  response._data
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                toast.addError("teacher: " + response._data.data)
            },
            initialCache: false,
            server: false
        })
    }

    return { getUser, user, coords,teacher,getTeacher, sidebar }
}