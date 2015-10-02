$(document).ready(function() {
    if(sessionStorage.getItem("UserLogged") == null
    || sessionStorage.getItem("UserAuthorized") == "Utilisateur non autorisé !"){
        alert("Permission non accordée !\nVeuillez saisir vos paramètres d'accès");
        window.open("index.html","_top");
        //window.location.replace("index.html","_top");
        sessionStorage.clear();
    }else{
    $.ajax({    //create an ajax request to load_page.php
        type: "GET",
        url: "../E-adv/server/getDelegue.php",             
        dataType: "json",   //expect json to be returned                
        success: function(response){                    

            var t = $('#myTable').DataTable();

            for (var i = 0; i < response.d.length-1; i++) { 
                
                t.row.add( [
            '<input name="delegue" id="delegue" value="'+response.d[i].id_user+'" type="radio" onClick="javascript:getRow(this)">',
            response.d[i].id_user,          
                    response.d[i].name,
                    response.d[i].surname,
            	    response.d[i].adresse,
                    response.d[i].email
                ] ).draw();
         
              
            }

          
            var inputs = document.getElementsByTagName("input"),
    i,
    len,
    byVal = [],
    value = sessionStorage.getItem("idDelegue");

for (i = 0, len = inputs.length; i < len; i++) {
    if (inputs[i].value === value) {
inputs[i].checked = true;
    }

}
getListDelegue(value);

            }
        

    });

   

 }
} );
function getListDelegue(idDelegue){
var id_delegue = 'id_delegue='+ idDelegue;
 $.ajax({    //create an ajax request to load_page.php
        type: "POST",
        url: "../E-adv/server/listRegionParDelegue.php",   
        data: id_delegue,          
        dataType: "json",   //expect json to be returned                
        success: function(response){                    

            var t = $('#myTableRegion').DataTable();
            
            t.clear().draw();
            for (var i = 0; i < response.d.length-1; i++) { 
                
                t.row.add( [
                        
                    response.d[i].nom_region
                ] ).draw();
         
              
            }
        }

    });
 }
function getvalue_func()
            {
                var str = '';
 var jsonObj;
var arr = [];
                $('#myTableRegion > tbody  > tr').each(function() 
                {

                    $(this).find('td').find("input:checked").each(function ()
                    {
                        for (var i = 0; i < $(this).length; i++)
                        {
                          //  str += $(this).val() + ',';
            jsonObj = {'id_delegue':sessionStorage.getItem("idDelegue"),'id_region':$(this).val()};
            arr.push(JSON.stringify(jsonObj));
                        }
                        
                    });
  
                });
return doSendData(arr);
            }

function doSendData(arr){
    
updReq = getXMLHttp();
    // Create some variables we need to send to our PHP file
    var url = "http://www.eventek-tn.com/test/E-adv/server/affecterRegion.php";
    var t="["+arr+"]";
    updReq.open('POST', url, true);
        updReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        var vars="tAffectRegion="+t;
       
        updReq.onreadystatechange = function() {//Call a function when the state changes.
                if(updReq.readyState == 4 && updReq.status == 200) {



    }
        }
        updReq.send(vars);
    

    }

function logOut(){
    sessionStorage.clear();
    window.location.replace("index.html");
}

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


// HandleResponse
function HandleResponse(response)
{
  document.getElementById('responseHome').innerHTML = response;
}

function getRow(obj){
    var t = document.getElementById("myTable");
    
    var rowCounts = t.rows.length;
    
    var row = t.insertRow(rowCounts);

var indexs = obj.parentNode.parentNode.rowIndex;
var elemts = t.rows[indexs].cells[1].innerHTML;
getListDelegue(elemts);
}

function getRowRegion(obj){
    var t = document.getElementById("myTableRegion");
    
    var rowCounts = t.rows.length;
    
    var row = t.insertRow(rowCounts);

var indexs = obj.parentNode.parentNode.rowIndex;
var elemts = t.rows[indexs].cells[1].innerHTML;
sessionStorage.setItem("idRegion",elemts);
}







