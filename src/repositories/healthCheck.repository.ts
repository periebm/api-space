import { IHealthCheckRepository } from '../features/healthCheck/IHealthCheck.repository';

class HealthCheckRepository implements IHealthCheckRepository {

  async oracleHealth(): Promise<number | unknown> {

    try {

      return true;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
}

const healthCheckRepository = new HealthCheckRepository();

export default healthCheckRepository;