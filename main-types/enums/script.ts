// 1 - Success
// 2 - In_process
// 3 - Failed

enum StatusCodeNum {
  Success = 1,
  In_process,
  Failed,
}

const payment = {
  message: "Payment success",
  statusCode: StatusCodeNum.Success,
};

// Success = 'success'
// In_process = 'in_process'
// Failed = 'failed'

enum StatusCodeStr {
  Success = "success",
  In_process = "in_process",
  Failed = "failed",
}

// Success = 1
// In_process = 'in_process'
// Failed = 'failed'

enum StatusCodeNumAndStr {
  Success = 1,
  In_process = "in_process",
  Failed = "failed",
}

function statusCode(status: StatusCodeNumAndStr) {
  console.log(status);
}
statusCode(StatusCodeNumAndStr.Success);
statusCode(1);
// statusCode('failed') Argument of type '"failed"' is not assignable to parameter of type 'StatusCodeNumAndStr'.

const enum StatusCodeNumConst { // no compile function in js
  Success,
  In_process,
  Failed,
}
