import { DataStore } from '@aws-amplify/datastore';
import { ScoreTracker } from './models';

export default async function writeScore(username, score, botScore) {
    try {
        await DataStore.save(
            new ScoreTracker({
                "score": score,
                "botScore": botScore,
                "user": username
            })
        )    
        console.log("Post saved successfully!");
    } catch (error) {
      console.log("Error saving post", error);
    }
}

export async function updateScore(username, score, botScore) {
    try {
        const curData = await DataStore.query(ScoreTracker)
        const curScore = curData.filter(i => i.user === username)
        await DataStore.delete(ScoreTracker, (score) => score.user.eq(username));
        writeScore(username, curScore[0].score+score, curScore[0].botScore+botScore)   
    }
    catch (error) {
        console.log("Error saving post", error);
      }
}

export async function getScore(username) {
    try {
        const curData = await DataStore.query(ScoreTracker)
        const curScore = curData.filter(i => i.user === username)
        return curScore[0]   
    }
    catch (error) {
        console.log("Error getting data", error);
      }
}

