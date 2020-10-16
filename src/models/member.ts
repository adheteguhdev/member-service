import * as mongoose from 'mongoose';
import moment from 'moment';
import { v4 } from 'uuid';
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
  _id: { type: String, default: v4 },
  username: { type: String, trim: true },
  firstName: { type: String, trim: true },
  lastName: { type: String, trim: true },
  organizationName: { type: String, index: true },
  avatarUrl: { type: String },
  followers: [{
    username: { type: String },
    followAt: { type: Date },
    _id: false
  }],
  followings: [{
    username: { type: String },
    followAt: { type: Date },
    _id: false
  }],
  isDeleted: { type: Boolean, default: false, index: true },
  createdAt: { type: Date, default: moment().format() },
}, {
  collection: "member",
  toJSON: {
    virtuals: true,
    versionKey: false,
    transform: (_, member) => {
      member.id = member._id;
      delete member._id;
      delete member.isDeleted;
    }
  }
});

const Member = mongoose.model('Member', MemberSchema);

export default Member;
