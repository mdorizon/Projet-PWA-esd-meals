import { createDrawerNavigator } from '@react-navigation/drawer'
import UserProfile from './profile';
import UserParameters from './parameters';

export default function UserDrawerLayout() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="profile" component={UserProfile}/>
      <Drawer.Screen name="parameters" component={UserParameters}/>
    </Drawer.Navigator>
  )
}