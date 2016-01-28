

(function($){
	//check cookie
	chrome.cookies.get({ url: 'https://www.lafalafa.com/lafalafafront/', name: 'customerID' },
	function (cookie) {
	if (cookie) {
	//var cId = (cookie.value);
	var customerId = (cookie.value);
	
	
 //$.template("dealTemplate", dealTemplate);
 //for payable Summary


 Summary(customerId);
 getAllStoreList();
 getHotOffers();
 //MatchUrl();


	$(document).on('click','.tab-toggle', function(e){
		e.preventDefault();
		$('.result-container').hide();
		$('.tab-toggle').removeClass('selected');
		$($(this).data('container-id')).show();
		$(this).addClass('selected');
	});
	$(".logo").on('click', function(){
     window.open("https://www.lafalafa.com/lafalafafront/");    
	});
	


	
}
//go to login page
else {
  window.open("https://www.lafalafa.com/lafalafafront/customers/login");
}
});
}(jQuery));

