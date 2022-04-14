import React from 'react';
import '../App.css';
import { Formik } from 'formik';
import { LoginSchema } from '../constans/yupSchema'
import Logo from '../constans/logo.svg'
import DarkMode from '../components/DarkMode';
import { toast } from 'react-toastify'

function Register() {
    
  return (
    <div className="formContainer">
        
        <div className="form_icon">
            <DarkMode />
        </div>
    
        <div className="patika">

        <div className="patika_logo">
            <img  src={Logo} alt="Logo"/>
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

        onSubmit={(values, {resetForm}) => {
            setTimeout(() => {
                resetForm();
            },4000)
            toast.success("Hey 👋, kayıt başarılı. Aramıza hoşgeldin...🤩");
            console.log(values);    
        }}
        >
            {
                ({ values, handleChange,handleBlur, handleSubmit, errors, touched }) =>

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
                    onBlur={handleBlur}
                />
                <div className='form_input_errors'>
                    { touched.email && errors.email}
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
                    onBlur={handleBlur}
                />
                <div className='form_input_errors'>
                    { touched.userName && errors.userName}
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
                    onBlur={handleBlur} 
                />
                <div className='form_input_errors'>
                    {touched.password && errors.password}
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
                    {touched.password && errors.password}
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

export default Register;
