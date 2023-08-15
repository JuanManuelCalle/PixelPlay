import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, increment, query, where, writeBatch } from "firebase/firestore";
import { db } from "./config";

const juegosRef = collection(db, "JUEGOS");

export const getGames = async (category) => {
  const q = category
    ? query(juegosRef, where("category", "==", category))
    : juegosRef;

    let juegos = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      juegos = [...juegos, {...doc.data(), id: doc.id}]
    });

    return juegos;
};

export const getGame = async (id) => {
  const document = doc(db, "JUEGOS", id);
  const docSnap = await getDoc(document);

  if(docSnap.exists()) return {id: docSnap.id, ...docSnap.data()};

  return null;
}

export const updateJuego = async (id, item) => {
  return await updateDoc(doc(db, "JUEGOS", id), item);
}

export const deleteJuego = async (id) => {
  return await deleteDoc(doc(db, "JUEGOS", id));
}

export const updateManyJuegos = async (items) => {
  const batch = writeBatch(db);

  items.forEach(({id, qty}) => {
    batch.update(doc(db, "JUEGOS", id), {
      stock: increment(-qty)
    })
  })

  batch.commit();
}


export const cargarData = async() => {
  JUEGOS.forEach(async (juego) => {
    await addDoc(booksRef, juego)
  })
}