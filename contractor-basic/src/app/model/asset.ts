import { Iasset } from "../listing/Iasset.Interface";

export class Asset implements Iasset{
  id!: Number;
  SellRent!: String;
  Name!: string;
  AType!: string;
  BHK!: number;
  FType!: string;
  Price!: number;
  BuiltArea!: number;
  CarpetArea?: number;
  Address!: string;
  Address2?: string;
  City!: String;
  FloorNo?: string;
  TotalFloor?: string;
  RTM!: number;
  AOP?: string;
  MainEntrance?: string;
  Security?: number;
  Gated?: number;
  Maintenance?: number;
  Possession?: string;
  Image?: string;
  Description?: string;
  PostedOn!: string;
  PostedBy!: number;
  Contact!: string;
}
