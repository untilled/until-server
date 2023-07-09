import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle("Until-Server API Docs")
    .setDescription("Until 서버 API 문서")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api-docs", app, document);
}