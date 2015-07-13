function changeScreanToAddPDF(id_Produit){
	var table = document.getElementById("myTable");
            var rowCount = table.rows.length;
            
    		var row = table.insertRow(rowCount);
    
    var index = id_Produit.parentNode.parentNode.rowIndex;
	var elemtIdProduit = table.rows[index].cells[0].innerHTML;
	var elemtNameProduit = table.rows[index].cells[1].innerHTML;
	
	// Store
sessionStorage.setItem("id_Produit", elemtIdProduit);
sessionStorage.setItem("nomProduit", elemtNameProduit);

 // Create our XMLHttpRequest object
    updReq = getXMLHttp();
    // Create some variables we need to send to our PHP file
    var url = "http://127.0.0.1:8880/e_advRes/www/file-uploading/view.php";
    

    
    var idProd = sessionStorage.getItem("id_Produit");


    var vars = "idProduit="+idProd;
	updReq.open('POST', url, true);
	
        updReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
       
        updReq.onreadystatechange = function() {//Call a function when the state changes.
                if(updReq.readyState == 4 && updReq.status == 200) {
                     
                   window.location.replace("file-uploading/index.php");	
                
                }
                
        }
        updReq.send(vars);
       
      


	
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

function changeScreanToViewPDF(id_Produit){
	var table = document.getElementById("myTable");
            var rowCount = table.rows.length;
            
    		var row = table.insertRow(rowCount);
    
    var index = id_Produit.parentNode.parentNode.rowIndex;
	var elemtIdProduit = table.rows[index].cells[0].innerHTML;
	var elemtNameProduit = table.rows[index].cells[1].innerHTML;
	
	// Store
sessionStorage.setItem("id_Produit", elemtIdProduit);
sessionStorage.setItem("nomProduit", elemtNameProduit);


	 // Create our XMLHttpRequest object
    updReq = getXMLHttp();
    // Create some variables we need to send to our PHP file
    var url = "http://127.0.0.1:8880/e_advRes/www/file-uploading/view.php";
    

    
    var idProd = sessionStorage.getItem("id_Produit");


    var vars = "idProduit="+idProd;
	updReq.open('POST', url, true);
	
        updReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
       
        updReq.onreadystatechange = function() {//Call a function when the state changes.
                if(updReq.readyState == 4 && updReq.status == 200) {
                     
                    window.location.replace("file-uploading/view.php");	
                
                }
                
        }
        updReq.send(vars);
       
      



}
