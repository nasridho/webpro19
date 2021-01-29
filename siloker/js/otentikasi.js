function login(){
	let user = document.getElementById("username").value;
	let pass = document.getElementById("password").value;
	
	if (user == "user" && pass == "integrity"){
		alert("Login Berhasil");
		window.location.href = "berhasil.html";
	} else if 
		(user == "admin" && pass == "integrity"){
		alert("Login Berhasil sebagai admin");
		window.open('masuk_page/tamu_page/index.html','_self');
		
	}else {
		alert("Login Gagal");
	}
	
}


function lihatpass() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}