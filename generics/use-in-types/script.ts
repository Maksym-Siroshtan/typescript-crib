const sliceFoo: <T>(data: Array<T>) => Array<T> = getSlicedHalf;

interface ILogLine<T> {
  timeStamp: Date;
  data: T;
}

type LogLineType<T> = {
  timeStamp: Date;
  data: T;
};

const logLine: LogLineType<{ a: number }> = {
  timeStamp: new Date(),
  data: {
    a: 1,
  },
};
