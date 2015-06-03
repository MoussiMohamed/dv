$("document").ready(function(){
  $("#register-form").submit(function(){
    var data = {
      "name": $("#name").val(),
      "surname": $("#surname").val(),
      "email": $("#email").val(),
      "password": $("#password").val(),
    };
    
    //data = $(this).serialize() + "&" + $.param(data);
    $.ajax({
    	
      type: "POST",
      dataType: "json",
      url: "http://127.0.0.1:8880/e_advRes/www/server/manage_user.php", //Relative or absolute path to response.php file
      data: data,
      success: function(data) {
        alert(JSON.stringify(data));

       // alert("Form submitted successfully.\nReturned json: " + data["json"]);
      }
    });
    return false;
  });
});


      
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

function doSaveUser(){
	 // Create our XMLHttpRequest object
    updReq = getXMLHttp();
    // Create some variables we need to send to our PHP file
    var url = "http://127.0.0.1:8880/e_advRes/www/server/manage_user.php";
    
    var name = document.getElementById("name").value;
    
    var surname = document.getElementById("surname").value;
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    	
    
    var vars = "name="+name+"&surname="+surname+"&email="+email+"&password="+password;
    
	updReq.open('POST', url, true);
        updReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
       updReq.setRequestHeader("Access-Control-Allow-Origin", "*");
  
      
        updReq.onreadystatechange = function() {//Call a function when the state changes.
                if(updReq.readyState == 4 && updReq.status == 200) {
                        HandleResponse(updReq.responseText);
                        
                     //   window.location.replace("authen.html");
                }
        }
        updReq.send(vars);

}



// HandleResponse
function HandleResponse(response)
{
  document.getElementById('ResponseDiv').innerHTML = response;
}



