import { Entity, ObjectId, ObjectIdColumn, Column } from 'typeorm';

@Entity('messages')
export class Messages {
  @ObjectIdColumn() id: ObjectId;
  @Column() name: string;
  @Column() animalType: string;
  @Column() pictureUrl?: string;
  @Column() birthDate?: Date;

  constructor(message?: Partial<Messages>) {
    Object.assign(this, message);
  }
}