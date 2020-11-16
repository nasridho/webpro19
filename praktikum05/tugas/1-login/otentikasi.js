function login(){
	let user = document.getElementById("username").value;
	let pass = document.getElementById("password").value;
	
	if (user == "ahmad2017" && pass == "integrity"){
		alert("Login Berhasil");
		window.location.href = "berhasil.html";
	} else {
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