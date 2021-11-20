import { allRoutes } from './routes';

export default function appRoutes(app){
    app.use('/dollar/server', allRoutes)
}