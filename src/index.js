import dva from 'dva';
import createLoading from 'dva-loading';
import './index.css';

// 1. Initialize
const app = dva();


// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
// app.model(require('./models/example'));
app.model(require('./models/users'));

app.model(require("./models/detail"));

app.model(require("./models/techs"));

app.model(require("./models/lists"));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');