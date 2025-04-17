interface UserName {
  firstname: string;
  lastname: string;
}

interface UserAddress {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: { lat: string; long: string };
}

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  phone: string;
  name: UserName;
  address: UserAddress;
}
