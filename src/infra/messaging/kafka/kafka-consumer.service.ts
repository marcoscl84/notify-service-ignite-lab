import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export default class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
    constructor(){
        super({
            /* https://console.upstash.com/kafka/2ef9457b-d362-4487-88af-b703934baff4 */
            client: {
                clientId: 'notifications',
                brokers: ['boss-badger-13230-us1-kafka.upstash.io:9092'],
                sasl: {   
                    mechanism: 'scram-sha-256',
                    username: 'Ym9zcy1iYWRnZXItMTMyMzAktyl_LzDjJEZeMOSlruB5aHJPtJnalpxz_TO4leM',
                    password: 'b427564778f04d5f8fc594ccaac74729'
                },
                ssl: true,
            }
        })
    }
    onModuleDestroy() {
        throw new Error("Method not implemented.");
    }

    async OnModuleDestroy(){
        await this.close()
    }
}