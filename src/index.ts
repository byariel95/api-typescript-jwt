
import app from './app';

async function runserver (){
    await app.listen(app.get('port'));
   console.log(`Listening on http://localhost:${app.get('port')}`);
};

runserver();


 