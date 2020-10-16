import moment from 'moment';
const membersData = [
  {
    _id: 'aec2b69e-7e98-418a-9889-889be9df628a',
    username: 'adheteguh',
    firstName: 'Adhe',
    lastName: 'Teguh',
    organizationName: 'xendit',
    avatarUrl: 'https://avatar-example.com/avatar.jpg',
    followers: [
      {
        username: 'janedoe',
        followAt: moment().add(1, 'day').format(),
      },
      {
        username: 'johndoe',
        followAt: moment().add(1, 'day').format(),
      },
      {
        username: 'foobar',
        followAt: moment().add(2, 'day').format(),
      },
      {
        username: 'hunterdaniel',
        followAt: moment().add(2, 'day').format(),
      },
      {
        username: 'lenoredaniel',
        followAt: moment().add(2, 'day').format(),
      },
    ],
    followings: [
      {
        username: 'janedoe',
        followAt: moment().add(1, 'day').format(),
      },
    ],
    isDeleted: false,
    createdAt: moment().format(),
  },
  {
    _id: 'aec2b69e-7e98-418a-9889-889be9df628b',
    username: 'johndoe',
    firstName: 'John',
    lastName: 'Doe',
    organizationName: 'github',
    avatarUrl: 'https://avatar-example.com/avatar1.jpg',
    followers: [
      {
        username: 'janedoe',
        followAt: moment().add(2, 'day').format(),
      },
      {
        username: 'lenoredaniel',
        followAt: moment().add(2, 'day').format(),
      },
    ],
    followings: [
      {
        username: 'janedoe',
        followAt: moment().add(2, 'day').format(),
      },
    ],
    isDeleted: false,
    createdAt: moment().format(),
  },
  {
    _id: 'aec2b69e-7e98-418a-9889-889be9df628c',
    username: 'janedoe',
    firstName: 'Jane',
    lastName: 'Doe',
    organizationName: 'xendit',
    avatarUrl: 'https://avatar-example.com/avatar2.jpg',
    followers: [],
    followings: [],
    isDeleted: false,
    createdAt: moment().format(),
  },
  {
    _id: 'aec2b69e-7e98-418a-9889-889be9df628d',
    username: 'foobar',
    firstName: 'Foo',
    lastName: 'Bar',
    organizationName: 'xendit',
    avatarUrl: 'https://avatar-example.com/avatar3.jpg',
    followers: [
      {
        username: 'janedoe',
        followAt: moment().add(2, 'day').format(),
      },
      {
        username: 'lenoredaniel',
        followAt: moment().add(2, 'day').format(),
      },
      {
        username: 'deannmcleod',
        followAt: moment().add(2, 'day').format(),
      },
    ],
    followings: [
      {
        username: 'janedoe',
        followAt: moment().add(2, 'day').format(),
      },
      {
        username: 'lenoredaniel',
        followAt: moment().add(2, 'day').format(),
      },
      {
        username: 'deannmcleod',
        followAt: moment().add(2, 'day').format(),
      },
    ],
    isDeleted: false,
    createdAt: moment().format(),
  },
  {
    _id: 'aec2b69e-7e98-418a-9889-889be9df628e',
    username: 'deannmcleod',
    firstName: 'Deann',
    lastName: 'Mcleod',
    organizationName: 'xendit',
    avatarUrl: 'https://avatar-example.com/avatar4.jpg',
    followers: [
      {
        username: 'janedoe',
        followAt: moment().add(2, 'day').format(),
      },
      {
        username: 'lenoredaniel',
        followAt: moment().add(2, 'day').format(),
      },
    ],
    followings: [],
    isDeleted: false,
    createdAt: moment().format(),
  },
  {
    _id: 'aec2b69e-7e98-418a-9889-889be9df628f',
    username: 'hunterdaniel',
    firstName: 'Hunter',
    lastName: 'Daniel',
    organizationName: 'xendit',
    avatarUrl: 'https://avatar-example.com/avatar5.jpg',
    followers: [
      {
        username: 'foobar',
        followAt: moment().add(2, 'day').format(),
      },
      {
        username: 'janedoe',
        followAt: moment().add(1, 'day').format(),
      },
    ],
    followings: [
      {
        username: 'johndoe',
        followAt: moment().add(1, 'day').format(),
      },
      {
        username: 'foobar',
        followAt: moment().add(2, 'day').format(),
      },
      {
        username: 'hunterdaniel',
        followAt: moment().add(2, 'day').format(),
      },
    ],
    isDeleted: false,
    createdAt: moment().format(),
  },
  {
    _id: 'aec2b69e-7e98-418a-9889-889be9df628g',
    username: 'susieseasley',
    firstName: 'Susie',
    lastName: 'Beasley',
    organizationName: 'xendit',
    avatarUrl: 'https://avatar-example.com/avatar6.jpg',
    followers: [
      {
        username: 'foobar',
        followAt: moment().add(2, 'day').format(),
      },
      {
        username: 'lenoredaniel',
        followAt: moment().add(2, 'day').format(),
      },
      {
        username: 'hunterdaniel',
        followAt: moment().add(2, 'day').format(),
      },
    ],
    followings: [
      {
        username: 'foobar',
        followAt: moment().add(2, 'day').format(),
      },
      {
        username: 'hunterdaniel',
        followAt: moment().add(2, 'day').format(),
      },
    ],
    isDeleted: false,
    createdAt: moment().format(),
  },
  {
    _id: 'aec2b69e-7e98-418a-9889-889be9df628h',
    username: 'lenoredaniel',
    firstName: 'Lenore',
    lastName: 'Daniel',
    organizationName: 'github',
    avatarUrl: 'https://avatar-example.com/avatar7.jpg',
    followers: [],
    followings: [
      {
        username: 'foobar',
        followAt: moment().add(2, 'day').format(),
      },
      {
        username: 'hunterdaniel',
        followAt: moment().add(2, 'day').format(),
      },
    ],
    isDeleted: false,
    createdAt: moment().format(),
  },
  {
    _id: 'aec2b69e-7e98-418a-9889-889be9df628i',
    username: 'Carey Daniel',
    firstName: 'Carey',
    lastName: 'Daniel',
    organizationName: 'xendit',
    avatarUrl: 'https://avatar-example.com/avatar8.jpg',
    followers: [
      {
        username: 'foobar',
        followAt: moment().add(2, 'day').format(),
      },
    ],
    followings: [],
    isDeleted: false,
    createdAt: moment().format(),
  },
  {
    _id: 'aec2b69e-7e98-418a-9889-889be9df628j',
    username: 'Carey Daniel',
    firstName: 'Carey',
    lastName: 'Daniel',
    organizationName: 'xendit',
    avatarUrl: 'https://avatar-example.com/avatar9.jpg',
    followers: [
      {
        username: 'johndoe',
        followAt: moment().add(1, 'day').format(),
      },
      {
        username: 'foobar',
        followAt: moment().add(2, 'day').format(),
      },
    ],
    followings: [
      {
        username: 'foobar',
        followAt: moment().add(2, 'day').format(),
      },
    ],
    isDeleted: false,
    createdAt: moment().format(),
  },
];

export { membersData };
