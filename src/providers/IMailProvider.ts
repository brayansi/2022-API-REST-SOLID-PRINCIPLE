export interface IAdress {
  name: string;
  email: string;
}

export interface IMessage {
  to: IAdress;
  from: IAdress;
  subject: string;
  body: string;
}

export interface IMailProvider {
  sendEmail(message: IMessage): Promise<void>;
}