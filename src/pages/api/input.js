// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    { id: 1, inputType: "TEXT", label: "What is your Name?" },
    { id: 2, inputType: "NUMBER", label: "What is your Age?" },
    { id: 3, inputType: "CHECKBOX", label: "Are you a driver?" },
  ]);
}
