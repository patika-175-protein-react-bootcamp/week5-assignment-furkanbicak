import * as Yup from 'yup'

export const LoginSchema = Yup.object().shape({
    name: Yup
            .string(),
    surname: Yup
            .string(),
    userName: Yup
            .string()
            .required('Kullanıcı adı zorunlu'),    
    email: Yup
            .string()
            .email('Lütfen geçerli bir e posta adresi girniz.')
            .required('Eposta alanı zorunludur.'),
    password: Yup
            .string()
            .typeError('Her karakteri kullanamazsın.')
            .min(8, '8 karakterden kısa bir şifre olamaz.')
            .max(32,'32 karakterden fazla bir şifre olamaz.')
            .required('Şifre alanı zorunludur.')    
});
