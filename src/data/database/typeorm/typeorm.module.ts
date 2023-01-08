import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import enviroments from 'enviroments';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: enviroments.DB_HOST,
        port: enviroments.DB_PORT,
        username: enviroments.DB_USER,
        password: enviroments.DB_PASS,
        database: enviroments.DB_NAME,
        autoLoadEntities: true,
        synchronize: false,
    })]
})
export class TypeormModule { }
