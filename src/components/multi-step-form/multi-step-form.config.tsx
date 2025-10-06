export const stepConfig = [
  {
    id: 1,
    title: "Personal Details",
    fields: [
      {
        name: "firstName",
        label: "First Name",
        placeholder: "Ex: John",
        type: 'text',
        required: true,
      },
      {
        name: "lastName",
        label: "Last Name",
        placeholder: "Ex: John",
        type: 'text',
        required: true,
      },
    ],
  },
  {
    id: 2,
    title: "Address",
    fields: [
      {
        name: "address",
        label: "Address",
        placeholder: "123 Baker Street",
        type: 'text',
        required: true,
      },
      { name: "city", label: "City", placeholder: "London", type: 'text', required: true },
      {
        name: "zip",
        label: "ZIP / Postal code",
        placeholder: "NW1 6XE",
        type: 'text',
        required: false,
      },
    ],
  },
];
