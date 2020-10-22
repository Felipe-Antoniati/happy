import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import HomeSociety from "./HomeSociety";

@Entity("images")
export default class Image {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => HomeSociety, (home_society) => home_society.images)
  @JoinColumn({ name: "home_society_id" })
  home_society: HomeSociety;
}
