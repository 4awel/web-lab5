import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthController {
  @Get('health')
  getHealth() {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }
  
  @Get()
  getRoot() {
    return { status: 'ok', message: 'Auth API is running' };
  }
}
