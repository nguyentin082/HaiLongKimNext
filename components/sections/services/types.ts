export type ServiceBadgeVariant = 'accent' | 'primary';

export type ServiceBadge = {
  label: string;
  variant: ServiceBadgeVariant;
};

export type ServiceItem = {
  category: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  alt: string;
  badge?: ServiceBadge;
  buttonText: string;
  buttonLink: string;
};