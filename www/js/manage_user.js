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
      	var d = $.parseJSON(JSON.stringify(data)).response;
      	alert(d);

				if (d == "Successfully Registered!") {

					window.location.replace("index.html");
				}

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




