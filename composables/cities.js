export const useCities = () => {
    const cities = useState('cities', () => null)
    const provinces = useState('provinces', () => null)
    const toast = useToast()

    const getCities = async (req) => {
        await useFetch('https://api.37pajoohesh.ir/api/province_cities', {
            onRequest({ request, options }) {
                console.log('get cities')
                options.headers = {
                    "Accept": "application/json"
                }
                options.method = 'GET'
                options.body = req
            },
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                toast.addError("cities: " + error)
            },
            onResponse({ request, response, options }) {
                // Process the response data    return response._data
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    cities.value = response._data.filter(x => x.parent > 0)
                    provinces.value = response._data.filter(x => x.parent == 0)
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                console.log(response._data)
                toast.addError("cities: " + response._data.data)
            },
            initialCache: false
        })
    }

    const searchCity = (id) => {
        return cities?.value?.filter(x => x.id == id)[0]
    }

    const searchProvince = (id) => {
        return provinces?.value?.filter(x => x.id == id)[0]
    }

    return { getCities, cities, provinces, searchCity, searchProvince }
}