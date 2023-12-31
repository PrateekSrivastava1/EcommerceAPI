import app from './index.js';
import { connectUsingMongoose } from './src/config/mongooseConfig.js';

// Server initialization
app.listen(3200, () => {
  console.log('server is listening at port 3200');
  connectUsingMongoose();
});
