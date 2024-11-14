export async function detectImageWithCloudVision(image){
    
const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient();

// const bucketName = 'Bucket where the file resides, e.g. my-bucket';
// const fileName = 'Path to file within bucket, e.g. path/to/image.png';

// Performs property detection on the gcs file
const [result] = await client.imageProperties(image.url);
const colors = result.imagePropertiesAnnotation.dominantColors.colors;
colors.forEach(color => console.log(color));
}