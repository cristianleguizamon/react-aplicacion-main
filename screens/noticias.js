import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image,TextInput,TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Noticia Tecnicas nº2</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Publicar</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.textotres}
        placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
         and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      />
      <TextInput
        style={styles.textotres}
        placeholder="publicar nueva noticia"
      />
      <TextInput
        style={styles.textotres}
        placeholder="publicar nueva noticia"
      />
      <TextInput
        style={styles.textotres}
        placeholder="publicar nueva noticia"
      />
      <TextInput
        style={styles.textotres}
        placeholder="publicar nueva noticia"
      />
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
    marginTop: 10,
    height:90,
    textAlign:'center',
    fontWeight: 'bold',
    fontSize:20,
  },
  button: {
    backgroundColor: '#1565C0',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginTop:20,  
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