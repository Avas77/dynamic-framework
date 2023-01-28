export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(402).json("This is not a post request");
  }
  if (req.body.driver === "yes") {
    res.status(200).json([
      { id: 1, inputType: "TEXT", label: "What is the name of your Vehicle?" },
      {
        id: 2,
        inputType: "NUMBER",
        label: "At what age did you get your license?",
      },
    ]);
  }
  if (req.body.driver === "no") {
    res.status(200).json([
      {
        id: 1,
        inputType: "SELECT",
        label: "How will you be travelling?",
        options: [
          { value: "bus", label: "Bus" },
          { value: "walk", label: "Walking" },
          { value: "taxi", label: "Taxi" },
        ],
      },
      {
        id: 2,
        inputType: "CHECKBOX",
        label: "Do you want to contact us for a Vehicle?",
      },
    ]);
  }
}
