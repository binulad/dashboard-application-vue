export class Products {
  public id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;

  constructor(
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: Rating
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
    this.rating = rating;
  }
}

export class EditProducts {
  public id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;

  constructor(
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
    category: string,
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
    this.category = category;
  }
}
export class AddProducts {
  title?: string;
  price?: number;
  description?: string;
  image?: string;
  category?: string;

  constructor(
    title?: string,
    price?: number,
    description?: string,
    image?: string,
    category?: string,
  ) {
    this.title = title || "";
    this.price = price;
    this.description = description || "";
    this.image = image || "";
    this.category = category || "";
  }
}

export class Rating {
  rate?: number;
  count?: number;

  constructor(rate?: number, count?: number) {
    this.rate = rate || 0;
    this.count = count || 0;
  }
}
