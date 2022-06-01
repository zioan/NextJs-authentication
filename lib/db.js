import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://raw2002:soxaOFaVBk5IWsWj@cluster0.7ueiz.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
}
