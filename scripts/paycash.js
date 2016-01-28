 // Get Paybale summary
function Summary(customerId) { 
$(function(){
	 
	 var source   = $("#pay").html();
     var payable = Handlebars.compile(source);
     var geocodingAPIR = "https://www.lafalafa.com/lafalafafront/api/rewardSummary/"+customerId;
     var geocodingAPIC = "https://www.lafalafa.com/lafalafafront/api/cashbackSummary/"+customerId;
    $.getJSON(geocodingAPIR, function (json1) {
		$.getJSON(geocodingAPIC, function (json2) {
			var payable1 = parseFloat(json1.rewardSummary.payable.match(/(\d*[.])?\d+/)[0]);
			var payable2 = parseFloat(json2.cashbackSummary.cashback.match(/(\d*[.])?\d+/)[0]);
			var payable3 = parseFloat(json2.cashbackSummary.referralAmount.match(/(\d*[.])?\d+/)[0]);
			var payable4 = parseFloat(json2.cashbackSummary.bonusCash.match(/(\d*[.])?\d+/)[0]);
			var sum = payable1 + payable2 + payable3 + payable4;
			$("#pay").html('<div class="cashbackPayable">Payable Rs '+sum+'</div>');
			
		});    
	});
 });
}
