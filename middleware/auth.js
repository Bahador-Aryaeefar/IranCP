export default defineNuxtRouteMiddleware(async(to, from) => {
      const login = useAuth()
      const user = useUser()
      if (login.isLogin()) {
            if(user.user.value) return
            else return await user.getUser()
      }
      else return navigateTo('/auth')
})
