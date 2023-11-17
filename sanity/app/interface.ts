export interface SimplifaiedProduct {
  _id: string;
  name: string;
  slug: string;
  price: number;
  imageUrl: string;
  categoryName: string;
}
export interface fullProduct {
  _id: string;
  name: string;
  slug: string;
  price: number;
  images: any;
  categoryName: string;
  description: string;
  price_id: string;
}
