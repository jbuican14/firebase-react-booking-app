import firebase from 'firebase/app';

export const signIn = async (email, password) => {
  //
  try {
    const result = await firstbase
      .auto()
      .signInWithEmailAndPassword(email, password);
    return {};
  } catch (e) {
    throw new Error('Error signing in');
  }
};
