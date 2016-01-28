  $(function(){
    $(document).ready(function(){
		$( "#tags" ).keyup(function() {
			var searchval = $( "#tags" ).val();
		  loadsearch(searchval);
		});
	});
 });
 
 // search offers and cashback list
 function loadsearch(searchval){
   $.getJSON(getSearch(searchval), function (json) {
    var searchcontent ="";
    var num =0;
    $.each(json.search, function(index, element){
		num++
		var str = element.store.toLowerCase().replace(/\s/g,"-");
			searchcontent +='<li>'+
					'<a href="'+baseApi+'indexs/store/'+str.toLowerCase().trim()+'/'+element.id+'">'+element.offers+
					'</a></li>';
			$("#menu-container").html(searchcontent);
	});    
    });
 }