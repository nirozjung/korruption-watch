import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {LeadersModule} from './leaders/leaders.module'


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'corruption-watch.db',
            autoLoadEntities: true,
            synchronize: true,
            logging: true,
        }),

        // Postgres connxn
        // TypeOrmModule.forRoot({
        //     type: 'postgres',
        //     host: process.env.DB_HOST || 'localhost',
        //     port: Number(process.env.DB_PORT) || 5432,
        //     username: process.env.DB_USER || 'postgres',
        //     password: process.env.DB_PASS || 'postgres',
        //     database: process.env.DB_NAME || 'corruption_watch',
        //     entities: [Leader, Party, CorruptionCase],
        //     synchronize: true, // disable in production and use migrations
        // }),
        LeadersModule,
    ],
})
export class AppModule {
}
