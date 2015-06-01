
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

function doLoadUsers(){
	 // Create our XMLHttpRequest object
    updReq = getXMLHttp();
    // Create some variables we need to send to our PHP file
    var url = "http://127.0.0.1:8880/e_advRes/www/server/AfficheUser.php";
    
    
	updReq.open('POST', url, true);
        updReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        
        updReq.onreadystatechange = function() {//Call a function when the state changes.
                if(updReq.readyState == 4 && updReq.status == 200) {
                        
            var data=updReq.responseText;
            var jsObj=JSON.parse(data);
            var table = document.getElementById("mytable");
            var rowCount = table.rows.length;
    		var row = table.insertRow(rowCount);
for (var i = 0; i < jsObj.d.length; i++) { 

row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML= jsObj.d[i].id_user;
    row.insertCell(1).innerHTML= jsObj.d[i].name;
    row.insertCell(2).innerHTML= jsObj.d[i].surname;
    row.insertCell(3).innerHTML= jsObj.d[i].email;
    row.insertCell(4).innerHTML= jsObj.d[i].password;
     row.insertCell(5).innerHTML='<input type="button"  class="btn btn-primary btn-xs" value = "Modifier" onClick="Javascript:changeScreanToEdit(this)" >';
     row.insertCell(6).innerHTML='<input type="button" class="btn btn-danger btn-xs" value = "Supprimer" data-title="Delete" data-toggle="modal" onClick="Javascript:getIdUser(this)" data-target="#delete" >';
//    row.insertCell(6).innerHTML='<td><p data-placement="top" data-toggle="tooltip" title="Delete"><button type="button" onClick="Javascript:getIdUser(this)" class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button></p></td>';
   
  }


HandleResponse("data loaded successfully!");
alert("data loaded");

    }
        }
        updReq.send(null);

}



// HandleResponse
function HandleResponse(response)
{
  document.getElementById('responseHome').innerHTML = response;
}

function getIdUser(obj){
    var t = document.getElementById("mytable");
    var rowCounts = t.rows.length;
    
	var row = t.insertRow(rowCounts);

var indexs = obj.parentNode.parentNode.rowIndex;
var elemts = t.rows[indexs].cells[0].innerHTML;

sessionStorage.setItem("iduser",elemts);
sessionStorage.setItem("selectedRowIndex",indexs);
}


function deleteRow(selectedRow,idUsr) {
    var table = document.getElementById("mytable");
            var rowCount = table.rows.length;

alert(sessionStorage.getItem("selectedRowIndex"));
updReq = getXMLHttp();
    // Create some variables we need to send to our PHP file
    var url = "http://127.0.0.1:8880/e_advRes/www/server/deleteUser.php";
    
    
	updReq.open('POST', url, true);
        updReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        var vars="index="+idUsr;
        updReq.onreadystatechange = function() {//Call a function when the state changes.
                if(updReq.readyState == 4 && updReq.status == 200) {
HandleResponseDelete(updReq.responseText);

table.deleteRow(selectedRow);


   
    }
        }
        updReq.send(vars);
    
    
    
}


function editUser(obj) {
    var table = document.getElementById("mytable");
            var rowCount = table.rows.length;
            
    		var row = table.insertRow(rowCount);
    
    var index = obj.parentNode.parentNode.rowIndex;
	var elemt = table.rows[index].cells[0].innerHTML;

updReq = getXMLHttp();
    // Create some variables we need to send to our PHP file
    var url = "http://127.0.0.1:8880/e_advRes/www/server/editUser.php";
    
    
	updReq.open('POST', url, true);
        updReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        var vars="index="+elemt;
        updReq.onreadystatechange = function() {//Call a function when the state changes.
                if(updReq.readyState == 4 && updReq.status == 200) {
HandleResponse(updReq.responseText);

table.deleteRow(index);

   
    }
        }
        updReq.send(vars);
    
    
    
}

function HandleResponseDelete(response)
{
  document.getElementById('responseHome').innerHTML = response;
}

