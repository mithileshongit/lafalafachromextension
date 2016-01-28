 //for top stores
 function getAllStoreList() {
 $(function(){
    $.getJSON(getAllStore(), function (json) {
    var dealTemplate ="";
    $.each(json.Store, function(index, element){
		if (element.cashbackTitle =="CASHBACK UPTO"){
		dealTemplate += '<div class="storeBox">' + 
                        	'<div class="storeLogo">'+
                                '<a href="'+baseApi+'indexs/store/'+element.storeSlug+'">' +
                                    '<img alt="flipkart" src="'+element.storeUrl+'">' +
                                '</a>' +
                            '</div>' +
                            '<div class="seeOffer">' +
                                '<p>UPTO '+element.storeCashback+' Cashback</p>' +
                                '<p class="coupons">'+element.storeOfferCount+' COUPONS</p>' +
                                '<a class="offerBtn" href="'+baseApi+'indexs/store/'+element.storeSlug+'">' +
                                    'See Offers &gt;' +
                                '</a>'+
                       		'</div>' +
                       '</div>';
			}
			else{
			dealTemplate += '<div class="storeBox">' + 
                        	'<div class="storeLogo">'+
                                '<a href="'+baseApi+'indexs/store/'+element.storeSlug+'">' +
                                    '<img alt="flipkart" src="'+element.storeUrl+'">' +
                                '</a>' +
                            '</div>' +
                            '<div class="seeOffer">' +
                                '<p>UPTO '+element.storeCashback+' Rewards</p>' +
                                '<p class="coupons">'+element.storeOfferCount+' COUPONS</p>' +
                                '<a class="offerBtn" href="'+baseApi+'indexs/store/'+element.storeSlug+'">' +
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
