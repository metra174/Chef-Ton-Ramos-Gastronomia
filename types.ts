
export interface MenuItem {
  name: string;
  price: number;
}

export interface MenuSectionData {
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

export interface CateringPackage {
  id: string;
  name: string;
  pricePerPerson: number;
  description: string;
}

export interface OrderState {
  customerName: string;
  phoneNumber: string;
  eventDate: string;
  selectedPackageId: string;
  peopleCount: number;
  extraItems: { [itemName: string]: number };
}
