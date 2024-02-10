// import 'dotenv/config';
import { App } from './app/app.module';

const port = Number(process.env.PORT) || null;

const app = new App({ port });

app.run();