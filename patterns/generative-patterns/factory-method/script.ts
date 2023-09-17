interface IInsurance {
  // Общий интерфейс страхования
  id: number;
  status: string;
  setVehicle(vehicle: any): void;
  submit(): Promise<boolean>;
}

class TFInsurance implements IInsurance {
  // TF Страхование
  id: number;
  status: string;
  private vehicle: any;

  setVehicle(vehicle: any): void {
    this.vehicle = vehicle;
  }

  async submit(): Promise<boolean> {
    const res = await fetch("tf", {
      method: "POST",
      body: JSON.stringify(this.vehicle),
    });
    const data = await res.json();
    return data.isSuccess;
  }
}

class ABInsurance implements IInsurance {
  // AB Страхование
  id: number;
  status: string;
  private vehicle: any;

  setVehicle(vehicle: any): void {
    this.vehicle = vehicle;
  }

  async submit(): Promise<boolean> {
    const res = await fetch("ab", {
      method: "POST",
      body: JSON.stringify(this.vehicle),
    });
    const data = await res.json();
    return data.yes;
  }
}

abstract class InsuranceFactory {
  // Абстрактный класс Страховая фабрика
  db: any;

  abstract createInsurance(): IInsurance;

  saveHistory(ins: IInsurance) {
    this.db.save(ins.id, ins.status);
  }
}

class TFInsuranceFactory extends InsuranceFactory {
  createInsurance(): TFInsurance {
    return new TFInsurance();
  }
}

class ABInsuranceFactory extends InsuranceFactory {
  createInsurance(): ABInsurance {
    return new ABInsurance();
  }
}

const tfInsuranceFactory = new TFInsuranceFactory();
const tfIns = tfInsuranceFactory.createInsurance();
tfInsuranceFactory.saveHistory(tfIns);

// Альтернативный способ создания фабрики
const INSURANCE_TYPE = {
  tf: TFInsurance,
  ab: ABInsurance,
};

type IType = typeof INSURANCE_TYPE;

class InsuranceFactoryAlt {
  // Альтернативная фабрика
  db: any;

  createInsurance<T extends keyof IType>(type: T): IType[T] {
    return INSURANCE_TYPE[type];
  }

  saveHistory(ins: IInsurance) {
    this.db.save(ins.id, ins.status);
  }
}

const insuranceFactoryAlt = new InsuranceFactoryAlt();
const abIns = new (insuranceFactoryAlt.createInsurance("ab"))();
insuranceFactoryAlt.saveHistory(abIns);
