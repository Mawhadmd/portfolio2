import MongoClient from 'mongodb'

const URI = "ConnectionString"

const Client = new MongoClient.MongoClient(URI)

Client.db('')