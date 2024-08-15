import { app } from "./app";
import { databaseConnect } from "./database/client";

const port = process.env.PORT || 3001;

app.listen({ host: "0.0.0.0", port: Number(port) }, async () => {
  console.log(`API successfully started at port ${port}`);
  databaseConnect();
});

export default app;
