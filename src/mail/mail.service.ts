import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendOrgRegistration(email: string, message: string) {
    await this.mailerService.sendMail({
      to: email,
      from: 'noreply@example.com',
      subject: 'Organization Registration',
      context: {
        name: email,
        message,
      },
    });
  }
}
