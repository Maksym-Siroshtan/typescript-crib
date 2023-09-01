"use strict";
// 1 - Success
// 2 - In_process
// 3 - Failed
var StatusCodeNum;
(function (StatusCodeNum) {
    StatusCodeNum[StatusCodeNum["Success"] = 1] = "Success";
    StatusCodeNum[StatusCodeNum["In_process"] = 2] = "In_process";
    StatusCodeNum[StatusCodeNum["Failed"] = 3] = "Failed";
})(StatusCodeNum || (StatusCodeNum = {}));
const payment = {
    message: "Payment success",
    statusCode: StatusCodeNum.Success,
};
// Success = 'success'
// In_process = 'in_process'
// Failed = 'failed'
var StatusCodeStr;
(function (StatusCodeStr) {
    StatusCodeStr["Success"] = "success";
    StatusCodeStr["In_process"] = "in_process";
    StatusCodeStr["Failed"] = "failed";
})(StatusCodeStr || (StatusCodeStr = {}));
// Success = 1
// In_process = 'in_process'
// Failed = 'failed'
var StatusCodeNumAndStr;
(function (StatusCodeNumAndStr) {
    StatusCodeNumAndStr[StatusCodeNumAndStr["Success"] = 1] = "Success";
    StatusCodeNumAndStr["In_process"] = "in_process";
    StatusCodeNumAndStr["Failed"] = "failed";
})(StatusCodeNumAndStr || (StatusCodeNumAndStr = {}));
function statusCode(status) {
    console.log(status);
}
statusCode(StatusCodeNumAndStr.Success);
statusCode(1);
