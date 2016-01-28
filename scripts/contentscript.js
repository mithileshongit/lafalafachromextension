'use strict';

// check if the page is of any interest to lafa lafa before showing this


	console.log('\'lafalafa! Content script');
	var hostName = window.location.host;
	alert(hostName);
	
	if(hostName==="www.flipkart.com") {
	   $("head").append("<style></style>");
	   
	   
	   $("body").append("<div class='lafa_notification' style='opacity: 1; top: 10px;'>"+
	"<table>"+
		"<tbody><tr>"+
			"<td class='lafa-notification-logo-bg'>"+
			"<div class='lafa-notification-logo'></div>"+
		"</td>"+
		"<td>"+
			"<div class='lafa-notification-button lafa-notification-button-activate red'>"+
			"Activate Up to 5% Cash Back"+
			"</div>"+
			"<center><span class='lafa-notification-close'>Activate Later</span></center>"+
		"</td>"+
	"</tr>"+
	"</tbody>"+
	"</table>"+
	"</div>");
	}


