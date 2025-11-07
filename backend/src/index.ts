import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 4000;

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'facilityflow-backend' });
});

app.listen(port, () => {
  console.log(`FacilityFlow backend is running on port ${port}`);
});
