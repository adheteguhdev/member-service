import members from './members';

export = (app: any) => {
  app.use('/orgs', members);
};
