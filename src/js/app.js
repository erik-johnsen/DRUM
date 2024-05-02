import firebaseConfig from "./firebaseConfig";
import {initializeApp} from 'firebase/app'
import {getFirestore, collection, deleteDoc, doc, onSnapshot} from 'firebase/firestore'
initializeApp(firebaseConfig)
const database = getFirestore()
const wineCollection = collection(database, 'wineCollection')

// GET DATA FROM DATABASE
onSnapshot(wineCollection, (snapshot)=>{
	const wineArray = []
	snapshot.docs.forEach(item => {
		wineArray.push({id: item.id, ...item.data()})
		console.log(wineArray);
	})
})


