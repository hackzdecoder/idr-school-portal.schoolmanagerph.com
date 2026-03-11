import { documentationPath } from 'lib/constants';

export const rootPaths = {
  root: '/',
  authRoot: 'auth',
};

const paths = {
  root: rootPaths.root,
  management: `/management`,
  accounts: `/accounts`,
  monitoring: `/monitoring`,
  student_profile: `/student-profile`,
  profile: `/profile`,
  system_settings: `/system-settings`,

  login: `/${rootPaths.authRoot}/login`,
  signup: `/${rootPaths.authRoot}/sign-up`,
  notifications: `/notifications`,
  documentation: documentationPath,
  404: `/404`,
};

export default paths;
