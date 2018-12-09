import React from 'react';
import { 
          createStackNavigator, 
          createAppContainer
} from 'react-navigation';

import RestrList from './RestrList'
import RestrForm from './RestrForm';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View>
//         <RestrList />
//       </View>
//     );
//   }
// }

const RootStack = createStackNavigator({
  form: {screen: RestrForm},
  list: {screen: RestrList},
});

const App = createAppContainer(RootStack);

export default App;