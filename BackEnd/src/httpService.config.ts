import { Injectable } from "@nestjs/common";
import { HttpModuleOptions, HttpModuleOptionsFactory} from '@nestjs/axios'

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory{
    createHttpOptions(): HttpModuleOptions{
        return {
            headers: {
                'Authorization': 'Bearer EAALbL4qQrfkBAJk2alHPFgcVQSW9P8uUjXZCFvuxnQlfILmiqftw639JK7GvaJJQLwtSxvCpA8J50NzG3PZAPrLBPCZCPZAZAPcn8mlTmABMjIgMrv7xMzeyiM4ZCjsPvBPsy5jQ66hssBuwNncNI23z9mhL9SwwDbVI054Rw1F0C8hxEh5zeBVO8XolqeYLc8gKZAgFEiKw4J1yTAUDkcET8PuWG1KV2gZD',
                'Content-Type': 'application/json'
            }
        }
    }
}