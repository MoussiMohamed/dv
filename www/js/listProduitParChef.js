$(document).ready(function() {

    if(sessionStorage.getItem("UserLogged") == null

    || sessionStorage.getItem("UserAuthorized") == "Utilisateur non autoris� !"){

        alert("Permission non accord�e !\nVeuillez saisir vos param�tres d'acc�s");

        window.open("index.html","_top");

        //window.location.replace("index.html","_top");

        sessionStorage.clear();

    }else{

    $.ajax({    

        type: "GET",

        url: "../E-adv/server/getChefProduit.php",             

        dataType: "json",   //expect json to be returned                

        success: function(response){                    



            var t = $('#myTable').DataTable();



            for (var i = 0; i < response.d.length-1; i++) { 

                

                t.row.add( [

            '<input name="chefProduit" id="chefProduit" value="'+response.d[i].id_user+'" type="radio" onClick="javascript:getRow(this)">',

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

    value = sessionStorage.getItem("idChefProduit");



for (i = 0, len = inputs.length; i < len; i++) {

    if (inputs[i].value === value) {

inputs[i].checked = true;

    }



}

getListChefProduit(value);



            }

        



    });



   



 }

} );

function getListChefProduit(idChefProduit){

var id_chef_produit = 'id_chef_produit='+ idChefProduit;

 $.ajax({    //create an ajax request to load_page.php

        type: "POST",

        url: "../E-adv/server/listProduitParChef.php",   

        data: id_chef_produit,          

        dataType: "json",   //expect json to be returned                

        success: function(response){                    



            var t = $('#myTableProduit').DataTable();

            

            t.clear().draw();

            for (var i = 0; i < response.d.length-1; i++) { 

                

                t.row.add( [

                        

                    response.d[i].nom_Produit

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

                $('#myTableProduit > tbody  > tr').each(function() 

                {



                    $(this).find('td').find("input:checked").each(function ()

                    {

                        for (var i = 0; i < $(this).length; i++)

                        {

                          //  str += $(this).val() + ',';

            jsonObj = {'id_chef_produit':sessionStorage.getItem("idChefProduit"),'id_produit':$(this).val()};

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

        var vars="tAffectProduit="+t;

       

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

function getRow(obj){

    var t = document.getElementById("myTable");

    

    var rowCounts = t.rows.length;

    

    var row = t.insertRow(rowCounts);



var indexs = obj.parentNode.parentNode.rowIndex;

var elemts = t.rows[indexs].cells[1].innerHTML;

getListChefProduit(elemts);

}



function getRowRegion(obj){

    var t = document.getElementById("myTableRegion");

    

    var rowCounts = t.rows.length;

    

    var row = t.insertRow(rowCounts);



var indexs = obj.parentNode.parentNode.rowIndex;

var elemts = t.rows[indexs].cells[1].innerHTML;

sessionStorage.setItem("idRegion",elemts);

}





function deleteRow(selectedRow,idUsr) {

    var table = document.getElementById("myTable");

            var rowCount = table.rows.length;



updReq = getXMLHttp();

    // Create some variables we need to send to our PHP file

    var url = "../E-adv/server/deleteUser.php";

    

    updReq.open('POST', url, true);

        updReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var vars="index="+idUsr;

        updReq.onreadystatechange = function() {//Call a function when the state changes.

                if(updReq.readyState == 4 && updReq.status == 200) {

//HandleResponseDelete(updReq.responseText);



table.deleteRow(selectedRow);





   

    }

        }

        updReq.send(vars);

    

    

    

}





function editUser(obj) {

    var table = document.getElementById("myTable");

            var rowCount = table.rows.length;

            

            var row = table.insertRow(rowCount);

    

    var index = obj.parentNode.parentNode.rowIndex;

    var elemt = table.rows[index].cells[0].innerHTML;



updReq = getXMLHttp();

    // Create some variables we need to send to our PHP file

    var url = "../E-adv/server/editUser.php";

    

    

    updReq.open('POST', url, true);

        updReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var vars="index="+elemt;

        updReq.onreadystatechange = function() {//Call a function when the state changes.

                if(updReq.readyState == 4 && updReq.status == 200) {

//HandleResponse(updReq.responseText);



table.deleteRow(index);



   

    }

        }

        updReq.send(vars);

    

}













