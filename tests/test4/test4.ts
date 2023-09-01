interface IPayment {
  sum: number;
  from: number;
  to: number;
}

enum PaymentStatus {
  Success = "success",
  Failed = "failed",
}

interface IPaymentRequest extends IPayment {}

interface IDataSuccess extends IPayment {
  databaseId: number;
}

interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}

interface IResponseSuccess {
  status: PaymentStatus.Success;
  data: IDataSuccess;
}

interface IResponseFailed {
  status: PaymentStatus.Failed;
  data: IDataFailed;
}

const successResponseTestFour: IResponseSuccess = {
  status: PaymentStatus.Success,
  data: {
    databaseId: 567,
    sum: 10000,
    from: 2,
    to: 4,
  },
};

const failedResponseTestFour: IResponseFailed = {
  status: PaymentStatus.Failed,
  data: {
    errorMessage: "Недостаточно средств",
    errorCode: 4,
  },
};

type SuccessOrFailedResponse = IResponseSuccess | IResponseFailed;
type ResponseFunc = (res: SuccessOrFailedResponse) => number;

function isSuccess(
  response: SuccessOrFailedResponse
): response is IResponseSuccess {
  if (response.status === PaymentStatus.Success) {
    return true;
  }
  return false;
}

const responseFunc: ResponseFunc = (
  response: SuccessOrFailedResponse
): number => {
  if (isSuccess(response)) {
    return response.data.databaseId;
  } else {
    throw new Error(response.data.errorMessage);
  }
};

console.log(responseFunc(successResponseTestFour));
