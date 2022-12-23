export class NotificationNotFound extends Error {
    constructor(){
        // chama constructor da classe Error
        super('Notificarion not found') 
    }
}