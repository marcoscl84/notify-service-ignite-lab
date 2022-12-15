import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { MailService } from './mail/mail.service';
// import { PostMark } from './mail/postmark.service';
import { SMTPMailService } from './mail/smtp-mail.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: MailService,
      useClass: SMTPMailService,
      // useClass: PostMark,
    },
  ],
})
export class AppModule {}
