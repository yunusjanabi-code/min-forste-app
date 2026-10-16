// import React from 'react';
// import { StyleSheet, View, Image } from 'react-native';

// export default function Oppgave2() {
//   return (
//     <View style={styles.container}>
//       {/* 1. Ditt lokale bilde fra mappen assets/images/bmw.png */}
//       <Image
//         source={require('../../assets/images/bmw.png')}                                
//         style={styles.image}
//       />

//       {}
//       <Image
//          source={require('../../assets/images/bmwm.png')}                                
//         style={styles.image}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,                      // Fyller hele skjermen
//     backgroundColor: '#ffffff',   // Hvit bakgrunn
//     justifyContent: 'center',     // Sentrerer bildene vertikalt (opp/ned)
//     alignItems: 'center',         // Sentrerer bildene horisontalt (høyre/venstre)
//     padding: 20,
//   },
//   image: {
//     width: 320,                   // Bredde på bildene
//     height: 200,                  // Høyde på bildene
//     marginVertical: 12,           // Luft/avstand mellom bildene
//     borderRadius: 8,              // Runder hjørnene litt
//     resizeMode: 'cover',          // Sørger for at bildet fyller ruten uten å strekkes skjevt
//   },
// });




// Oppgave 3
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput } from 'react-native';

// export default function Oppgave3() {
//   // Oppretter en state (minne-variabel) som holder på teksten du taster inn
//   const [passord, setPassord] = useState('');

//   return (
//     <View style={styles.container}>
//       {/* 1. Mørkt toppfelt (farge #373F51) med teksten 'Passord' */}
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Passord</Text>
//       </View>

//       <View style={styles.content}>
//         {/* 2. Inntastingsfeltet */}
//         <Text style={styles.label}>Skriv inn passordet ditt:</Text>
//         <TextInput
//           style={styles.input}
//           onChangeText={(tekst) => setPassord(tekst)} // Oppdaterer state når du skriver
//           value={passord}
//         />

//         {/* 3. Viser teksten og hva passordet er */}
//         <Text style={styles.resultText}>Passordet ditt er: {passord}</Text>

//         {/* 4. Beskjeden som kun vises dersom lengden på passordet er under 5 tegn */}
//         {passord.length < 5 && (
//           <Text style={styles.warningText}>Passordet må minst ha 5 tegn</Text>
//         )}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//   },
//   header: {
//     height: 90,
//     backgroundColor: '#373F51', // Toppfeltfargen oppgitt i oppgaven
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: 20,
//   },
//   headerText: {
//     color: '#ffffff',
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
//   content: {
//     padding: 24,
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//     marginTop: 20,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#777777',
//     paddingHorizontal: 10,
//     marginBottom: 40,
//   },
//   resultText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 80,
//   },
//   warningText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#000000',
//   },
// });







// Oppgave 4  
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// export default function Oppgave4() {
//   // Startverdien for telleren skal være 0
//   const [teller, setTeller] = useState(0);

//   // Funksjon for å øke telleren med 1
//   const okTeller = () => {
//     setTeller(teller + 1);
//   };

//   // Funksjon for å redusere telleren, men ALDRI la den bli mindre enn 0
//   const reduserTeller = () => {
//     if (teller > 0) {
//       setTeller(teller - 1);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Knappene for å øke og redusere */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={okTeller}>
//           <Text style={styles.buttonText}>Øk teller</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.button} onPress={reduserTeller}>
//           <Text style={styles.buttonText}>Reduser teller</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Feltet som viser telleren */}
//       <View style={styles.counterContainer}>
//         <Text style={styles.label}>Teller er:</Text>
//         <View style={styles.counterBox}>
//           <Text style={styles.counterText}>{teller}</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   buttonContainer: {
//     width: '100%',
//     alignItems: 'center',
//     marginBottom: 60,
//   },
//   button: {
//     backgroundColor: '#487281', // Blågrå knappefarge oppgitt i oppgaven
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//     width: 200,
//     alignItems: 'center',
//     marginVertical: 6,
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   counterContainer: {
//     alignItems: 'center',
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 12,
//   },
//   counterBox: {
//     backgroundColor: '#D8DBE2', // Lys grå bakgrunnsfarge oppgitt i oppgaven
//     width: 130,
//     height: 130,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   counterText: {
//     fontSize: 52,
//     fontWeight: 'bold',
//     color: '#000000',
//   },
// });



// Oppgave 5
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, ImageBackground, ActivityIndicator, TouchableOpacity } from 'react-native';

// export default function Oppgave5() {
//   const [byNavn, setByNavn] = useState('');
//   const [visningsNavn, setVisningsNavn] = useState('New York');
//   const [temperatur, setTemperatur] = useState<number | null>(13);
//   const [vaerBeskrivelse, setVaerBeskrivelse] = useState('Showers');
//   const [laster, setLaster] = useState(false);

//   // Funksjon for å oversette værkoder fra Open-Meteo til tekster
//   const tolkerVaerkode = (kode: number) => {
//     if (kode === 0) return 'Klart og sol';
//     if (kode >= 1 && kode <= 3) return 'Delvis skyet';
//     if (kode >= 45 && kode <= 48) return 'Tåke';
//     if (kode >= 51 && kode <= 67) return 'Regnbyger / Showers';
//     if (kode >= 71 && kode <= 77) return 'Snø';
//     if (kode >= 80 && kode <= 82) return 'Kraftig regn';
//     return 'Skiftende vær';
//   };

//   // Funksjon som henter værdata fra API
//   const hentVaer = async () => {
//     if (!byNavn.trim()) return;

//     setLaster(true);
//     try {
//       // 1. Hent koordinater (breddegrad og lengdegrad) for byen
//       const geoRes = await fetch(
//         `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(byNavn)}&count=1&language=no&format=json`
//       );
//       const geoData = await geoRes.json();

//       if (geoData.results && geoData.results.length > 0) {
//         const sted = geoData.results[0];
//         const lat = sted.latitude;
//         const lon = sted.longitude;

//         // 2. Hent temp og værkode ved hjelp av koordinatene
//         const vaerRes = await fetch(
//           `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
//         );
//         const vaerData = await vaerRes.json();

//         setVisningsNavn(sted.name);
//         setTemperatur(Math.round(vaerData.current_weather.temperature));
//         setVaerBeskrivelse(tolkerVaerkode(vaerData.current_weather.weathercode));
//         setByNavn('');
//       } else {
//         alert('Finner ikke stedet du søkte etter.');
//       }
//     } catch (error) {
//       alert('Kunne ikke hente værdata. Sjekk internettforbindelsen.');
//     } finally {
//       setLaster(false);
//     }
//   };

//   return (
//     <ImageBackground
//       /* Her henter vi ny.png fra den lokale mappen din */
//       source={require('../../assets/images/ny.png')}
//       style={styles.background}
//     >
//       <View style={styles.overlay}>
//         {/* Værinformasjon i midten */}
//         <View style={styles.weatherInfo}>
//           <Text style={styles.cityName}>{visningsNavn}</Text>
//           <Text style={styles.weatherCondition}>{vaerBeskrivelse}</Text>
          
//           {/* Temperaturfarge: Rød tekst dersom temperaturen er under 0 */}
//           <Text style={[
//             styles.temperature, 
//             temperatur !== null && temperatur < 0 ? styles.coldTemperature : styles.normalTemperature
//           ]}>
//             {temperatur !== null ? `${temperatur}°` : '--'}
//           </Text>
//         </View>

//         {/* Søkefelt og knapp */}
//         <View style={styles.searchContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Search any city..."
//             placeholderTextColor="#ccc"
//             value={byNavn}
//             onChangeText={(tekst) => setByNavn(tekst)}
//             onSubmitEditing={hentVaer}
//           />
//           <TouchableOpacity style={styles.searchButton} onPress={hentVaer}>
//             <Text style={styles.searchButtonText}>Søk</Text>
//           </TouchableOpacity>
//         </View>

//         {laster && <ActivityIndicator size="large" color="#ffffff" style={styles.loader} />}
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.4)', // Mørk toning oppå bakgrunnsbildet
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   weatherInfo: {
//     alignItems: 'center',
//     marginBottom: 40,
//   },
//   cityName: {
//     fontSize: 42,
//     color: '#ffffff',
//     fontWeight: '300',
//     marginBottom: 5,
//   },
//   weatherCondition: {
//     fontSize: 18,
//     color: '#e0e0e0',
//     marginBottom: 15,
//   },
//   temperature: {
//     fontSize: 64,
//     fontWeight: '300',
//   },
//   normalTemperature: {
//     color: '#ffffff',
//   },
//   coldTemperature: {
//     color: '#ff4d4d', // Rød skrift ved minusgrader
//   },
//   searchContainer: {
//     width: '85%',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   input: {
//     flex: 1,
//     height: 45,
//     backgroundColor: 'rgba(255, 255, 255, 0.25)',
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     color: '#ffffff',
//     fontSize: 16,
//     marginRight: 10,
//   },
//   searchButton: {
//     backgroundColor: 'rgba(255, 255, 255, 0.35)',
//     paddingVertical: 12,
//     paddingHorizontal: 18,
//     borderRadius: 8,
//   },
//   searchButtonText: {
//     color: '#ffffff',
//     fontWeight: 'bold',
//   },
//   loader: {
//     marginTop: 20,
//   },
// });

// Oppgave 6:
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity, Switch } from 'react-native';

// export default function Oppgave6() {
//   const [passord, setPassord] = useState('');
//   const [brukSpesialtegn, setBrukSpesialtegn] = useState(true);
  
//   // Ny state for minimum antall spesialtegn (kravet fra oppgave 6)
//   const [minSpesialtegn, setMinSpesialtegn] = useState('1');

//   // Funksjon for å sjekke antall spesialtegn i et passord
//   const tellSpesialtegn = (str: string) => {
//     const spesialtegnListe = /[!@#$%^&*(),.?":{}|<>]/g;
//     const treff = str.match(spesialtegnListe);
//     return treff ? treff.length : 0;
//   };

//   // Funksjon for å generere passord
//   const genererPassord = () => {
//     const tegnsett = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklm-nopqrstuvwxyz0123456789';
//     const spesialtegnSet = '!@#$%^&*';
    
//     const kravAntall = parseInt(minSpesialtegn) || 0;
//     let nyttPassord = '';
//     let gyldig = false;
//     let forsok = 0;

//     // Prøv inntil vi finner et passord som oppfyller kravene (maks 100 forsøk for å unngå henger seg opp)
//     while (!gyldig && forsok < 100) {
//       nyttPassord = '';
//       let lengde = 12; // Standard passordlengde

//       for (let i = 0; i < lengde; i++) {
//         let tegn = tegnsett.charAt(Math.floor(Math.random() * tegns-ett.length));
//         nyttPassord += tegn;
//       }

//       // Hvis brukeren har på spesialtegn, legg til noen basert på kravet eller tilfeldig
//       if (brukSpesialtegn && kravAntall > 0) {
//         let aktuelleSpesialtegn = '';
//         for (let i = 0; i < kravAntall; i++) {
//           aktuelleSpesialtegn += spesialtegn-Set.charAt(Math.floor(Math.random() * spesialtegnSet.length));
//         }
//         // Bytter ut starten av passordet med de påkrevde spesialtegnene
//         nyttPassord = aktuelleSpesialtegn + nyttPass-ord.substring(kravAntall);
//       }

//       // Sjekk om det genererte passordet oppfyller kravet
//       const antallFaktiske = tellSpesialtegn(nyttPassord);
//       if (!brukSpesialtegn || antallFaktiske >= kravAntall) {
//         gyldig = true;
//       }
//       forsok++;
//     }

//     setPassord(nyttPassord);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Passordgenerator</Text>
//       </View>

//       <View style={styles.content}>
//         {/* Viser det genererte passordet */}
//         <View style={styles.resultBox}>
//           <Text style={styles.resultText}>{passord || 'Trykk på knap-pen'}</Text>
//         </View>

//         {/* Bryter for spesialtegn OG det nye input-feltet */}
//         <View style={styles.row}>
//           <Text style={styles.label}>Bruk spesialtegn:</Text>
//           <Switch 
//             value={brukSpesialtegn} 
//             onValueChange={setBrukSpesialtegn} 
//           />
//         </View>

//         {/* Input felt for antall spesialtegn (Krav fra oppgaven) */}
//         <View style={styles.row}>
//           <Text style={styles.label}>Min. antall spesialtegn:</Text>
//           <TextInput
//             style={styles.numberInput}
//             keyboardType="numeric"
//             value={minSpesialtegn}
//             onChangeText={setMinSpesialtegn}
//             maxLength={2}
//           />
//         </View>

//         {/* Generer-knapp */}
//         <TouchableOpacity style={styles.button} onPress={genererPassord}>
//           <Text style={styles.buttonText}>Generer passord</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//   },
//   header: {
//     height: 90,
//     backgroundColor: '#373F51',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: 20,
//   },
//   headerText: {
//     color: '#ffffff',
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
//   content: {
//     padding: 24,
//   },
//   resultBox: {
//     backgroundColor: '#D8DBE2',
//       padding: 16,
//       borderRadius: 8,
//       alignItems: 'center',
//       marginBottom: 30,
//   },
//   resultText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     letterSpacing: 2,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   numberInput: {
//     width: 50,
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#777777',
//     borderRadius: 6,
//     textAlign: 'center',
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#487281',
//     paddingVertical: 14,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontSize: 18,
//     fontWeight: 'bold',

//   },
// }); 
