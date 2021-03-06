import * as firebase from "firebase"

import { FirebaseConfig } from "./keys"
firebase.initializeApp(FirebaseConfig)

const databaseRef = firebase.database().ref()
export const clientsRef = databaseRef.child("clients")
export const resourcesRef = databaseRef.child("resources")
export const projectsRef = databaseRef.child("projects")
