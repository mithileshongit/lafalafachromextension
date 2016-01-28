(function ($) {
    chrome.cookies.get({url: baseAPI(), name: 'customerID'},
    function (cookie) {
        if (cookie) {
            var customerId = (cookie.value);
            Summary(customerId);
            getAllStoreList();
            getHotOffers();
            $(document).on('click', '.tab-toggle', function (e) {
                e.preventDefault();
                $('.result-container').hide();
                $('.tab-toggle').removeClass('selected');
                $($(this).data('container-id')).show();
                $(this).addClass('selected');
            });
            $(".logo").on('click', function () {
                window.open(baseAPI());
            });
        }
        else {
            window.open(getCustomerLogin());
        }
    });
}(jQuery));

