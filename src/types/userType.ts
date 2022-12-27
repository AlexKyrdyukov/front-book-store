export type UserType = {
  email?: string;
  id?: number;
  fullName?: string | null;
  avatar?: string | null;
};

export type SignUpType = {
  email: string;
  password: string;
};

export type SignUpPostType = {
  message: string;
  token: string;
  user: {
    email: string;
    id: number;
    fullName?: string | null;
  };
};

export type GetUserType = {
  user: {
    email: string;
    id: number;
    fullName?: string | null;
    avatar?: string | null;
  };
};
