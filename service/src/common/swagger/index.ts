import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PORT, SWAGGERPREFIX, APIPREFIX } from '@/config/main';

const swaggerOptions = new DocumentBuilder()
  .setTitle('CC AI Team api document')
  .setDescription('CC AI TTeam api document')
  .setVersion('1.0.0')
  .addBearerAuth()
  .build();

export function createSwagger(app) {
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('/ccai/swagger/docs', app, document);
}
