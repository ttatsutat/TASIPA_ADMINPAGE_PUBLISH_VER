<template>
<!-- this page is just an simple signin page for asking the admin credentials -->
<!-- here we get the value and check whether the entered credential is of admin's -->
    <div class="container" style="text-align:center">
        <br><br>
        <h1>Welcome to TASIPA Admin</h1>
        <h2>Please Sign in</h2>
        <br><br>
        <div class="row">
            <div class="col-lg-3"/>
            <div class="col-lg-6">
                <input type="email" v-model="formData.email" class="form-control" placeholder="Email"/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="password" v-model="formData.password" class="form-control" placeholder="Password"/>
                <br> 
                <button class="btn btn-success btn-block full-width" @click="signIn">Sign In</button>
                <br>
            </div>
            <div class="col-lg-3"/>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase'
export default {
    name: 'SignUp',
    data () {
        return {
            formData: {
                email: '',
                password: ''
            },
            result:''
        }
    },
    methods: {
        //this function is for checking the admin credentials 
        //First we check whether the enter email and password have account or not
        //then we check whether he is admin or not
        // Note: it is not good idea to compare with uid . But since this is admin page
        // and link to admin page is not visible to public so we plan to hardcode the id.
        signIn() {
            firebase
                .auth()
                .signInWithEmailAndPassword(
                    this.formData.email,
                    this.formData.password
                )
                .then(user => {
                    if(firebase.auth().currentUser.uid=="bTbHO8z9UhduJrHwxk4o7gU1bnJ3")
                    {
                        this.$router.replace('/1')
                    }
                    else{
                        //here if user is not admin , then we again redirect our page to signin 
                        this.$router.replace('/signin')
                        alert("Invalid Admin Credentials")
                        
                    }
                })
                .catch( error => {
                    alert("Invalid Admin Credentials")
                })
        }
    }
}
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
}

</style>