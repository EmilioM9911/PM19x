import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profilemain from '../screens/profilemain';
import Detalle from '../screens/detalle';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Perfil" component={Profilemain} />
            <Stack.Screen name="Detalle" component={Detalle} />
        </Stack.Navigator>
    );
}
