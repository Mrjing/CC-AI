import { Global, Module } from '@nestjs/common';
import { AsrController } from './asr.controller';

@Global()
@Module({
  controllers: [AsrController],
})
export class AsrModule { }
