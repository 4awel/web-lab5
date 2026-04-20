import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() body: { email: string; password: string }) {
    try {
      const result = await this.authService.register(body.email, body.password);
      return { success: true, data: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: { email: string; password: string }) {
    try {
      const result = await this.authService.login(body.email, body.password);
      return { success: true, data: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(@Body() body: { refreshToken: string }) {
    try {
      const result = await this.authService.refresh(body.refreshToken);
      return { success: true, data: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Body() body: { userId: string }) {
    try {
      await this.authService.logout(body.userId);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
