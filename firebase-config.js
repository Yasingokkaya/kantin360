import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// Firestore için gerekli tüm modüller (increment, orderBy, limit dahil) buradan eklenmiştir
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs, 
    doc, 
    setDoc, 
    getDoc, 
    updateDoc, 
    query, 
    where, 
    onSnapshot, 
    deleteDoc, 
    orderBy, 
    limit, 
    increment 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Projenize özel Firebase yapılandırma bilgileri
const firebaseConfig = {
  apiKey: "AIzaSyC5dhh0gf_udX0Whljv9YZmygMGFAChIBg",
  authDomain: "kantin360-8901f.firebaseapp.com",
  projectId: "kantin360-8901f",
  storageBucket: "kantin360-8901f.firebasestorage.app",
  messagingSenderId: "656722025034",
  appId: "1:656722025034:web:94a96f079306c70292a4b3",
  measurementId: "G-9GVKJ3T7MX"
};

// Firebase uygulamasını başlat
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// index.html ve diğer sayfaların kullanabilmesi için tüm fonksiyonlar dışarı aktarılmıştır
export { 
    db, 
    collection, 
    addDoc, 
    getDocs, 
    doc, 
    setDoc, 
    getDoc, 
    updateDoc, 
    query, 
    where, 
    onSnapshot, 
    deleteDoc, 
    orderBy, 
    limit, 
    increment 
};