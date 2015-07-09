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


	window.location.replace("file-uploading/index.php");
}