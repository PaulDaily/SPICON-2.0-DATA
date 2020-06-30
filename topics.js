const admin = require('firebase-admin');
const fs = require('fs-extra');
const yaml = require('yamljs');

admin.initializeApp({
    credential: admin.credential.cert(require('./credentials.json')),
});
const db = admin.firestore();

const topics = [
    'mascots-pro',
    'mascots-college',
    'logos-pro',
    'logos-college',
    'kaleidoscope-pro',
    'kaleidoscope-college'
]
git stayus
const update = async(id) => {

    const json = yaml.load(`topics/${id}.yaml`);

    console.log(JSON.stringify(json));

    const ref = db.collection('topics').doc(id);

    await ref.set(json, { merge: true });

    console.log('DONE');

}

for (const topic of topics) {
    update(topic);
}



