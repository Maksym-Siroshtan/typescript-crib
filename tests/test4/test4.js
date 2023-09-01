"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
const successResponseTestFour = {
    status: PaymentStatus.Success,
    data: {
        databaseId: 567,
        sum: 10000,
        from: 2,
        to: 4,
    },
};
const failedResponseTestFour = {
    status: PaymentStatus.Failed,
    data: {
        errorMessage: "Недостаточно средств",
        errorCode: 4,
    },
};
function isSuccess(response) {
    if (response.status === PaymentStatus.Success) {
        return true;
    }
    return false;
}
const responseFunc = (response) => {
    if (isSuccess(response)) {
        return response.data.databaseId;
    }
    else {
        throw new Error(response.data.errorMessage);
    }
};
console.log(responseFunc(successResponseTestFour));
