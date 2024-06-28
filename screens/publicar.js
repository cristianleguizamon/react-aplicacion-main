import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image,TextInput,TouchableOpacity} from 'react-native';
import dbfire from '../database/db';
import { getFirestore,addDoc,collection } from 'firebase/firestore';

const base = getFirestore (dbfire)

export default function App(navigation) {
const initialState={
  noticia:'',
}
const [state, setState] = useState(initialState)
const handleChangeText = (value, name) => {
  setState({...state,[name]:value})
}
const publicarNoticia = async () => {
  await addDoc (collection(base,'noticia'), {
    ...state
  })
}
 


  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Ingrese una Noticia</Text>

      <TextInput
        style={styles.textotres}
        placeholder="publicar nueva noticia"
        onChangeText={(value) =>handleChangeText(value,'noticia') }
        value={state.noticia}
        
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Publicar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Noticias</Text>
      </TouchableOpacity>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D47A1',
    padding: 20,
    justifyContent: 'center',
    },
  texto:{
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign:'center',
  
  },
  textotres: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    marginTop:30,
    height:300,
    textAlign:'center',
    fontWeight: 'bold',
    fontSize:20,
  },
  button: {
    backgroundColor: '#1565C0',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginTop:30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText2: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});