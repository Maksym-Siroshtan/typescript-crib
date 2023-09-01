"use strict";
var StatusRequest;
(function (StatusRequest) {
    StatusRequest["Success"] = "success";
    StatusRequest["Failed"] = "failed";
})(StatusRequest || (StatusRequest = {}));
const paymentTest = {
    sum: 10000,
    from: 2,
    to: 4,
};
const successResponse = {
    status: StatusRequest.Success,
    data: {
        databaseId: 567,
        sum: 10000,
        from: 2,
        to: 4,
    },
};
const failedResponse = {
    status: StatusRequest.Failed,
    data: {
        errorMessage: "Недостаточно средств",
        errorCode: 4,
    },
};
