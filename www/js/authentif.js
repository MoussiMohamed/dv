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

function doAuthentif(){
	 // Create our XMLHttpRequest object
    updReq = getXMLHttp();
    // Create some variables we need to send to our PHP file
    var url = "http://127.0.0.1:8880/e_advRes/www/server/authentif.php";

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var vars = "email="+email+"&password="+password;
	updReq.open('POST', url, true);
        updReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
       
        updReq.onreadystatechange = function() {//Call a function when the state changes.
                if(updReq.readyState == 4 && updReq.status == 200) {
                        HandleResponse(updReq.responseText);
                        if(updReq.responseText == "authentification reussie"){
                        window.location.replace("home.html");
                        }else{alert(updReq.responseText)}
                }
        }
        updReq.send(vars);
       }






// HandleResponse
function HandleResponse(response)
{
  document.getElementById('ResponseAuth').innerHTML = response;
}


