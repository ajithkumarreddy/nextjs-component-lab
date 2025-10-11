type FieldType = "text";

export type Field = {
  name: string;
  label: string;
  placeholder?: string;
  type: FieldType;
  required?: boolean;
};

export type Step = {
  id: number;
  title: string;
  fields: Field[];
};
