enum StatusRequest {
  Success = "success",
  Failed = "failed",
}

interface IPayment {
  sum: number;
  from: number;
  to: number;
}

interface IPaymentRequest extends IPayment {}

interface IPaymentSuccessResponse extends IPayment {
  databaseId: number;
}

interface IPaymentFailedRequest {
  errorMessage: string;
  errorCode: number;
}

interface ISuccessResponse {
  status: StatusRequest.Success;
  data: IPaymentSuccessResponse;
}

interface IFailedResponse {
  status: StatusRequest.Failed;
  data: IPaymentFailedRequest;
}

const paymentTest: IPaymentRequest = {
  sum: 10000,
  from: 2,
  to: 4,
};

const successResponse: ISuccessResponse = {
  status: StatusRequest.Success,
  data: {
    databaseId: 567,
    sum: 10000,
    from: 2,
    to: 4,
  },
};

const failedResponse: IFailedResponse = {
  status: StatusRequest.Failed,
  data: {
    errorMessage: "Недостаточно средств",
    errorCode: 4,
  },
};
