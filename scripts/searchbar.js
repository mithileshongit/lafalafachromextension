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
	 var geocodingAPI = "https://www.lafalafa.com/lafalafafront/api/search/"+searchval;
   $.getJSON(geocodingAPI, function (json) {
    var searchcontent ="";
    var num =0;
    $.each(json.search, function(index, element){
		num++
		var str = element.store.toLowerCase().replace(/\s/g,"-");
			searchcontent +='<li>'+
					'<a href="https://www.lafalafa.com/lafalafafront/indexs/store/'+str.toLowerCase().trim()+'/'+element.id+'">'+element.offers+
					'</a></li>';
			$("#menu-container").html(searchcontent);
	});
     
    });
 }
/*$(document).bind('click', function(e){
		var container = jQuery('.search');
		if(!container.is(e.target) && container.has(e.target).length === 0){
			$("#menu-container").hide();
		}
});*/
