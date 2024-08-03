type Profile = {
  $schema: string;
  avatar: string;
  username: string;
  bio: string;
  location?: string;
  readme?: string;
  socialAccounts: {
    dribbble?: string;
    facebook?: string;
    github?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
    website?: string;
    mail?: string;
  };
  banner?: {
    title: string;
    text: string;
  };
  opensource: {
    url: string;
    title: string;
  }[];
  privateRepos: {
    url: string;
    title: string;
  }[];
  rss?: string;
};

export default Profile;
