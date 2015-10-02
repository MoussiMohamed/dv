function getXMLHttp()
{
  var xmlHttp

  try
  {
    //Firefox, Opera 8.0+, Safari
    xmlHttp = new XMLHttpRequest();
  }
  catch(e)
  {
    //Internet Explorer
    try
    {
      xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch(e)
    {
      try
      {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      catch(e)
      {
        alert("Your browser does not support AJAX!")
        return false;
      }
    }
  }
  return xmlHttp;
}
var email="";
function doAuthentif(){
   // Create our XMLHttpRequest object
    updReq = getXMLHttp();
    // Create some variables we need to send to our PHP file
    var url = "../E-adv/server/authentif.php";
    

    email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
if(email == "" && password == "")
{
  alert("Veuillez entrer vous paramètres d'accès")
  }
  else{
    var vars = "email="+email+"&password="+password;
  updReq.open('POST', url, true);
        updReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
       
        updReq.onreadystatechange = function() {//Call a function when the state changes.
                if(updReq.readyState == 4 && updReq.status == 200) {
                       // HandleResponse(updReq.responseText);

                        if(updReq.responseText == "Administrateur"){
                          sessionStorage.setItem("UserLogged",email);
                          sessionStorage.setItem("roleLogged","Administrateur");
                          window.location.replace("temp.html");
                        
                        }
                        else if (updReq.responseText == "Responsable Marketing")
                        {
                          sessionStorage.setItem("UserLogged",email);
                          sessionStorage.setItem("roleLogged","Responsable Marketing");

                          window.location.replace("temp.html");
                        }
                        else if(updReq.responseText == "Chef de produit")
                        {
                          sessionStorage.setItem("UserLogged",email);
                          sessionStorage.setItem("roleLogged","Chef de produit");

                          window.location.replace("temp.html");
                        }
                        else if(updReq.responseText == "Incorrect Email Address and/or Password!")
                        {
                          sessionStorage.setItem("UserLogged",email);
                          alert("Incorrect Email Address and/or Password!");
                          window.location.replace("index.html");
                        }
                        else{
                          alert("Utilisateur non autorisé");
                        }
                }
        }
        updReq.send(vars);
       
       }


}
// HandleResponse
function HandleResponse(response)
{
  document.getElementById('ResponseAuth').innerHTML = response;
}



