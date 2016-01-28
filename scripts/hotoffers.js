 function getHotOffers() {
 //for today's hot offers
 $(function(){
	 
	 var source   = $("#result2").html();
     var template = Handlebars.compile(source);
    var geocodingAPIH = "https://www.lafalafa.com/lafalafafront/api/hotOffers";
    $.getJSON(geocodingAPIH, function (json) {
   // console.log("--------------------------------------");
   // console.log(json);
    
    //console.log(json.hotOffer);
    var hotofferTemplate ="";
    var num =0;
    $.each(json.hotOffer, function(index, element){
		num++;
		
		hotofferTemplate += '<div class="storeBox">' + 
                        	'<div class="storeLogo">'+
                                '<a href="https://www.lafalafa.com/lafalafafront/indexs/store/'+element.storeSlug+'/'+element.dealOfferId+'">' +
                                    '<img alt="flipkart" src="'+element.storeImg+'">' +
                                '</a>' +
                            '</div>' +
                            '<div class="seeOffer">' +
                                '<p class="offerName">'+element.offerName.substring(0, 75)+' ...</p>' +
                                '<a class="offerBtn" href="https://www.lafalafa.com/lafalafafront/indexs/store/'+element.storeSlug+'/'+element.dealOfferId+'">' +
                                    'See Offers &gt;' +
                                '</a>'+
                       		'</div>' +
                       '</div>';
			
			
			$("#result2").html(hotofferTemplate);
			
	
		//console.log(html);
	});
     
    
});
 });
}
