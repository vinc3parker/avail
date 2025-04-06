import express from "express";
import cors from "cors";
import { AppDataSource } from "./config/data-source";
import authRoutes from "./routes/auth";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", authRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected ✅");
    app.listen(4000, () =>
      console.log("Server running on http://localhost:4000")
    );
  })
  .catch((err) => {
    console.error("Database connection failed ❌", err);
  });
