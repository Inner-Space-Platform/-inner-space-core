import express from 'express';

startServer().catch((err) => {
  console.error(err);
  process.exit(1);
});

/**
 * Starts the server
 */
async function startServer() {
  const app = express();
  const port = process.env.PORT || 3000;

  // Add middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Start the server
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
}
