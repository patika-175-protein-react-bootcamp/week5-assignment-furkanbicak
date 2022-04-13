import React from 'react';
import './App.css';
import { Formik } from 'formik';
import * as Yup from 'yup'
import MoonIcon from './constans/MoonIcon.png'
import Logo from './constans/logo.svg'

function App() {
    const LoginSchema = Yup.object().shape({
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
            .min(8, '8 karakterden kısa olamaz.')
            .max(32,'32 karakterden fazla olamaz.')
            .required('Şifre alanı zorunludur.')    
    });


  return (
    <div className="formContainer">
    <div className="form_icon">
        <img src={MoonIcon} alt=""/>
    </div>
    
    <div className="patika">

        <div className="patika_logo">
            <img  src={Logo} alt=""/>
        </div>
       
        <h3 className="patika_title">
            <strong>YAZILIM PATİKALARI</strong>
        </h3>
       <div className="patika_lorem">
            <p>Bootcamp'ler teknoloji kariyerine girmek isteyenler için yeni bir eğitim modelidir. Ekibini büyütmek isteyen şirketler bir bootcamp'lere sponsor olurlar. Teknik beceriler kazanmaya başlamış ancak işe girmeye hazır olmayan kişiler bootcamp'lere başvururlar. Seçilen adaylar 4-8 haftalık ücretsiz ve yoğun eğitime kabul alırlar. Bootcamp'lerde başarılı olan öğrenciler sponsor şirkette ya da sektörde başka şirketlere işe yerleşirler.</p>
       </div>
       <div className="boxes">
            <div className="boxOne">

            </div>
            <div className="boxTwo">

            </div>
       </div>
     
    </div>

    <div className="form">
        <div className="form_titles">
            <h3 className="title">
                <strong>Kayıt</strong>
            </h3>
        </div>
         
        <Formik
        initialValues={{
            name: '',
            surname: '',
            email: '',
            userName: '',
            password: '',
        }}
        validationSchema={LoginSchema}

        onSubmit={(values) => {
            console.log(values)    
        }}
        >
            {
                ({ values, handleChange, handleSubmit, errors, touched }) =>

            <form>
            <div className="form_row">
                <div className="formGroup row">
                    <div className="formGroup_title">
                         <label className="required">İSİM</label>
                    </div>
                     <input 
                        className="form_input"
                        type="text" 
                        name="name"
                        placeholder="İsmini gir"
                        value={values.name}
                        onChange={handleChange}
                     />
                 </div>
                 <div className="formGroup row">
                   <div className="formGroup_title">
                     <label className="required">SOYİSİM</label>
                   </div>
                     <input
                        className="form_input"
                        type="text" 
                        name="surname"
                        placeholder="Soyismini gir"
                        value={values.surname}
                        onChange={handleChange}

                     />
                 </div>
            </div>
           

            <div className="formGroup">
                <div className="formGroup_title">
                    <label className="required">E-POSTA <span className='requried-color'> * </span></label>
                </div>
                <input 
                    className="form_input"
                    type="text" 
                    name="email"
                    placeholder="E-posta adresini gir"
                    value={values.email}
                    onChange={handleChange}
                />
                <div className='form_input_errors'>
                    {errors.email}
                </div>
            </div>
            <div className="formGroup">
                <div className="formGroup_title">
                    <label className="required">KULLANICI ADI <span className='requried-color'> * </span></label>
                </div>
                <input 
                    className="form_input"
                    type="text" 
                    name="userName"
                    placeholder="Kullanıcı adını gir"
                    value={values.userName}
                    onChange={handleChange}
                />
                <div className='form_input_errors'>
                    {errors.userName}
                </div>
            </div>
            <div className="formGroup">
                <div className="formGroup_title">
                    <label className="required">ŞİFRE <span className='requried-color'> * </span> </label>
                </div>
                <input 
                    className="form_input"
                    type="password" 
                    name="password"
                    placeholder="Şifreni gir"
                    value={values.password}
                    onChange={handleChange}
                />
                <div className='form_input_errors'>
                    {errors.password}
                </div>
            </div>
            <div className="formGroup">
                <div className="formGroup_title">
                    <label className="required">ŞİFRENİ TEKRAR GİR <span className='requried-color'> * </span> </label>
                </div>
                <input
                    className="form_input" 
                    type="password" 
                    name="password"
                    placeholder="Şifreni doğrula"
                />
                <div className='form_input_errors'>
                    {errors.password}
                </div>
            </div>
            <div className="formGroup">
                <input
                className="checkbox" 
                    type="checkbox" 
                />
                <strong className="agreement">Sözleşmeyi kabul ediyorum</strong>
            </div>
            <div className="formGroup formButton">
               <button className="loginButton" type="submit" onClick={handleSubmit}>KAYIT OL</button>
               <span></span>
            </div>
            </form>

            }
            
        </Formik>

    </div>
</div>
  );
}

export default App;
