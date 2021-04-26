import firebase from "firebase/app";
import "firebase/firestore";
import { log } from "node:console";

export enum formCollection {
  ofertaLaboral = "OFERTA_LABORAL",
  ofertaLaboralFreelance = "OFERTA_LABORAL_FREELANCE",
  busquedaDeSocio = "BUSQUEDA_DE_SOCIO",
  contizacionProyecto = "COTIZACION_DE_PROYECTO",
  viernesDePega = "VIERNES_DE_PEGA",
}
let firebaseConfig: Object = {
  apiKey: "AIzaSyC-PMcctlWTFUSBBPdiaAtmaOysFTysJEI",
  authDomain: "proinforms-480b9.firebaseapp.com",
  projectId: "proinforms-480b9",
  storageBucket: "proinforms-480b9.appspot.com",
  messagingSenderId: "654465097043",
  appId: "1:654465097043:web:5ff485a501b4cfb827d5a6",
};
// Initialize Firebase

class Firebase {
  public app: any;
  public firestore: any;
  public allJobs: Object[];
  constructor() {
    this.app = firebase.initializeApp(firebaseConfig);
    this.firestore = firebase.firestore();
    this.allJobs = [];
  }

  public async addJob(coleccion: formCollection, job: Object) {
    try {
      await this.firestore.collection(coleccion).add(job);
      await console.log(job);
    } catch (error) {
      console.error(error);
    }
  }

  public async deleteJobs(coleccion: formCollection, id: String) {
    try {
      await this.firestore.collection(coleccion).doc(id).delete();
    } catch (error) {
      console.error(error);
    }
  }
}

const myFirebase: Firebase = new Firebase();
export default myFirebase;
