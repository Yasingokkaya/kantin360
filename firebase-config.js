import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// Firestore fonksiyonlarına orderBy ve limit ekledik:
import { 
    getFirestore, collection, addDoc, getDocs, doc, 
    setDoc, getDoc, updateDoc, query, where, onSnapshot, 
    deleteDoc, orderBy, limit 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC5dhh0gf_udX0Whljv9YZmygMGFAChIBg",
  authDomain: "kantin360-8901f.firebaseapp.com",
  projectId: "kantin360-8901f",
  storageBucket: "kantin360-8901f.firebasestorage.app",
  messagingSenderId: "656722025034",
  appId: "1:656722025034:web:94a96f079306c70292a4b3",
  measurementId: "G-9GVKJ3T7MX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Hepsini dışarı aktarıyoruz ki index.html veya diğer sayfalar kullanabilsin
export { 
    db, collection, addDoc, getDocs, doc, setDoc, 
    getDoc, updateDoc, query, where, onSnapshot, 
    deleteDoc, orderBy, limit 
};