export type Class =
  | "Barbarian"
  | "Bard"
  | "Cleric"
  | "Druid"
  | "Fighter"
  | "Monk"
  | "Paladin"
  | "Ranger"
  | "Rogue"
  | "Sorcerer"
  | "Warlock"
  | "Wizard";

export type Race =
  | "Dragonborn"
  | "Dwarf"
  | "Elf"
  | "Gnome"
  | "Half-Elf"
  | "Half-Orc"
  | "Halfling"
  | "Human"
  | "Tiefling";

export type Alignment =
  | "chaotic-neutral"
  | "chaotic-evil"
  | "chaotic-good"
  | "lawful-neutral"
  | "lawful-evil"
  | "lawful-good"
  | "neutral"
  | "neutral-evil"
  | "neutral-good";

export type Stats = {
  STR: number;
  DEX: number;
  CON: number;
  INT: number;
  WIS: number;
  CHA: number;
};
export interface Player {
  name: string;
  charName: string;
  level: number;
  class: Class;
  race: Race;
  background: string;
  xp: number;
  alignment: Alignment;
  subclass: string;
  statsRolled: Stats;
}
