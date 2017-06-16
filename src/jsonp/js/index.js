$(function () {
    setTimeout("getAjax('json')",0);

    setTimeout("getAjax('jsonp')" , 1000);
});

function getAjax(dataType) {
    console.log(`=============== ${dataType} ================`);

    $.ajax({
        url : `http://www.codejs.co.kr/jsonp.json`,
        dataType : dataType,
        jsonpCallback : "myCallback",
        success : function (response) {
            console.log(response);
        },
        error : function (xhr) {
            console.log(xhr);
        }
    });
}