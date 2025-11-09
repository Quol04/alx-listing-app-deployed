import { ReactNode } from "react";

export interface PropertyProps{
    name: string;
    address: {
        state: string;
        city: string;
        country: string;
      };
      rating: number;
      category: string[];
      price: number;
      offers: {
        bed: string;
        shower: string;
        occupants: string;
      };
      image: string;
      description: string;
      discount: string;

}

export interface LayoutProps {
    children: ReactNode;
  }

export interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'white' | 'blue' | 'orange' | 'green'
  action?: () => void
}

export interface BookingDetails {
  propertyName: string;
  startDate: string;
  totalNights: number;
  bookingFee: number;
  price: number;
}

export interface Review {
  avatar: string;
  name: string;
  rating: number;
  comment: string;
}

