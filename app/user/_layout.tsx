import { createDrawerNavigator } from '@react-navigation/drawer'
import { Text, View } from 'react-native';

function UserProfileDrawerItem() {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

function UserSettingsDrawerItem() {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

export default function UserDrawerLayout() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="profile" component={UserProfileDrawerItem}/>
      <Drawer.Screen name="parameters" component={UserSettingsDrawerItem}/>
    </Drawer.Navigator>
  )
}