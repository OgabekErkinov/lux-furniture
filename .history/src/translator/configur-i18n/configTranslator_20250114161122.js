import i18n  from 'i18next'
import { initReactI18next } from 'react-i18next'



i18n.use(initReactI18next).init({
    resources : {
        en : {translation : translation},
        ru : {translation : translationRu},
        uz : {translation : translationUz}
    },

    lng : 'en',
    fallbackLng : 'en',
    interpolation : {
        escapeValue : false
    },
    returnObjects : true

})

export default i18n