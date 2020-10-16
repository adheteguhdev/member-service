import Member from '../models/member';
import logger from './logger';
import { membersData } from '../test/data/member';

const initData = async () => {
  const totalMember = await Member.countDocuments();

  if (totalMember === 0) {
    try {
      logger.info('Initializing data...');
      await Member.create(membersData);
      logger.info('Data initialization complete');
    } catch (error) {
      logger.error('Error when initialize data', { error: `${error}` });
    }
  }
};

export default initData;
