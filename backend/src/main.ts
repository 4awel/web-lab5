import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Настройка CORS для всех источников (для продакшена)
  app.enableCors({
    origin: true, // Разрешить все источники
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    exposedHeaders: ['Authorization'],
  });
  
  // Railway передает порт через переменную PORT
  const port = process.env.PORT || 3000;
  
  // ВАЖНО: слушаем на 0.0.0.0, а не на localhost
  await app.listen(port, '0.0.0.0');
  
  console.log(`✅ Application is running on port ${port}`);
  console.log(`✅ CORS enabled for all origins`);
}
bootstrap();
