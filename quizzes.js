const admin = require('firebase-admin');
const fs = require('fs-extra');
const yaml = require('yamljs');

admin.initializeApp({
    credential: admin.credential.cert(require('./credentials.json')),
});
const db = admin.firestore();

const quizzes = [
    'mascots-pro-easy',
    'mascots-pro-medium',
    'mascots-pro-hard',
    'mascots-college-easy',
    'mascots-college-medium',
    'mascots-college-hard',
    'logos-pro-easy',
    'logos-pro-medium',
    'logos-pro-hard',
    'kaleidoscope-college-easy',
    'kaleidoscope-college-medium',
    'kaleidoscope-college-hard'    
]


const update = async(quizId) => {

    const json = yaml.load(`quizzes/${quizId}.yaml`);

    console.log(JSON.stringify(json));

    const ref = db.collection('quizzes').doc(quizId);

    await ref.set(json, { merge: true });

    console.log('DONE');

}

for (const quiz of quizzes) {
    update(quiz);
}



