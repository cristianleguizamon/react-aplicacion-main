import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image,TextInput,TouchableOpacity} from 'react-native';


export default function login() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.texto}>Binvenidos</Text>
      <Text style={styles.textodos}>Escuela Tecnica nº2 "Ing Emilio Rebuelto</Text>
      <Image style={styles.logo} source={require('../assets/React.webp')}/>
      <TextInput
        style={styles.textotres}
        placeholder="Usuario"
        
      />
       <TextInput
        style={styles.textotres}
        placeholder="Contraseña"
        secureTextEntry
       
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2}
      onPress={()=>navigator.navigate("registrarse")}>
        <Text style={styles.buttonText2}>¿Todavía no tienes cuenta? Registrarse</Text>
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
  textodos:{
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
    textAlign:'center',
    fontWeight: 'bold',
  },
  logo:{
    width:350,
    height:300,
    
  },
  textotres: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    marginTop:10,
  },
  button: {
    backgroundColor: '#1565C0',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginTop:10,
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
  registerText: {
    color: 'white',
    fontSize: 14,
  
  },
  button2:{
    marginTop:10,
  }  
});