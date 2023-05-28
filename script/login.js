function validation() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == '' || password == "") {
        document.getElementById('error').innerHTML = "All Field are Required for Login";
        return false;
    }
    if (username.length < 4) {
        document.getElementById('error').innerHTML = "Incorect User Name";
        return false;
    }
    if (password.length <6) {
        document.getElementById('error').innerHTML = "password atleast contain 5 character or numbers";
        return false;
        
    }
    else {
        return true;
    }
   
}
