import { Module } from '@nestjs/common';
import { CartModule } from './cart/cart.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './auth/jwt.strategy';
@Module({
imports: [CartModule, PassportModule.register({
defaultStrategy: 'jwt' })],
providers: [JwtStrategy],
})
export class AppModule {}