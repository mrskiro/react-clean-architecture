import express from "express";

const app = express();

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const companies = Array.from({ length: 100 }).map((_, i) => ({
  id: i + 1,
  name: `company-${i + 1}`,
  employees: [
    {
      id: 1,
      name: `employee-1`,
      createdAt: "2021-01-01",
    },
    {
      id: 2,
      name: `employee-2`,
      createdAt: "2021-01-01",
    },
  ],
  createdAt: "2021-01-01",
}));

app.get("/companies", (_, res) => {
  res.setHeader("content-type", "application/json");
  res.send({
    companies,
  });
});

app.listen(3000);
