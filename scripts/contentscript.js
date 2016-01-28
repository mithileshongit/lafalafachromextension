'use strict';

// check if the page is of any interest to lafa lafa before showing this


	//console.log('\'lafalafa! Content script');
	var hostName = window.location.host;
	//alert(hostName);
	
	if(hostName==="www.flipkart.com") {
	   $("head").append("<style>div.lafa_notification{position: fixed;right: 10px;border-radius: 4px;box-shadow: rgba(0,0,0,0.5) 0 0 10px;background: #fff;font-size: 100%;overflow: hidden;z-index: 2147483647 !important;box-sizing: content-box !important;width:396px;height:89px;}div.lafa_notification table, div.lafa_notification td {border-collapse: collapse !important;background: none;border: 0 !important;margin: 0 !important;padding: 4px;width: auto;}div.lafa_notification * {box-sizing: content-box !important;vertical-align: middle;   line-height: normal;padding: 0;margin: 0;}div.lafa_notification .lafa_notification-logo-bg {background-image:url('http://staging.lafalafa.com/images/chrome_plugin_image_1.png');background-repeat:no-repeat;padding: 0 16px;position: relative;width: 120px;height: 89px;}div.lafa_notification .lafa-notification-button {position: relative;cursor: pointer;min-width: 232px;height: 40px;text-align: center;color: #FFF !important;text-decoration: none;line-height: 43px;font-family: 'Open Sans',sans-serif !important;font-weight: 700;font-size: 14px;display: block;margin: 10px 8px;padding: 0;white-space: nowrap;}div.lafa_notification .lafa-notification-button.green {margin:0px !important;color: #fff !important !important;background: #D25068 !important;border: 1px solid #2cb69d !important;background-image: linear-gradient(to bottom, #2cb69d, #2cb69d) !important;border-radius: 5px !important;}</style>");
	   
	   
	   $("body").append("<div class='lafa_notification' style='opacity: 1; top: 10px;'>"+
                "<table><tbody><tr>"+		
			"<td class='lafa_notification-logo-bg'>"+
		"</td>"+
		"<td>"+
			"<div class='lafa-notification-button lafa-notification-button-activate green'>"+
			"Activate Up to 5% Cash Back"+
		"</td>"+
	"</tr>"+
	"</tbody>"+
	"</table>"+
	"</div>");
	}


