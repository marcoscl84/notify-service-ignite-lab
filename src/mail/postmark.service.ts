/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { MailService } from './mail.service';

@Injectable()
export class PostMark implements MailService {
  sendEmail(): string {
    return 'Postmark Mail Service!';
  }
}
