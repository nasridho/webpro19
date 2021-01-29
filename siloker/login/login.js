function login(){
    if(username.value == 'admin' && password.value == 'admin'){
        window.open('user/admin/index.html','_self')
    } else if(username.value == 'guest' && password.value == 'tamu'){
        window.open('guest/guest/index.html','_self')
    } else{
        alert('Username atau Password yang anda masukkan salah!')
    }
}