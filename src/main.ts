import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
const app = await NestFactory.create(AppModule);
app.useGlobalPipes(new ValidationPipe());
await app.listen(3003);
console.log(`Cart Service is running on:
http://localhost:3003`);
}
bootstrap();