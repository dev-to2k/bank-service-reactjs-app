import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
} from 'firebase/firestore'
import moment from 'moment/moment'
import firebase from '../firebase/config'
const db = getFirestore(firebase.app)

const postsCollection = collection(db, 'posts')

const postApi = {
  createPost: async (data) => {
    const convertData = {
      ...data,
      createdDate: moment().toDate(),
      createTimestamp: moment().unix(),
    }
    const res = await addDoc(postsCollection, convertData)

    return res
  },
  getListPosts: async () => {
    const querySnapshot = await getDocs(postsCollection)

    const docs = []
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id })
    })

    return docs
  },
  updatePost: async (data) => {
    const postRef = doc(db, 'posts', data.id)
    const postSnap = await getDoc(postRef)

    if (!postSnap.exists) throw new Error('Post not found')

    const postUpdated = await updateDoc(postRef, data)

    return postUpdated
  },
  deletePost: async (postId) => {
    const postRef = doc(db, 'posts', postId)
    const postDeleted = await deleteDoc(postRef)

    return postDeleted
  },
}

export default postApi
