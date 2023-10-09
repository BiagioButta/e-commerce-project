<template>
    <div class="container">
        
        <div class="form signup">
            <div class="form-content">
                <h1>Registrati</h1>
                <form @submit.prevent="signup">
                    <div class="field input-field">
                        <input type="text" placeholder="Nome" class="input" v-model="authStore.firstName">
                    </div>
                    <div class="field input-field">
                        <input type="text" placeholder="Cognome" class="input" v-model="authStore.lastName">
                    </div>
                    <div class="field input-field">
                        <input type="text" placeholder="Indirizzo" class="input" v-model="authStore.street">
                    </div>
                    <div class="field input-field">
                        <input type="text" placeholder="Provincia" class="input" v-model="authStore.district">
                    </div>
                    <div class="field input-field">
                        <input type="text" placeholder="Codice Postale" class="input" v-model="authStore.postalCode">
                    </div>
                    <div class="field input-field">
                        <input type="text" placeholder="Città" class="input" v-model="authStore.city">
                    </div>
                    <div class="field input-field">
                        <input type="text" placeholder="Paese" class="input" v-model="authStore.country">
                    </div>
                    <div class="field input-field">
                        <input type="text" placeholder="Numero di telefono" class="input" v-model="authStore.phoneNumber">
                    </div>
                    <div class="field input-field">
                        <input type="email" placeholder="Email" class="input" v-model="authStore.email">
                    </div>
                    <div class="field input-field">
                        <input type="password" placeholder="Password" class="password" v-model="authStore.password">
                    </div>
                    <div class="field input-field">
                        <input type="password" placeholder="Conferma password" class="password" v-model="authStore.confirmPassword">
                    </div>
                    <div class="field input-field">
                        <label for="role">Ruolo</label>
                        <select id="role" v-model="authStore.role">
                            <option value="utenteNormale">Utente</option>
                            <option value="amministratore">Amministratore</option>
                            <option value="venditore">Venditore</option>
                        </select>
                    </div>

                    <div class="field button-field">
                        <button>Registrati</button>
                    </div>
                </form>
                <div class="form-link">
                    <span>Hai già an account? <router-link to="/login" class="link login-link">Accedi</router-link></span>
                </div>
            </div>

            <div class="line"></div>

            <div class="media-options">
                <a href="#" class="field google">
                    <img src="../assets/img/WhatsApp Image 2023-08-16 at 12.14.39.jpeg" alt="" class="google-img">
                    <button @click.prevent="loginWithGoogle">Accedi con Google</button>
                </a>
            </div>

        </div>
        <div>
            <router-link to="/">Ritorna alla Homepage</router-link>
        </div>

    </div>

</template>

<script setup>
import { useAuthStore } from '../stores/authStore'


const authStore = useAuthStore()

const signup = async() => {
    authStore.signup()
}

const loginWithGoogle = async() => {
    authStore.loginWithGoogle()
}

</script>

<style lang="scss" scoped>
.container{
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 30px;
}
.form{
    max-width: 430px;
    width: 100%;
    padding: 30px;
    border-radius: 6px;
    background: #FFF;
}

h1{
    font-size: 28px;
    font-weight: 600;
    color: #232836;
    text-align: center;
}
form{
    margin-top: 30px;
}
.form .field{
    position: relative;
    height: 25px;
    width: 100%;
    margin-top: 20px;
    border-radius: 6px;
}
.field input,
.field button{
    height: 100%;
    width: 100%;
    border: none;
    font-size: 16px;
    font-weight: 400;
    border-radius: 6px;
}
.field input{
    outline: none;
    padding: 0 15px;
    border: 1px solid#CACACA;
}
.field input:focus{
    border-bottom-width: 2px;
}
.eye-icon{
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 18px;
    color: #8b8b8b;
    cursor: pointer;
    padding: 5px;
}
.field button{
    color: #fff;
    background-color: #0171d3;
    transition: all 0.3s ease;
    cursor: pointer;
}
.field button:hover{
    background-color: #016dcb;
}
.form-link{
    text-align: center;
    margin-top: 10px;
}
.form-link span,
.form-link a{
    font-size: 14px;
    font-weight: 400;
    color: #232836;
}
.form a{
    color: #0171d3;
    text-decoration: none;
}
.form-content a:hover{
    text-decoration: underline;
}
.line{
    position: relative;
    height: 1px;
    width: 100%;
    margin: 36px 0;
    background-color: #d4d4d4;
}
.line::before{
    content: 'Oppure';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FFF;
    color: #8b8b8b;
    padding: 0 15px;
}
.media-options a{
    display: flex;
    align-items: center;
    justify-content: center;
}
a.facebook{
    color: #fff;
    background-color: #4267b2;
}
a.facebook .facebook-icon{
    height: 28px;
    width: 28px;
    color: #0171d3;
    font-size: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
}
.facebook-icon,
img.google-img{
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
}
img.google-img{
    height: 20px;
    width: 20px;
    object-fit: cover;
}
a.google{
    border: 1px solid #CACACA;
}
a.google span{
    font-weight: 500;
    opacity: 0.6;
    color: #232836;
}

</style>