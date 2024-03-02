import { isAuthenticated } from "~/data/auth";
export const redirecMixin = {
    filters: {

    },
    computed: {

    },
    methods: {
        redirect(redirect:any) {
            const isAuth = redirect.meta != undefined ? redirect.meta.auth : false;

            console.log('redirect', redirect, isAuth, isAuthenticated())
            if (isAuth) {
                if (!isAuthenticated()) {
                    this.$navigator.navigate('/auth/login', { props: { prox_ruta: redirect.route } })
                    return
                }
            }
            // console.log('this.$navigateTo',this.$navigateTo(codeValidation))
            this.$navigator.navigate(redirect.route, { props: redirect.meta != undefined ? { meta: redirect.meta } : {} })
        }
    }
};