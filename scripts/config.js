//var baseApi = "http://staging.lafalafa.com/";
var baseApi = "https://www.lafalafa.com/lafalafafront/";

function baseAPI(){
    return baseApi;
}

function getCustomer(customerid) {
   return baseApi.customerid+customerid;
}

function getCustomerLogin() {
   return baseApi+"customers/login";
}

function getHotOffer() {
    return baseApi+"api/hotOffers";
}

function getRewardSummar(customerId) {
    return baseApi+"api/rewardSummary/"+customerId;
}

function getCashbackSummary(customerId) {
    return baseApi+"api/cashbackSummary/"+customerId;
}

function getSearch(searchval) {
    return baseApi+"api/search/"+searchval;
}

function getAllStore(){
    return baseApi+"api/getAllStore";
}