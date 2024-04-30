export type Option = {
  id: number;
  label: string;
};
const cycle1: Option[] = [
  { id: 1, label: "Option 1" },
  { id: 2, label: "Option 2" },
  { id: 3, label: "Option 3" },
];

const cycle2: Option[] = [
  { id: 1, label: "Option 11" },
  { id: 2, label: "Option 22" },
  { id: 3, label: "Option 33" },
];

const cycle3: Option[] = [
  { id: 1, label: "Option 111" },
  { id: 2, label: "Option 222" },
  { id: 3, label: "Option 333" },
];

const cycle4: Option[] = [
  { id: 1, label: "Option 1111" },
  { id: 2, label: "Option 2222" },
  { id: 3, label: "Option 3333" },
];

const cycle5: Option[] = [
  { id: 1, label: "Option 11111" },
  { id: 2, label: "Option 22222" },
  { id: 3, label: "Option 333333" },
];
export const optionsCyc: Option[][] = [cycle1, cycle2, cycle3];
export const resultsObj = {
  111: "apple",
  112: "banana",
  113: "cherry",
  121: "date",
  122: "elderberry",
  123: "fig",
  131: "grape",
  132: "honeydew",
  133: "kiwi",
  211: "lemon",
  212: "mango",
  213: "nectarine",
  221: "orange",
  222: "pear",
  223: "quince",
  231: "raspberry",
  232: "strawberry",
  233: "tangerine",
  311: "ugli fruit",
  312: "vanilla",
  313: "watermelon",
  321: "xigua",
  322: "yuzu",
  323: "zucchini",
  331: "apricot",
  332: "blueberry",
  333: "cantaloupe",
};
