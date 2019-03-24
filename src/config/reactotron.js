import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = process.env.NODE_ENV === 'development'
  ? Reactotron.configure({ name: 'To Do Redux' })
    .use(reactotronRedux())
    .connect()
  : null;

if (process.env.NODE_ENV === 'development') reactotron.clear();

export default reactotron;
