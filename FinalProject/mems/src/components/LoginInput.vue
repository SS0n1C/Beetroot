<template>
<div class="user-section">
    <form action="#" method="POST" id="logs" autocomplete="off"></form>
    <div class="input">
        <div class="input__area">
            <div class="input__area--text">
                <input type="text" id="loginTxt" v-model="userLogin">
            </div>
            <div class="input__area--password">
                <input type="password" id="loginPas">
            </div>
        </div>
        <div class="input__button">
            <button type="submit" id="loginBut" @click="addlogin()">
                <span>SUBMIT</span>
                <span class="separator"></span>
            </button>
        </div>
    </div>
    <div class="brick-texture">
    </div>
</div>
</template>

<script>

export default {
data(){
    return{
        userLogin: " ",
    }
},

}
</script>

<style>

</style>