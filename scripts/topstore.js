 //for top stores
 function getAllStoreList() {
 $(function(){
	 
	 var source   = $("#result").html();
     var template = Handlebars.compile(source);
    var geocodingAPI = "https://www.lafalafa.com/lafalafafront/api/getAllStore";
    $.getJSON(geocodingAPI, function (json) {
    var dealTemplate ="";
    var num =0;
    $.each(json.Store, function(index, element){
		num++;
		if (element.cashbackTitle =="CASHBACK UPTO"){
		dealTemplate += '<div class="storeBox">' + 
                        	'<div class="storeLogo">'+
                                '<a href="https://www.lafalafa.com/lafalafafront/indexs/store/'+element.storeSlug+'">' +
                                    '<img alt="flipkart" src="'+element.storeUrl+'">' +
                                '</a>' +
                            '</div>' +
                            '<div class="seeOffer">' +
                                '<p>UPTO '+element.storeCashback+' Cashback</p>' +
                                '<p class="coupons">'+element.storeOfferCount+' COUPONS</p>' +
                                '<a class="offerBtn" href="https://www.lafalafa.com/lafalafafront/indexs/store/'+element.storeSlug+'">' +
                                    'See Offers &gt;' +
                                '</a>'+
                       		'</div>' +
                       '</div>';
			}
			else{
			dealTemplate += '<div class="storeBox">' + 
                        	'<div class="storeLogo">'+
                                '<a href="https://www.lafalafa.com/lafalafafront/indexs/store/'+element.storeSlug+'">' +
                                    '<img alt="flipkart" src="'+element.storeUrl+'">' +
                                '</a>' +
                            '</div>' +
                            '<div class="seeOffer">' +
                                '<p>UPTO '+element.storeCashback+' Rewards</p>' +
                                '<p class="coupons">'+element.storeOfferCount+' COUPONS</p>' +
                                '<a class="offerBtn" href="https://www.lafalafa.com/lafalafafront/indexs/store/'+element.storeSlug+'">' +
                                    'See Offers &gt;' +
                                '</a>'+
                       		'</div>' +
                       '</div>';	
			}
			$("#result").html(dealTemplate);
			
	});
     
    
});
 });
 }
