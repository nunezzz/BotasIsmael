import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors({
    origin: 'http://localhost:3001', // Ajusta esto al puerto del frontend 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
  }));

  await app.listen(3000); // El puerto en el que escucha tu API 
  console.log("Application is running on: ${await app.getUrl()}"); 
}
bootstrap();
