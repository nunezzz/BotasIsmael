import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryColumn({ name: 'id' })
  id: number;

  @Column({ name: 'nombre' })
  nombre: string;

  @Column({ name: 'correo' })
  correo: string;

  @Column({ name: 'password' })
  password: string;
}
