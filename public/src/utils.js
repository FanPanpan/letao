
define(['jquery'],function ($) {

	//检测登录
	$.ajax({
        url: '/api/employee/checkRootLogin',
        type: 'get',
        success: function (info) {
            //未登录
            if(info.error) {
               location.href = '/login.html';
            }
        }
    })

	//退出登录
	$('.logout').on('click',function () {
		$.ajax({
			url: '/api/employee/employeeLogout',
			type: 'get',
			success: function (info) {
				//成功跳转登录页面
				if(info.success) {
					location.href = '/login.html';
				}
			}
		})
	})


})