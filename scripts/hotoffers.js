 function getHotOffers() {
 //for today's hot offers
 $(function(){
    $.getJSON(getHotOffer(), function (json) {
   // console.log("--------------------------------------");
   // console.log(json);
    
    //console.log(json.hotOffer);
    var hotofferTemplate ="";
    $.each(json.hotOffer, function(index, element){
		hotofferTemplate += '<div class="storeBox">' + 
                        	'<div class="storeLogo">'+
                                '<a href="'+baseApi+'indexs/store/'+element.storeSlug+'/'+element.dealOfferId+'">' +
                                    '<img alt="flipkart" src="'+element.storeImg+'">' +
                                '</a>' +
                            '</div>' +
                            '<div class="seeOffer">' +
                                '<p class="offerName">'+element.offerName.substring(0, 75)+' ...</p>' +
                                '<a class="offerBtn" href="'+baseApi+'indexs/store/'+element.storeSlug+'/'+element.dealOfferId+'">' +
                                    'See Offers &gt;' +
                                '</a>'+
                       		'</div>' +
                       '</div>';
			$("#result2").html(hotofferTemplate);
	});
    });
 });
}
