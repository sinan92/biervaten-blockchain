import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.acme.biervaten{
   export class Address {
      city: string;
      country: string;
      street: string;
      zipcode: string;
   }
   export class UnitPrice {
      productType: ProductType;
      price: number;
   }
   export abstract class Business extends Participant {
      email: string;
      address: Address;
   }
   export enum Volume {
      FIFTY,
      THIRTY,
   }
   export enum ProductType {
      FIFTY_LITER_OLD,
      THIRTY_LITER_OLD,
      FIFTY_LITER_NEW,
      THIRTY_LITER_NEW,
   }
   export class Shipment extends Asset {
      shipmentId: string;
      bought: ProductType[];
      sold: ProductType[];
      notificationDate: Date;
      contract: Contract;
   }
   export class SetupDemo extends Transaction {
   }
   export abstract class ShipmentTransaction extends Transaction {
      shipment: Shipment;
   }
   export class ShipmentReceived extends ShipmentTransaction {
   }
   export class Brewery extends Business {
   }
   export class Cafe extends Business {
   }
   export class Barrel extends Asset {
      barcode: string;
      volume: Volume;
      expireDate: Date;
   }
   export class Contract extends Asset {
      contractId: string;
      brewery: Brewery;
      cafe: Cafe;
      arrivalDateTime: Date;
      unitPrice: UnitPrice[];
   }
// }
