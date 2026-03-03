export interface registerPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  data?: {
    user: {
      id: 0;
      name: string;
      email: string;
      phone: string;
      avatar: string;
      latitude: number;
      longitude: number;
      createdAt: string;
    };
    token: string;
  };
}

export interface loginPayload {
  email: string;
  password: string;
}

export interface loginResponse {
  success: boolean;
  message: string;
  data?: {
    user: {
      id: 0;
      name: string;
      email: string;
      phone: string;
      avatar: string;
      latitude: number;
      longitude: number;
      createdAt: string;
    };
    token: string;
  };
}
