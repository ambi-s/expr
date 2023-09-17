import { create, all } from "mathjs";

export const config = create(all, {
  number: "BigNumber"
});

export default function parse(input: string): string {
  return input;
}
