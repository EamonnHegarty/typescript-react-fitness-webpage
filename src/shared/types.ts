export enum SelectedPage {
  Home = "home",
  Benfits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
