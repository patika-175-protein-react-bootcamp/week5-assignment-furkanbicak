import React from 'react';
import './App.css';
import MoonIcon from './constans/MoonIcon.png'
import Logo from './constans/logo.svg'

function App() {
  return (
    <div class="formContainer">
    <div class="form_icon">
        <img src={MoonIcon} alt=""/>
    </div>
    
    <div class="patika">

        <div class="patika_logo">
            <img  src={Logo} alt=""/>
        </div>
       
        <h3 class="patika_title">
            <strong>YAZILIM PATİKALARI</strong>
        </h3>
       <div class="patika_lorem">
            <p>Bootcamp'ler teknoloji kariyerine girmek isteyenler için yeni bir eğitim modelidir. Ekibini büyütmek isteyen şirketler bir bootcamp'lere sponsor olurlar. Teknik beceriler kazanmaya başlamış ancak işe girmeye hazır olmayan kişiler bootcamp'lere başvururlar. Seçilen adaylar 4-8 haftalık ücretsiz ve yoğun eğitime kabul alırlar. Bootcamp'lerde başarılı olan öğrenciler sponsor şirkette ya da sektörde başka şirketlere işe yerleşirler.</p>
       </div>
       <div class="boxes">
            <div class="boxOne">

            </div>
            <div class="boxTwo">

            </div>
       </div>
     
    </div>

    <div class="form">
        <div class="form_titles">
            <h3 class="title">
                <strong>Kayıt</strong>
            </h3>
        </div>
        <form>
            <div class="form_row">
                <div class="formGroup row">
                    <div class="formGroup_title">
                         <label class="required">İSİM</label>
                    </div>
                     <input 
                         class="form_input"
                         type="text" 
                         name="email"
                         placeholder="İsmini gir"
                     />
                 </div>
                 <div class="formGroup row">
                   <div class="formGroup_title">
                     <label class="required">SOYİSİM</label>
                   </div>
                     <input
                         class="form_input"
                         type="text" 
                         name="password"
                         placeholder="Soyismini gir"
                         
                     />
                 </div>
            </div>
           

            <div class="formGroup">
                <div class="formGroup_title">
                    <label class="required">E-POSTA</label>
                </div>
                <input 
                    class="form_input"
                    type="text" 
                    name="password"
                    placeholder="E-posta adresini gir"
                />
            </div>
            <div class="formGroup">
                <div class="formGroup_title">
                    <label class="required">KULLANICI ADI</label>
                </div>
                <input 
                    class="form_input"
                    type="text" 
                    name="kullanıcıAdi"
                    placeholder="Kullanıcı adını gir"
                />
            </div>
            <div class="formGroup">
                <div class="formGroup_title">
                    <label class="required">ŞİFRE</label>
                </div>
                <input 
                    class="form_input"
                    type="password" 
                    name="password"
                    placeholder="Şifreni gir"
                />
            </div>
            <div class="formGroup">
                <div class="formGroup_title">
                    <label class="required">ŞİFRENİ TEKRAR GİR</label>
                </div>
                <input
                    class="form_input" 
                    type="password" 
                    name="password"
                    placeholder="Şifreni doğrula"
                />
            </div>
            <div class="formGroup">
                <input
                class="checkbox" 
                    type="checkbox" 
                />
                <strong class="agreement">Sözleşmeyi kabul ediyorum</strong>
            </div>
            <div class="formGroup formButton">
               <button class="loginButton" type="submit">KAYIT OL</button>
               <span></span>
            </div>
        </form>
    </div>
</div>
  );
}

export default App;
