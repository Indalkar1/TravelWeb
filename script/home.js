function validation() {
    var place = document.getElementById("destination").value;
    var text = document.getElementById("message").value;
    console.log(place,text);
    if (place === '' || text === '') {
        document.getElementById('error').innerHTML="Both Fields are mandatory";
        return false;
    }
    else {
        window.alert("Thank for the Response");
        return true;
    }
        
}