import { Client, Account, ID, Avatars, Databases } from "react-native-appwrite";
// import SignIn from "../(auth)/sign-in";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.college",
  databaseId: "670922ad0008d9a99512",
  projectId: "67091e8d000ca703e718",
  usersCollectionId: "6709247a00208b413d9e",
  videoCollectionId: "67092372001ccd5b4701",
  storageId: "670928520016d6747699",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register User

export const createUser = async (email, username, password) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      username,
      email,
      password
    );
    if (!newAccount) throw Error;
    const avatarUrl = avatars.getInitial(username);

    await SignIn(email, password);
    const newUser = await databases.createDocument(
      config.databaseId,
      config.usersCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );
    return newUser;
  } catch (error) {
    console.log(error);
    throw Error;
  }
};

export async function signIn(email, password) {
  try {
    const session = await account.createEmailPasswordSession(email, password);

    return session;
  } catch (error) {
    throw new Error(error);
  }
}

export const getAllPost = async () => {
    try {
      const posts = await databases.listDocuments(  // Use `await` here
        config.databaseId,
        config.videoCollectionId
      );
  
      return posts.documents;
    } catch (error) {
      console.error('Error fetching posts:', error);  // Log the actual error for debugging
      throw new Error('Failed to fetch posts');  // Include an informative error message
    }
  };
