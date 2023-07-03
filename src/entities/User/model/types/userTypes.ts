export interface User {
  id: string;
  username: string;
}

export interface UserWithToken extends User {
  token: string;
}

export interface UserState {
  authData?: UserWithToken;
}
