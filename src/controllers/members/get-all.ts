import { NextFunction, Request, Response } from 'express';
import Member from '../../models/member';
import createError from 'http-errors';
import logger from '../../utils/logger';

const getAllMembers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { organizationName } = req.params;

    const members: any = await Member.aggregate([
      { $match: { organizationName: organizationName, isDeleted: false } },
      {
        $addFields: {
          followers: { $size: { "$ifNull": ["$followers", []] } },
          followings: { $size: { "$ifNull": ["$followings", []] } },
        }
      },
      {
        $sort: { "followers": -1 }
      }
    ]).exec();

    const responseMembers: any[] = members.map((member: any) => {
      return {
        id: member._id,
        login: member.username,
        organizationName: member.organizationName,
        avatarUrl: member.avatarUrl,
        followers: member.followers,
        followings: member.followings,
        createdAt: member.createdAt,
      };
    });

    logger.info('Get all members success', { params: req.params });
    return res.status(200).json(responseMembers);
  } catch (error) {
    const message = 'Error when get all members';
    logger.error(message, { params: req.params, error: `${error}` });
    return next(createError(500, message + `${error}`));
  };
};

export default getAllMembers;