// expressApp is same as 'app'
import expressApp from './index';
import appRoutes from './Api/index';
import User from '../shared/db/models/User'




const Port = process.env.PORT || 9000;

// if sync option is true, then synchronizing the database with the models.
if(process.env.SYNC === "true"){
    User.sync();
}
// initializing a routes function.
appRoutes(expressApp);


expressApp.listen(Port, () => console.log(`Server is running on port ${Port}`));