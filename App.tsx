
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const titre = "Mon Catalogue";
  const nombreDisponibles = 3;
  const valeurTotaleStock = 1960;

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>{titre}</Text>

      <Text style={styles.info}>
        Nombre de produits disponibles : {nombreDisponibles}
      </Text>

      <Text style={styles.info}>
        Valeur totale du stock : {valeurTotaleStock} MAD
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  titre: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});
