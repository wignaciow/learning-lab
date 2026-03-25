var app = new Vue({
    el:'#app',
    data: {
        mensaje: '',
        mensajes: [],
        userEmail: '',
        userPassword: ''
    },
    methods:{
        send: function(){
            var postData = {
                texto: app.mensaje,
                email: firebase.auth().currentUser.email
            };
            var updates = {
                //"mesajes/1": postData
            };
            updates['/mensajes/'+this.mensajes.length] = postData;
            
            firebase.database().ref().update(updates).then(function(result){
                console.log("mensaje enviado")
            });
        },
        login: function(){
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider);
        },
        register: function(){
            firebase.auth().createUserWithEmailAndPassword(app.userEmail, app.userPassword)
            .then(function(){
                console.log("cuenta creada");
            })
            .catch(function(error){
                console.log("error papa"+error)
            })
        },
        loginEmail: function(){
            firebase.auth().signInWithEmailAndPassword(app.userEmail, app.userPassword)
            .then(function(){
                console.log("cuenta logueada");
            })
            .catch(function(error){
                console.log("error de login"+error)
            })
        }
    }
})

firebase.database().ref('/mensajes/').on('child_added',function(data){
    app.mensajes.push(data.val())
})

